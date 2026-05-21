<template>
  <div class="page-enter">
    <PredHeroSection
      code="MCI"
      eyebrow="Método Proprietário · Patenteado"
      headlineHtml="Obtenha todo o <span class='accent'>potencial</span><br/>da sua <span class='underline'>manutenção</span>"
      sub="O Método MCI® da Pred Engenharia oferece uma perspectiva revolucionária que integra toda a cadeia de valor da manutenção industrial, garantindo resultados auditáveis e mensuráveis."
      primaryCta="Baixar Guia MCI® Gratuito"
      secondaryCta="Ver Casos de Aplicação"
      :stats="[
        { value: 100, suffix: '%', label: 'Rastreabilidade' },
        { value: 35, prefix: '+', suffix: '%', label: 'Redução de custos' },
        { value: 50, prefix: '+', suffix: '%', label: 'Disponibilidade' },
      ]"
      imageUrl="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=900&q=80"
      imageAlt="Engenheiro analisando sistema industrial"
      floatingNum="MCI®"
      floatingLbl="Método Integrado"
    />

    <PredTrustBar />

    <!-- Introdução ao Método -->
    <section class="s">
      <div class="wrap">
        <div
          :style="{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'center' }"
          class="intro-grid"
        >
          <div class="reveal">
            <div class="section-eyebrow">
              <span class="num mono">01</span>
              <span>O Método</span>
              <span class="line"></span>
            </div>
            <h2 class="h-section section-title" :style="{ marginTop: '14px' }">
              Manutenção <span :style="{ color: 'var(--red)' }">Centrada</span><br/>na Integridade
            </h2>
            <p :style="{ marginTop: '24px', fontSize: '17px', lineHeight: '1.6', color: 'var(--ink-400)' }">
              O Método MCI® representa uma abordagem sistêmica e estruturada para a gestão da manutenção industrial. Desenvolvido internamente pela Pred Engenharia, integra as melhores práticas de engenharia, execução e confiabilidade em um ciclo contínuo de melhoria.
            </p>
            <div :style="{ marginTop: '32px', display: 'grid', gap: '14px' }">
              <div
                v-for="(p, i) in introPilares"
                :key="i"
                :style="{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'baseline',
                  padding: '14px 0',
                  borderBottom: '1px solid var(--paper-line)',
                }"
              >
                <div :style="{ width: '6px', height: '6px', background: 'var(--red)', borderRadius: '50%', flexShrink: '0', marginTop: '6px' }"></div>
                <div>
                  <div :style="{ fontWeight: '600', fontSize: '15px' }">{{ p.l }}</div>
                  <div :style="{ fontSize: '13.5px', color: 'var(--ink-300)', marginTop: '2px' }">{{ p.v }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="reveal reveal-delay-2" :style="{ position: 'relative' }">
            <div :style="{ position: 'relative', aspectRatio: '4/3', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--paper-line-strong)' }">
              <img src="https://images.unsplash.com/photo-1581094488379-6c9d9e26e0a4?w=900&q=80" alt="Engenheiro em planta industrial" :style="{ width: '100%', height: '100%', objectFit: 'cover' }" />
              <div :style="{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg, rgba(10,22,40,0.3), transparent 50%)' }"></div>
              <div :style="{ position: 'absolute', top: '18px', left: '18px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#fff', letterSpacing: '0.16em', display: 'flex', alignItems: 'center', gap: '8px' }">
                <span :style="{ width: '8px', height: '8px', background: 'var(--cyan)' }"></span>
                CASO REAL · 2025
              </div>
            </div>
            <div :style="{ position: 'absolute', bottom: '-32px', right: '-16px', background: 'var(--ink-800)', color: '#fff', padding: '24px', borderRadius: '6px', maxWidth: '280px', boxShadow: '0 24px 50px rgba(10,22,40,0.3)' }">
              <div class="mono" :style="{ color: 'var(--cyan)', fontSize: '11px', letterSpacing: '0.16em', marginBottom: '8px' }">RESULTADO</div>
              <div class="h-display" :style="{ fontSize: '36px', lineHeight: '1', marginBottom: '6px' }">+47%</div>
              <div :style="{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5' }">Ganho de disponibilidade em planta de fertilizantes — 18 meses de aplicação MCI®</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Três Pilares -->
    <section class="s paper2">
      <div class="wrap">
        <PredSectionHead
          num="02"
          eyebrow="Os Três Pilares"
          title="Engenharia. PCM.<br/><span style='color:var(--red)'>Confiabilidade.</span>"
          lede="Três frentes que operam em sincronia. A maioria das consultorias trata cada pilar isoladamente — o MCI® é o ponto onde elas se encontram."
        />
        <div
          :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', position: 'relative' }"
          class="pillars-grid"
        >
          <!-- Connector lines (desktop only) -->
          <div class="pillars-connectors" :style="{ position: 'absolute', top: '80px', left: 'calc(33% - 24px)', width: '48px', height: '48px', display: 'grid', placeItems: 'center', zIndex: '2' }">
            <div :style="{ width: '28px', height: '28px', background: 'var(--red)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: '600', fontSize: '13px', borderRadius: '50%', border: '3px solid var(--paper-2)' }">+</div>
          </div>
          <div class="pillars-connectors" :style="{ position: 'absolute', top: '80px', left: 'calc(66% - 24px)', width: '48px', height: '48px', display: 'grid', placeItems: 'center', zIndex: '2' }">
            <div :style="{ width: '28px', height: '28px', background: 'var(--red)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: '600', fontSize: '13px', borderRadius: '50%', border: '3px solid var(--paper-2)' }">+</div>
          </div>

          <div
            v-for="(p, i) in pilares"
            :key="i"
            :class="`reveal reveal-delay-${i + 1}`"
            :style="{
              background: '#fff',
              border: '1px solid var(--paper-line)',
              padding: '36px',
              position: 'relative',
              zIndex: '1',
              borderRadius: i === 0 ? '6px 0 0 6px' : i === 2 ? '0 6px 6px 0' : '0',
              borderLeft: i > 0 ? 'none' : '1px solid var(--paper-line)',
            }"
          >
            <div class="mono" :style="{ color: p.color, fontSize: '13px', letterSpacing: '0.16em', marginBottom: '24px' }">PILAR {{ p.n }}</div>
            <div :style="{ width: '56px', height: '56px', background: p.iconBg, color: p.iconColor || '#fff', display: 'grid', placeItems: 'center', borderRadius: '6px', fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '26px', marginBottom: '24px' }">
              {{ p.icon }}
            </div>
            <h3 class="h-section" :style="{ fontSize: '30px', marginBottom: '14px' }">{{ p.t }}</h3>
            <p :style="{ margin: '0 0 24px', fontSize: '14.5px', lineHeight: '1.6', color: 'var(--ink-400)' }">{{ p.role }}</p>
            <ul :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '8px', paddingTop: '20px', borderTop: '1px solid var(--paper-line)' }">
              <li v-for="(b, j) in p.bullets" :key="j" :style="{ display: 'flex', gap: '10px', fontSize: '13.5px', color: 'var(--ink-700)' }">
                <span :style="{ color: p.color, fontFamily: 'var(--font-mono)' }">→</span>
                {{ b }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Integração Completa -->
    <section class="s">
      <div class="wrap">
        <div
          :style="{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '64px', alignItems: 'center' }"
          class="int-grid"
        >
          <div class="reveal">
            <div class="section-eyebrow">
              <span class="num mono">03</span>
              <span>Integração de Processos</span>
              <span class="line"></span>
            </div>
            <h2 class="h-section section-title" :style="{ marginTop: '14px' }">
              Integração <span :style="{ color: 'var(--red)' }">completa</span><br/>dos processos
            </h2>
            <p :style="{ marginTop: '24px', fontSize: '16px', lineHeight: '1.6', color: 'var(--ink-400)', maxWidth: '520px' }">
              O Método MCI® conecta os três pilares fundamentais da manutenção em um sistema integrado e auditável. Cada componente trabalha em harmonia para garantir eficiência operacional máxima.
            </p>
            <div :style="{ marginTop: '36px', display: 'grid', gap: '0' }">
              <div
                v-for="(it, i) in integracaoItems"
                :key="i"
                :class="`reveal reveal-delay-${i + 1}`"
                :style="{
                  padding: '24px 0',
                  borderBottom: '1px solid var(--paper-line)',
                  display: 'grid',
                  gridTemplateColumns: '54px 1fr',
                  gap: '18px',
                }"
              >
                <div class="mono" :style="{ color: it.c, fontSize: '13px', letterSpacing: '0.16em' }">{{ it.n }}</div>
                <div>
                  <div class="h-section" :style="{ fontSize: '22px', marginBottom: '6px' }">{{ it.t }}</div>
                  <div :style="{ fontSize: '14.5px', color: 'var(--ink-400)', lineHeight: '1.55' }">{{ it.d }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="reveal reveal-delay-2" :style="{ position: 'relative' }">
            <!-- Cycle diagram -->
            <div :style="{ aspectRatio: '1/1', maxWidth: '480px', margin: '0 auto', position: 'relative' }">
              <svg viewBox="0 0 400 400" :style="{ width: '100%', height: '100%' }">
                <!-- Outer ring -->
                <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(10,22,40,0.08)" stroke-width="1" />
                <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(10,22,40,0.06)" stroke-width="1" />
                <circle cx="200" cy="200" r="90" fill="none" stroke="rgba(10,22,40,0.06)" stroke-width="1" />
                <!-- Arcs -->
                <path d="M 200 30 A 170 170 0 0 1 347.2 285" fill="none" stroke="var(--ink-800)" stroke-width="3" stroke-linecap="round" />
                <path d="M 347.2 285 A 170 170 0 0 1 52.8 285" fill="none" stroke="var(--red)" stroke-width="3" stroke-linecap="round" />
                <path d="M 52.8 285 A 170 170 0 0 1 200 30" fill="none" stroke="var(--cyan)" stroke-width="3" stroke-linecap="round" />
                <!-- Pillar dots -->
                <circle cx="200" cy="30" r="14" fill="var(--ink-800)" />
                <circle cx="347.2" cy="285" r="14" fill="var(--red)" />
                <circle cx="52.8" cy="285" r="14" fill="var(--cyan)" />
                <!-- Center -->
                <circle cx="200" cy="200" r="56" fill="var(--ink-800)" />
                <text x="200" y="195" text-anchor="middle" fill="#fff" font-family="var(--font-display)" font-weight="800" font-size="20" letter-spacing="0.05em">MCI</text>
                <text x="200" y="216" text-anchor="middle" fill="var(--cyan)" font-family="var(--font-mono)" font-size="9" letter-spacing="0.18em">MÉTODO</text>
              </svg>
              <!-- Labels -->
              <div :style="{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -130%)', textAlign: 'center' }">
                <div class="mono" :style="{ fontSize: '11px', color: 'var(--ink-300)', letterSpacing: '0.16em' }">PILAR 01</div>
                <div class="h-section" :style="{ fontSize: '18px' }">Engenharia</div>
              </div>
              <div :style="{ position: 'absolute', bottom: '0', right: '0', transform: 'translate(20%, 30%)', textAlign: 'left' }">
                <div class="mono" :style="{ fontSize: '11px', color: 'var(--red)', letterSpacing: '0.16em' }">PILAR 02</div>
                <div class="h-section" :style="{ fontSize: '18px' }">PCM</div>
              </div>
              <div :style="{ position: 'absolute', bottom: '0', left: '0', transform: 'translate(-20%, 30%)', textAlign: 'right' }">
                <div class="mono" :style="{ fontSize: '11px', color: '#007a8e', letterSpacing: '0.16em' }">PILAR 03</div>
                <div class="h-section" :style="{ fontSize: '18px' }">Confiabilidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section class="s dark">
      <div class="wrap">
        <PredSectionHead
          num="04"
          eyebrow="Benefícios Comprovados"
          title="Benefícios do <span style='color:var(--cyan)'>Método MCI®</span>"
          lede="Resultados consistentes em organizações de classe mundial. Métricas auditadas em campo, não estimativas de consultoria."
        />
        <div
          :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }"
          class="ben-grid"
        >
          <div v-for="(b, i) in beneficios" :key="i" :class="`metric reveal reveal-delay-${i + 1}`">
            <div class="corner"></div>
            <div class="metric-num" :style="{ color: i === 3 ? 'var(--cyan)' : '#fff' }">
              <PredAnimatedNumber :value="b.v" :prefix="b.pre" :suffix="b.suf" />
            </div>
            <div class="metric-lbl">{{ b.lbl }}</div>
            <p class="metric-cap">{{ b.cap }}</p>
          </div>
        </div>
        <!-- CTA strip -->
        <div class="reveal" :style="{ marginTop: '48px', background: 'linear-gradient(110deg, var(--red), #b81f1f)', borderRadius: '6px', padding: '40px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px', alignItems: 'center', position: 'relative', overflow: 'hidden' }">
          <div :style="{ position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.15), transparent 60%)' }"></div>
          <div :style="{ position: 'relative', color: '#fff' }">
            <div class="mono" :style="{ fontSize: '11.5px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: '0.85', marginBottom: '10px' }">PRÓXIMO PASSO</div>
            <div class="h-display" :style="{ fontSize: '36px', lineHeight: '1.1', color: '#fff' }">Pronto para Transformar sua Manutenção?</div>
            <div :style="{ marginTop: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.88)', maxWidth: '560px' }">Converse com nossos especialistas e descubra como o Método MCI® pode revolucionar sua operação industrial.</div>
          </div>
          <div :style="{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '10px' }">
            <button class="btn btn-outline btn-lg" :style="{ background: '#fff', color: 'var(--red)', borderColor: '#fff' }">Falar com Especialista <span class="arrow">→</span></button>
            <button class="btn btn-ghost btn-sm" :style="{ color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '10px 16px', justifyContent: 'center' }">Baixar Material Técnico</button>
          </div>
        </div>
      </div>
    </section>

    <PredTestimonialsSection :items="testimonials" />

    <PredContactSection
      pitchTitleHtml="Aplique o MCI® na sua <span style='color:var(--cyan)'>operação</span>"
      pitchSub="O Método MCI® é mais do que uma metodologia — é uma transformação cultural e técnica. Comece com nosso assessment proprietário e veja onde sua operação está hoje."
      :bullets="[
        'Assessment MCI® gratuito da sua operação',
        'Mapeamento dos três pilares no seu contexto',
        'Roadmap de aplicação modular em 12, 18 e 24 meses',
        'Benchmark setorial confidencial',
      ]"
      submitLabel="Quero Aplicar o MCI®"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'pred' })
