<template>
  <div class="page-enter">
    <HeroSection
      code="CAREERS"
      eyebrow="Trabalhe Conosco"
      headlineHtml="Sua carreira pode manter a <span class='accent'>indústria</span><br/>em <span class='underline'>movimento</span>"
      sub="A Pred Engenharia conecta serviços técnicos, engenharia de manutenção, confiabilidade, tecnologia e automação para resolver desafios reais de segurança, disponibilidade e produtividade em ambientes industriais."
      primaryCta="Enviar Currículo"
      secondaryCta="Conhecer Áreas"
      primaryHref="#candidatura"
      secondaryHref="#areas"
      :stats="[
        { value: 30, prefix: '+', label: 'Anos de história' },
        { value: 3, label: 'Áreas de negócio' },
        { value: 23, label: 'Registros e marcas' },
      ]"
      imageUrl="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80"
      imageAlt="Profissional técnico em ambiente industrial"
      floatingNum="PRED"
      floatingLbl="Talentos que constroem confiança"
    />

    <TrustBar />

    <section id="areas" class="s">
      <div class="wrap">
        <SectionHead
          num="01"
          eyebrow="Onde você pode atuar"
          title="Talentos que unem <span style='color:var(--red)'>campo, método e tecnologia</span>"
          lede="Nem toda trajetória precisa começar pronta. Se você tem curiosidade técnica, vontade de aprender e respeito por segurança, já existe espaço para uma boa conversa."
        />

        <div class="career-area-grid">
          <div
            v-for="(area, i) in areas"
            :key="area.title"
            :class="`card reveal reveal-delay-${(i % 3) + 1} ${area.dark ? 'dark' : ''}`"
          >
            <div class="career-card-head">
              <span class="card-num">{{ area.num }}</span>
              <span :class="`career-icon ${area.dark ? 'dark' : ''}`">{{ area.icon }}</span>
            </div>
            <h3 class="card-title">{{ area.title }}</h3>
            <p class="card-body">{{ area.body }}</p>
            <div :class="`tag ${area.dark ? 'dark' : area.featured ? 'red' : 'cyan'}`">{{ area.tag }}</div>
          </div>
        </div>
      </div>
    </section>

    <DividerPulse />

    <section class="s paper2">
      <div class="wrap">
        <div class="career-belief-grid">
          <div class="reveal">
            <div class="section-eyebrow">
              <span class="num mono">02</span>
              <span>Nosso Jeito</span>
              <span class="line"></span>
            </div>
            <h2 class="h-section section-title">
              Um lugar para quem gosta de <span :style="{ color: 'var(--red)' }">resolver bem</span>
            </h2>
            <p class="career-lede">
              A Pred trabalha com problemas que importam: ativos críticos, inspeções, PCM, confiabilidade, mobilidade, automação e decisões que afetam segurança e produtividade. Por isso, valorizamos gente cuidadosa, colaborativa e tecnicamente inquieta.
            </p>
            <div class="career-signal">
              <div>
                <span class="mono">AQUI CONTA</span>
                <strong>clareza, evidência, aprendizado e presença em campo.</strong>
              </div>
            </div>
          </div>

          <div class="career-principles">
            <div
              v-for="(item, i) in principles"
              :key="item.title"
              :class="`reveal reveal-delay-${(i % 4) + 1}`"
            >
              <span class="mono">{{ String(i + 1).padStart(2, '0') }}</span>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="candidatura" class="s dark">
      <div class="wrap">
        <div class="career-application-grid">
          <div class="career-application-copy reveal">
            <div class="section-eyebrow">
              <span class="num mono">03</span>
              <span>Candidatura Espontânea</span>
              <span class="line"></span>
            </div>
            <h2 class="h-section section-title">
              Envie seu currículo. O resto fica <span :style="{ color: 'var(--cyan)' }">do seu jeito</span>.
            </h2>
            <p>
              O currículo é o único campo obrigatório. Se quiser, use os campos opcionais para contar onde você quer atuar, quais projetos te representam ou por que seu perfil combina com a Pred.
            </p>
            <ul class="career-notes">
              <li v-for="note in notes" :key="note">{{ note }}</li>
            </ul>
          </div>

          <form class="career-form reveal reveal-delay-2" @submit.prevent="submitApplication">
            <div class="career-form-head">
              <div>
                <h3>Envie sua candidatura</h3>
                <p>Só o currículo é obrigatório.</p>
              </div>
              <span class="tag red">LGPD</span>
            </div>

            <div class="career-file-zone" @dragover.prevent @drop.prevent="onDrop">
              <label for="resume" class="career-file-label">
                <span class="career-file-icon">CV</span>
                <span>
                  <strong>{{ selectedFile ? selectedFile.name : 'Selecione ou arraste seu currículo' }}</strong>
                  <small>PDF, DOC, DOCX ou ODT até 8 MB</small>
                </span>
              </label>
              <input
                id="resume"
                ref="resumeInput"
                class="career-file-input"
                type="file"
                accept=".pdf,.doc,.docx,.odt"
                required
                @change="onFileChange"
              />
            </div>

            <div v-if="fileError" class="career-alert error">{{ fileError }}</div>

            <div class="row2">
              <div>
                <label class="lbl" for="name">Nome</label>
                <input id="name" v-model="form.name" placeholder="Como podemos te chamar?" />
              </div>
              <div>
                <label class="lbl" for="email">E-mail</label>
                <input id="email" v-model="form.email" type="email" placeholder="voce@email.com" />
              </div>
            </div>

            <div class="row2">
              <div>
                <label class="lbl" for="phone">Telefone</label>
                <input id="phone" v-model="form.phone" placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label class="lbl" for="city">Cidade / UF</label>
                <input id="city" v-model="form.city" placeholder="São Paulo / SP" />
              </div>
            </div>

            <div class="row2">
              <div>
                <label class="lbl" for="area">Área de interesse</label>
                <select id="area" v-model="form.area">
                  <option value="">Selecione se quiser</option>
                  <option v-for="area in interestAreas" :key="area">{{ area }}</option>
                </select>
              </div>
              <div>
                <label class="lbl" for="linkedin">LinkedIn / Portfólio</label>
                <input id="linkedin" v-model="form.linkedin" placeholder="https://..." />
              </div>
            </div>

            <div>
              <label class="lbl" for="message">Mensagem opcional</label>
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Se quiser impressionar: conte um projeto, uma melhoria que liderou, um treinamento importante ou o tipo de desafio industrial que te motiva."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando...' : submitLabel }}
              <span class="arrow">→</span>
            </button>

            <div v-if="feedback" :class="`career-alert ${status}`">{{ feedback }}</div>
            <div class="btn-microcopy dark">CURRÍCULO OBRIGATÓRIO · DEMAIS DADOS OPCIONAIS · DADOS PROTEGIDOS</div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useReveal()

