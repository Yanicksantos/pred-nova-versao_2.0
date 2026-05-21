import { createError, defineEventHandler, readMultipartFormData } from 'h3'
import { mkdir, writeFile } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import { basename, extname, join } from 'node:path'

const uploadRoot = join(process.cwd(), '.data', 'candidaturas')
const allowedExtensions = new Set(['.pdf', '.doc', '.docx', '.odt'])
const maxFileSize = 8 * 1024 * 1024

function cleanFilename(filename: string) {
  const base = basename(filename)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  return base || 'curriculo'
}

function getText(parts: Awaited<ReturnType<typeof readMultipartFormData>>, field: string) {
  return parts
    ?.find((part) => part.name === field && !part.filename)
    ?.data
    .toString('utf8')
    .trim()
    .slice(0, 1200) || ''
}

export default defineEventHandler(async (event) => {
  const parts = await readMultipartFormData(event)

  if (!parts?.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Envie o currículo para concluir a candidatura.',
    })
  }

  const resume = parts.find((part) => part.name === 'resume' && part.filename)

  if (!resume?.filename || !resume.data?.byteLength) {
    throw createError({
      statusCode: 400,
      statusMessage: 'O currículo é obrigatório.',
    })
  }

  const extension = extname(resume.filename).toLowerCase()

  if (!allowedExtensions.has(extension)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Formato inválido. Envie PDF, DOC, DOCX ou ODT.',
    })
  }

  if (resume.data.byteLength > maxFileSize) {
    throw createError({
      statusCode: 413,
      statusMessage: 'O currículo precisa ter até 8 MB.',
    })
  }

  await mkdir(uploadRoot, { recursive: true })

  const id = `${new Date().toISOString().replace(/\D/g, '').slice(0, 14)}-${randomUUID().slice(0, 8)}`
  const originalFilename = cleanFilename(resume.filename)
  const storedFilename = `${id}-${originalFilename}`
  const resumePath = join(uploadRoot, storedFilename)

  await writeFile(resumePath, resume.data)

  const metadata = {
    id,
    submittedAt: new Date().toISOString(),
    originalFilename,
    storedFilename,
    size: resume.data.byteLength,
    mimeType: resume.type || '',
    candidate: {
      name: getText(parts, 'name'),
      email: getText(parts, 'email'),
      phone: getText(parts, 'phone'),
      city: getText(parts, 'city'),
      area: getText(parts, 'area'),
      linkedin: getText(parts, 'linkedin'),
      message: getText(parts, 'message'),
    },
  }

  await writeFile(join(uploadRoot, `${id}.json`), JSON.stringify(metadata, null, 2), 'utf8')

  return {
    ok: true,
    id,
  }
})