useReveal()

useSeoMeta({
  title: 'Pred Engenharia - Metodologia MCI®',
  ogTitle: 'Pred Engenharia - Metodologia MCI®',
  description: 'O Método MCI® da Pred Engenharia oferece uma perspectiva revolucionária que integra toda a cadeia de valor da manutenção industrial, garantindo resultados auditáveis e mensuráveis.',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.predengenharia.com.br/mci',
})

const introPilares = [
  { l: 'Resultados auditáveis', v: 'Cada decisão documentada com critérios objetivos' },
  { l: 'Cadeia de valor integrada', v: 'Engenharia, PCM e Confiabilidade no mesmo ciclo' },
  { l: 'Melhoria contínua', v: 'PDCA e SDCA aplicados de forma sistêmica' },
]

const pilares = [
  { n: '01', t: 'Engenharia', color: 'var(--ink-800)', iconBg: 'var(--ink-800)', icon: '⚙', role: 'Define, implementa e revisa estratégias de manutenção através do ciclo PDCA.', bullets: ['Análise de Criticidade', 'Estratégias de Manutenção', 'Revisão Contínua'] },
  { n: '02', t: 'PCM & Execução', color: 'var(--red)', iconBg: 'var(--red)', icon: '≡', role: 'Controla e cumpre as rotinas implementadas através do ciclo SDCA com disciplina operacional.', bullets: ['Planejamento de Rotinas', 'Controle de Execução', 'Padronização'] },
  { n: '03', t: 'Confiabilidade', color: 'var(--cyan)', iconBg: 'var(--cyan)', iconColor: 'var(--ink-800)', icon: '↗', role: 'Gestão sistêmica sobre os desvios com foco em análise de causa-raiz e melhoria contínua.', bullets: ['Análise de Desvios', 'Indicadores de Performance', 'Melhoria Contínua'] },
]