useSeoMeta({
  title: 'Trabalhe Conosco - Pred Engenharia',
  ogTitle: 'Trabalhe Conosco - Pred Engenharia',
  description: 'Envie seu currículo para a Pred Engenharia e faça parte de uma empresa que integra serviços técnicos, engenharia de manutenção, tecnologia e automação industrial.',
  twitterCard: 'summary_large_image',
})

const areas = [
  {
    num: '01',
    icon: 'EM',
    title: 'Engenharia de Manutenção & Confiabilidade',
    body: 'Estratégia de manutenção, criticidade, planos, indicadores, análise de falhas e confiabilidade aplicada à rotina industrial.',
    tag: 'Engenharia',
    featured: true,
  },
  {
    num: '02',
    icon: 'ST',
    title: 'Serviços Técnicos e Inspeções',
    body: 'Vibração, termografia, ultrassom, inspeção sensitiva, PCM e não conformidades com rastreabilidade de campo.',
    tag: 'Campo',
  },
  {
    num: '03',
    icon: 'TI',
    title: 'Tecnologia S2i e Perigômetro',
    body: 'Aplicações digitais, mobilidade, dashboards, integração com ERP, priorização GUT e transformação de dados em decisão.',
    tag: 'Tecnologia',
    dark: true,
  },
  {
    num: '04',
    icon: 'AI',
    title: 'Automação Industrial',
    body: 'Soluções para processos industriais, monitoramento, sistemas fixos de termografia e integração operacional.',
    tag: 'Automação',
  },
  {
    num: '05',
    icon: 'CT',
    title: 'Consultoria e Treinamentos',
    body: 'Transferência de conhecimento, capacitação técnica, método MCI e apoio à maturidade das equipes de manutenção.',
    tag: 'Conhecimento',
  },
  {
    num: '06',
    icon: 'OP',
    title: 'Operações, Projetos e Suporte',
    body: 'Organização, acompanhamento, documentação, atendimento e suporte para que a entrega técnica aconteça com fluidez.',
    tag: 'Operação',
  },
]

