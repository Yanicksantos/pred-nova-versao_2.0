<template>
  <section id="contact" class="contact-section">
    <div class="wrap">
      <div class="contact-grid">
        <div class="contact-pitch reveal">
          <div class="section-eyebrow">
            <span class="num mono">07</span>
            <span>Próximo Passo</span>
            <span class="line"></span>
          </div>
          <h2 class="h-section" v-html="pitchTitleHtml"></h2>
          <p>{{ pitchSub }}</p>
          <ul class="contact-bullets">
            <li v-for="(b, i) in bullets" :key="i">{{ b }}</li>
          </ul>
          <div :style="{ marginTop:'36px', display:'flex', gap:'24px', flexWrap:'wrap', fontFamily:'var(--font-mono)', fontSize:'12px', color:'rgba(255,255,255,0.55)', letterSpacing:'0.12em', textTransform:'uppercase' }">
            <div>
              <div :style="{ color:'var(--cyan)', marginBottom:'6px' }">TELEFONE</div>
              <div :style="{ color:'#fff', fontSize:'14px' }">(11) 3456-7890</div>
            </div>
            <div>
              <div :style="{ color:'var(--cyan)', marginBottom:'6px' }">E-MAIL</div>
              <div :style="{ color:'#fff', fontSize:'14px' }">contato@pred.com.br</div>
            </div>
            <div>
              <div :style="{ color:'var(--cyan)', marginBottom:'6px' }">ENDEREÇO</div>
              <div :style="{ color:'#fff', fontSize:'14px' }">Av. Industrial, 1000 — SP</div>
            </div>
          </div>
        </div>

        <form class="contact-form reveal reveal-delay-2" @submit.prevent="onSubmit">
          <h3>Solicite seu diagnóstico</h3>
          <div class="mono" :style="{ fontSize:'11px', color:'var(--ink-300)', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:'6px' }">
            Respondemos em até 24 horas
          </div>
          <div class="row2">
            <div>
              <label class="lbl">Nome <span class="req">*</span></label>
              <input required placeholder="Seu nome" />
            </div>
            <div>
              <label class="lbl">Empresa <span class="req">*</span></label>
              <input required placeholder="Nome da empresa" />
            </div>
          </div>
          <div class="row2">
            <div>
              <label class="lbl">E-mail Corporativo <span class="req">*</span></label>
              <input type="email" required placeholder="voce@empresa.com.br" />
            </div>
            <div>
              <label class="lbl">Telefone</label>
              <input placeholder="(11) 99999-9999" />
            </div>
          </div>
          <div>
            <label class="lbl">Setor da operação</label>
            <select>
              <option value="" disabled selected>Selecione o setor...</option>
              <option>Mineração</option>
              <option>Óleo &amp; Gás</option>
              <option>Siderurgia</option>
              <option>Papel &amp; Celulose</option>
              <option>Alimentos &amp; Bebidas</option>
              <option>Cimento</option>
              <option>Outro</option>
            </select>
          </div>
          <div>
            <label class="lbl">Mensagem</label>
            <textarea placeholder="Descreva brevemente seu desafio de manutenção..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg">
            {{ sent ? '✓ Solicitação Enviada' : submitLabel }} <span class="arrow">→</span>
          </button>
          <div class="btn-microcopy dark" :style="{ textAlign: 'center' }">
            SEM COMPROMISSO · DADOS PROTEGIDOS · LGPD
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  pitchTitleHtml: string
  pitchSub: string
  bullets: string[]
  submitLabel?: string
}>(), {
  submitLabel: 'Quero meu Diagnóstico',
})

const sent = ref(false)

function onSubmit() {
  sent.value = true
  setTimeout(() => { sent.value = false }, 4000)
}
</script>