const integracaoItems = [
  { n: '01', t: 'Ciclos PDCA e SDCA', d: 'Metodologia comprovada para gestão de qualidade e melhoria contínua aplicada à manutenção industrial.', c: 'var(--ink-800)' },
  { n: '02', t: 'Resultados Auditáveis', d: 'Documentação completa e rastreabilidade de todas as ações e decisões técnicas tomadas.', c: 'var(--red)' },
  { n: '03', t: 'Cadeia de Valor Integrada', d: 'Visão holística que conecta estratégia, execução e performance operacional num único framework.', c: 'var(--cyan)' },
]

const beneficios = [
  { pre: '+', v: 35, suf: '%', lbl: 'Redução de Custos', cap: 'Custos totais de manutenção, incluindo corretivas e estoque' },
  { pre: '+', v: 50, suf: '%', lbl: 'Disponibilidade', cap: 'Ganho médio em disponibilidade operacional de ativos' },
  { pre: '−', v: 60, suf: '%', lbl: 'Falhas Não Planejadas', cap: 'Eliminação de paradas não programadas após 12 meses' },
  { pre: '', v: 100, suf: '%', lbl: 'Rastreabilidade', cap: 'Toda decisão documentada com critério técnico auditável' },
]

const testimonials = [
  { metric: '+47% disponibilidade', quote: 'O MCI® nos forçou a olhar manutenção como cadeia integrada. PCM deixou de ser papel cumpridor de calendário e virou engenharia aplicada.', initials: 'DC', name: 'Daniela Cardoso', role: 'Diretora Industrial · Fertilizantes' },
  { metric: 'Auditoria 100% aprovada', quote: 'Quando o auditor pediu rastreabilidade de decisão técnica, o MCI nos deu cada ordem, cada critério, cada laudo. Documentação que faltava.', initials: 'RG', name: 'Rogério Guedes', role: 'Compliance · Energia' },
  { metric: '−42% custos em 24m', quote: 'A integração entre os três pilares foi o ponto de virada. Estratégia, execução e confiabilidade conversando no mesmo idioma — pela primeira vez.', initials: 'VL', name: 'Vanessa Lima', role: 'Head de Manutenção · Mineração' },
]
</script>

<style scoped>
@media (max-width: 920px) {
  .intro-grid,
  .int-grid {
    grid-template-columns: 1fr !important;
  }

  .pillars-grid {
    grid-template-columns: 1fr !important;
  }

  .pillars-connectors {
    display: none !important;
  }

  .pillars-grid > div {
    border-radius: 6px !important;
    border-left: 1px solid var(--paper-line) !important;
    margin-bottom: 14px;
  }
}

@media (max-width: 1000px) {
  .ben-grid {
    grid-template-columns: 1fr 1fr !important;
  }
}

@media (max-width: 540px) {
  .ben-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