const principles = [
  {
    title: 'Aprendizado com propósito',
    body: 'A rotina combina estudo, prática, método e exposição a problemas industriais reais.',
  },
  {
    title: 'Respeito ao campo',
    body: 'A melhor solução nasce quando ouvimos quem opera, mede, inspeciona, planeja e executa.',
  },
  {
    title: 'Tecnologia com utilidade',
    body: 'Usamos sistemas, dados e automação para simplificar decisões, não para criar complexidade desnecessária.',
  },
  {
    title: 'Segurança e responsabilidade',
    body: 'Trabalhar com ativos industriais exige cuidado, rastreabilidade, ética e compromisso com a operação do cliente.',
  },
]

const notes = [
  'Aceitamos candidatura espontânea para oportunidades atuais e futuras.',
  'Você pode enviar apenas o currículo, sem preencher dados pessoais adicionais.',
  'Uma mensagem curta pode ajudar a mostrar seu momento de carreira e seus interesses.',
  'Perfis técnicos, digitais, administrativos e de apoio a projetos são bem-vindos.',
]

const interestAreas = [
  'Engenharia de Manutenção & Confiabilidade',
  'Serviços Técnicos e Inspeções',
  'Tecnologia da Informação / Apps',
  'Automação Industrial',
  'Consultoria / Treinamentos',
  'Operações / Projetos',
  'Administrativo / Comercial',
]

const submitLabel = 'Enviar currículo'
const maxFileSize = 8 * 1024 * 1024
const allowedExtensions = ['pdf', 'doc', 'docx', 'odt']

const form = reactive({
  name: '',
  email: '',
  phone: '',
  city: '',
  area: '',
  linkedin: '',
  message: '',
})

const resumeInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const fileError = ref('')
const feedback = ref('')
const status = ref<'success' | 'error' | ''>('')
const isSubmitting = ref(false)

function setFile(file?: File | null) {
  fileError.value = ''
  feedback.value = ''
  status.value = ''

  if (!file) {
    selectedFile.value = null
    return
  }

  const extension = file.name.split('.').pop()?.toLowerCase()

  if (!extension || !allowedExtensions.includes(extension)) {
    selectedFile.value = null
    fileError.value = 'Envie um currículo em PDF, DOC, DOCX ou ODT.'
    if (resumeInput.value) resumeInput.value.value = ''
    return
  }

  if (file.size > maxFileSize) {
    selectedFile.value = null
    fileError.value = 'O arquivo precisa ter até 8 MB.'
    if (resumeInput.value) resumeInput.value.value = ''
    return
  }

  selectedFile.value = file
}

function onFileChange(event: Event) {
  /*const input = event.target as HTMLInputElement
  setFile(input.files?.[0])*/
}

function onDrop(event: DragEvent) {
  setFile(event.dataTransfer?.files?.[0])
}

async function submitApplication() {
  /*if (!selectedFile.value) {
    status.value = 'error'
    feedback.value = ''
    fileError.value = 'Anexe seu currículo para enviar a candidatura.'
    return
  }

  isSubmitting.value = true
  feedback.value = ''
  status.value = ''

  const payload = new FormData()
  payload.append('resume', selectedFile.value)

  Object.entries(form).forEach(([key, value]) => {
    if (value.trim()) payload.append(key, value.trim())
  })

  try {
    await $fetch('/api/candidaturas', {
      method: 'POST',
      body: payload,
    })

    status.value = 'success'
    feedback.value = 'Currículo enviado com sucesso. Obrigado por querer construir essa história com a Pred.'
  } catch (error) {
    status.value = 'error'
    feedback.value = error instanceof Error ? error.message : 'Não foi possível enviar agora. Tente novamente em alguns instantes.'
  } finally {
    isSubmitting.value = false
  }*/
}
</script>

<style scoped>
.career-area-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.career-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.career-card-head .card-num {
  margin-bottom: 0;
}

.career-icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  background: rgba(230,48,48,0.1);
  color: var(--red);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.career-icon.dark {
  background: rgba(0,194,224,0.18);
  color: var(--cyan);
}

.career-area-grid .tag {
  margin-top: 24px;
}

.career-belief-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 64px;
  align-items: center;
}

.career-lede {
  margin: 24px 0 32px;
  color: var(--ink-400);
  font-size: 17px;
  line-height: 1.65;
  max-width: 620px;
}

.career-signal {
  border: 1px solid var(--paper-line-strong);
  border-radius: 6px;
  background: #fff;
  padding: 24px;
  max-width: 540px;
}

.career-signal span {
  display: block;
  color: var(--red);
  font-size: 11px;
  letter-spacing: 0.16em;
  margin-bottom: 8px;
}

.career-signal strong {
  display: block;
  color: var(--ink-800);
  font-size: 22px;
  line-height: 1.25;
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.career-principles {
  display: grid;
  gap: 0;
  border-top: 1px solid var(--paper-line-strong);
}

.career-principles > div {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 20px;
  padding: 26px 0;
  border-bottom: 1px solid var(--paper-line-strong);
}

.career-principles .mono {
  color: var(--red);
  font-size: 12px;
  letter-spacing: 0.16em;
}

.career-principles h3 {
  margin: 0 0 8px;
  color: var(--ink-800);
  font-size: 18px;
}

.career-principles p {
  margin: 0;
  color: var(--ink-400);
  font-size: 14.5px;
  line-height: 1.6;
}

.career-application-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 64px;
  align-items: start;
}

.career-application-copy p {
  margin: 24px 0 0;
  color: rgba(255,255,255,0.72);
  font-size: 16px;
  line-height: 1.65;
  max-width: 560px;
}

.career-notes {
  list-style: none;
  margin: 34px 0 0;
  padding: 0;
  display: grid;
  gap: 14px;
  max-width: 560px;
}

.career-notes li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  color: rgba(255,255,255,0.78);
  font-size: 14.5px;
  line-height: 1.55;
}

.career-notes li::before {
  content: "→";
  color: var(--cyan);
  font-family: var(--font-mono);
  flex-shrink: 0;
}

.career-form {
  background: #fff;
  color: var(--ink-800);
  padding: 36px;
  border-radius: 6px;
  display: grid;
  gap: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.career-form-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 2px;
}

.career-form h3 {
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin: 0 0 8px;
}

.career-form-head p {
  margin: 0;
  color: var(--ink-300);
  font-size: 14px;
}

.career-form .row2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.career-form .lbl {
  font-family: var(--font-mono);
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-300);
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
}

.career-form input,
.career-form textarea,
.career-form select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--paper-line-strong);
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 14.5px;
  color: var(--ink-800);
  background: var(--paper);
  transition: border-color 0.18s, background 0.18s;
}

.career-form input:focus,
.career-form textarea:focus,
.career-form select:focus {
  outline: none;
  border-color: var(--red);
  background: #fff;
}

.career-form textarea {
  min-height: 118px;
  resize: vertical;
}

.career-file-zone {
  position: relative;
  border: 1px dashed rgba(230,48,48,0.45);
  background:
    linear-gradient(rgba(230,48,48,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(230,48,48,0.035) 1px, transparent 1px),
    #fff;
  background-size: 26px 26px;
  border-radius: 6px;
  padding: 18px;
}

.career-file-label {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.career-file-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--red);
  color: #fff;
  font-family: var(--font-mono);
  font-weight: 600;
  letter-spacing: 0.08em;
}

.career-file-label strong {
  display: block;
  color: var(--ink-800);
  font-size: 15px;
  line-height: 1.25;
}

.career-file-label small {
  display: block;
  margin-top: 5px;
  color: var(--ink-300);
  font-size: 12.5px;
}

.career-file-input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.career-form button {
  width: 100%;
  justify-content: center;
  margin-top: 6px;
}

.career-form button:disabled {
  opacity: 0.7;
  cursor: wait;
}

.career-alert {
  border-radius: 4px;
  padding: 12px 14px;
  font-size: 13.5px;
  line-height: 1.45;
}

.career-alert.success {
  background: rgba(0,194,224,0.12);
  color: #006c7d;
}

.career-alert.error {
  background: rgba(230,48,48,0.1);
  color: var(--red-deep);
}

@media (max-width: 1080px) {
  .career-area-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .career-belief-grid,
  .career-application-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .career-area-grid,
  .career-form .row2 {
    grid-template-columns: 1fr;
  }

  .career-form {
    padding: 28px;
  }

  .career-principles > div {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .career-file-label {
    align-items: flex-start;
  }
}
</style>
