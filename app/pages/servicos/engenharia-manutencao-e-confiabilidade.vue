<template>
  <div class="page-enter">
    <PredHeroSection
      code="MP-501"
      eyebrow="Engenharia de Manutenção · Serviço Principal"
      headlineHtml="Estratégia e <span class='accent'>Inteligência</span><br/>de <span class='underline'>Ativos Industriais</span>"
      sub="Transforme sua operação através de metodologias avançadas de manutenção e confiabilidade, com foco em gestão inteligente de ativos e maximização da disponibilidade operacional."
      primaryCta="Solicitar Diagnóstico Gratuito"
      secondaryCta="Ver Como Funciona na Prática"
      :stats="[
        { value: 15, prefix: '+', suffix: '', label: 'Anos de mercado' },
        { value: 500, prefix: '+', suffix: '', label: 'Indústrias atendidas' },
        { value: 95, suffix: '%', unit: '+', label: 'Disponibilidade média' },
      ]"
      imageUrl="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
      imageAlt="Engenheiro de manutenção em campo"
      floatingNum="+35%"
      floatingLbl="Redução de custos"
    />

    <PredTrustBar />

    <!-- Serviços -->
    <section class="s">
      <div class="wrap">
        <PredSectionHead
          num="01"
          eyebrow="Portfólio de Serviços"
          title="Seis frentes integradas para <br/>uma <span style='color:var(--red)'>manutenção de classe mundial</span>"
          lede="Não vendemos pacotes fechados — montamos a estratégia certa para o estágio de maturidade da sua operação. Da auditoria inicial à transferência completa de conhecimento."
        />

        <div
          :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }"
          class="services-grid"
        >
          <div
            v-for="(s, i) in services"
            :key="i"
            :class="`card reveal reveal-delay-${(i % 3) + 1} ${s.dark ? 'dark' : ''}`"
            :style="s.featured ? { borderColor: 'var(--red)', borderWidth: '1.5px' } : {}"
          >
            <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }">
              <div class="card-num">{{ s.num }}</div>
              <div
                :style="{
                  width: '36px',
                  height: '36px',
                  display: 'grid',
                  placeItems: 'center',
                  background: s.dark ? 'rgba(0,194,224,0.18)' : 'rgba(230,48,48,0.1)',
                  color: s.dark ? 'var(--cyan)' : 'var(--red)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                }"
              >
                {{ s.icon }}
              </div>
            </div>
            <h3 class="card-title">{{ s.title }}</h3>
            <p class="card-body">{{ s.body }}</p>
            <div
              :style="{
                marginTop: '24px',
                paddingTop: '20px',
                borderTop: s.dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--paper-line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }"
            >
              <div :class="`tag ${s.dark ? 'dark' : s.featured ? 'red' : 'cyan'}`">{{ s.tag }}</div>
              <div
                :style="{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: s.dark ? 'var(--cyan)' : 'var(--red)',
                  letterSpacing: '0.08em',
                }"
              >
                VER →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PredDividerPulse />

    <!-- Resultados -->
    <section class="s dark">
      <div class="wrap">
        <PredSectionHead
          num="02"
          eyebrow="Resultados Comprovados"
          title="Números que <span style='color:var(--cyan)'>provam o método</span>"
          lede="Nossa metodologia MCI® entrega resultados mensuráveis e sustentáveis em todos os indicadores críticos de manutenção."
        />
        <div
          :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }"
          class="metrics-grid"
        >
          <div
            v-for="(m, i) in metrics"
            :key="i"
            :class="`metric reveal reveal-delay-${i + 1}`"
          >
            <div class="corner"></div>
            <div class="metric-icon">{{ m.icon }}</div>
            <div class="metric-num">
              <PredAnimatedNumber :value="m.num" :suffix="m.suf" />
              <span v-if="m.unit" class="unit">{{ m.unit }}</span>
            </div>
            <div class="metric-lbl">{{ m.lbl }}</div>
            <p class="metric-cap">{{ m.cap }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vantagens Competitivas -->
    <section class="s paper2">
      <div class="wrap">
        <PredSectionHead
          num="03"
          eyebrow="Por que a Pred"
          title="Vantagens <span style='color:var(--red)'>competitivas</span>"
          lede="O que diferencia a Pred Engenharia de consultorias generalistas e ferramentas isoladas de mercado."
        />
        <div
          :style="{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'start' }"
          class="vc-grid"
        >
          <ul :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '0' }">
            <li
              v-for="(v, i) in vantagens"
              :key="i"
              class="reveal"
              :style="{
                borderBottom: '1px solid var(--paper-line-strong)',
                padding: '24px 0',
                display: 'grid',
                gridTemplateColumns: '60px 1fr',
                gap: '20px',
                alignItems: 'baseline',
              }"
            >
              <div class="mono" :style="{ color: 'var(--red)', fontSize: '13px', letterSpacing: '0.16em' }">{{ v.n }}</div>
              <div>
                <div class="h-section" :style="{ fontSize: '22px', marginBottom: '8px' }">{{ v.t }}</div>
                <p :style="{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: 'var(--ink-400)' }">{{ v.d }}</p>
              </div>
            </li>
          </ul>
          <div class="reveal reveal-delay-2" :style="{ position: 'sticky', top: 'calc(var(--header-h) + 24px)' }">
            <div :style="{ background: 'var(--ink-800)', color: '#fff', borderRadius: '6px', padding: '36px', position: 'relative', overflow: 'hidden' }">
              <div :style="{ position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(rgba(0,194,224,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,224,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }"></div>
              <div :style="{ position: 'relative' }">
                <div class="mono" :style="{ color: 'var(--cyan)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '18px' }">EXCELÊNCIA RECONHECIDA</div>
                <div class="h-section" :style="{ fontSize: '32px', lineHeight: '1', marginBottom: '18px' }">+15 anos<br/>de liderança<br/>em engenharia<br/>de manutenção</div>
                <p :style="{ color: 'rgba(255,255,255,0.7)', margin: '0 0 28px', lineHeight: '1.6', fontSize: '15px' }">
                  Premiada como referência em manutenção industrial pela ABRAMAN em 2024.
                </p>
                <div :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', paddingTop: '24px', borderTop: '1px solid var(--ink-line-strong)' }">
                  <div>
                    <div class="h-display" :style="{ fontSize: '36px', color: 'var(--cyan)' }"><PredAnimatedNumber :value="500" suffix="+" /></div>
                    <div class="mono" :style="{ fontSize: '10.5px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '4px' }">Indústrias</div>
                  </div>
                  <div>
                    <div class="h-display" :style="{ fontSize: '36px', color: 'var(--cyan)' }"><PredAnimatedNumber :value="85" suffix="%" /></div>
                    <div class="mono" :style="{ fontSize: '10.5px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '4px' }">Equipes autônomas</div>
                  </div>
                </div>
                <button class="btn btn-primary" :style="{ marginTop: '28px', width: '100%', justifyContent: 'center' }">
                  Baixar Guia MCI® Gratuito <span class="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Timeline -->
    <section class="s">
      <div class="wrap">
        <PredSectionHead
          num="04"
          eyebrow="Como Trabalhamos"
          title="Da auditoria à <br/><span style='color:var(--red)'>autonomia operacional</span>"
          lede="Um processo modular de quatro estágios. Você contrata apenas o que precisa — escalando à medida que a operação evolui."
        />
        <div
          class="timeline"
          :style="{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }"
        >
          <div :style="{ position: 'absolute', top: '24px', left: '6%', right: '6%', height: '2px', background: 'linear-gradient(90deg, var(--red), var(--cyan))', zIndex: '0' }"></div>
          <div
            v-for="(s, i) in timeline"
            :key="i"
            :class="`reveal reveal-delay-${i + 1}`"
            :style="{ position: 'relative', padding: '0 20px', zIndex: '1' }"
          >
            <div :style="{ width: '48px', height: '48px', borderRadius: '50%', background: '#fff', border: '2px solid var(--ink-800)', color: 'var(--ink-800)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '18px', margin: '0 auto 24px' }">
              {{ s.n }}
            </div>
            <div :style="{ textAlign: 'center' }">
              <div class="mono" :style="{ fontSize: '11px', color: 'var(--red)', letterSpacing: '0.16em', marginBottom: '8px' }">{{ s.w.toUpperCase() }}</div>
              <div class="h-section" :style="{ fontSize: '22px', marginBottom: '8px' }">{{ s.t }}</div>
              <p :style="{ margin: '0', fontSize: '14px', lineHeight: '1.55', color: 'var(--ink-400)' }">{{ s.d }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PredTestimonialsSection :items="testimonials" />

    <PredContactSection
      pitchTitleHtml="Vamos transformar sua <span style='color:var(--cyan)'>manutenção?</span>"
      pitchSub="Agende uma conversa estratégica com nossos especialistas. Em 45 minutos mapeamos o estágio de maturidade da sua operação e indicamos o próximo passo concreto."
      :bullets="[
        'Diagnóstico inicial gratuito de 45 minutos',
        'Análise de criticidade dos seus 5 principais ativos',
        'Benchmark setorial de KPIs (MTBF, MTTR, OEE)',
        'Proposta modular sem compromisso em 72h',
      ]"
      submitLabel="Quero meu Diagnóstico"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'pred' })
useReveal()

useSeoMeta({
  title: 'Pred Engenharia - SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO & CONFIABILIDADE',
  ogTitle: 'Pred Engenharia - SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO & CONFIABILIDADE',
  description: 'Transforme sua operação através de metodologias avançadas de manutenção e confiabilidade, com foco em gestão inteligente de ativos e maximização da disponibilidade operacional.',
  ogDescription: 'Transforme sua operação através de metodologias avançadas de manutenção e confiabilidade, com foco em gestão inteligente de ativos e maximização da disponibilidade operacional.',
  ogImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.predengenharia.com.br/servicos/engenharia-manutencao-e-confiabilidade',
})

const services = [
  { num: '01', title: 'Diagnóstico & Auditoria', body: 'Análise profunda para identificar riscos e oportunidades de melhoria na gestão de ativos. Mapeamento completo de criticidade.', tag: 'Módulo de entrada', icon: '↗' },
  { num: '02', title: 'Cadastro & Planos', body: 'Estruturação de ativos (taxonomia) e planos baseados no modelo MCI®. Taxonomia técnica padronizada.', tag: 'Engenharia', icon: '▦' },
  { num: '03', title: 'Engenharia de Lubrificação', body: 'Foco na redução de até 70% das falhas mecânicas através de lubrificação otimizada e monitoramento contínuo.', tag: 'Redução 70% falhas', icon: '○', featured: true },
  { num: '04', title: 'Capacitação SPA®', body: 'Treinamento focado em Sensibilidade, Precisão e Agilidade para equipes técnicas. Método proprietário Pred.', tag: 'Método SPA®', icon: '△' },
  { num: '05', title: 'Engenharia de Confiabilidade', body: 'Ciclo contínuo de análise de anomalias e tratamento de falhas ocultas. RCM, RCA, FMEA aplicados.', tag: 'Ciclo contínuo', icon: '↻' },
  { num: '06', title: 'Metodologia MCI®', body: 'Metodologia proprietária que integra todos os serviços em uma abordagem holística e auditável.', tag: 'Proprietária', icon: '⬢', dark: true },
]

const metrics = [
  { icon: '↑', num: 95, suf: '%', unit: '+', lbl: 'Disponibilidade Operacional', cap: 'Tempo médio de equipamentos disponíveis para produção' },
  { icon: '↓', num: 70, suf: '%', lbl: 'Redução Falhas Mecânicas', cap: 'Eliminação de falhas evitáveis em ciclos de manutenção' },
  { icon: '$', num: 40, suf: '%', lbl: 'Redução Custos Manutenção', cap: 'Menor gasto em corretivas não programadas e estoque' },
  { icon: '★', num: 60, suf: '%', lbl: 'Melhoria Produtividade', cap: 'Ganho mensurável em produtividade da equipe técnica' },
]

const vantagens = [
  { n: '01', t: 'Metodologia MCI® proprietária', d: 'Desenvolvida internamente, validada em +500 operações industriais. Não é cópia de framework genérico.' },
  { n: '02', t: 'Equipe especializada certificada', d: 'Engenheiros com certificações ABRAMAN, ISO 55000, Cat I-III em técnicas preditivas. Currículos auditáveis.' },
  { n: '03', t: 'Tecnologia de ponta integrada', d: 'Apps próprios S2i® e Perigômetro® integrados a SAP-PM, IBM Maximo e TOTVS via API robusta.' },
  { n: '04', t: 'Transferência completa de conhecimento', d: 'Nosso objetivo é tornar sua equipe autônoma. 85% das equipes atingem autonomia em até 18 meses.' },
]

const timeline = [
  { n: '01', w: '4 sem', t: 'Diagnóstico', d: 'Auditoria de criticidade e baseline de indicadores.' },
  { n: '02', w: '8 sem', t: 'Implementação', d: 'Cadastro, planos e capacitação inicial das equipes.' },
  { n: '03', w: '12 sem', t: 'Estabilização', d: 'Ciclos PDCA, ajustes e indicadores em regime.' },
  { n: '04', w: 'contínuo', t: 'Autonomia', d: 'Transferência completa de conhecimento e exit.' },
]

const testimonials = [
  { metric: '−42% custos em 18 meses', quote: 'A metodologia da Pred transformou nossa abordagem de manutenção. Saímos de uma cultura corretiva para preditiva em menos de dois anos.', initials: 'RC', name: 'Ricardo Campos', role: 'Diretor Industrial · Mineradora SP' },
  { metric: '+8 pontos de OEE', quote: 'Implementamos o ciclo MCI em três plantas. O ganho de OEE e a previsibilidade de orçamento foram resultados imediatos.', initials: 'AM', name: 'Adriana Mendes', role: 'Head de Confiabilidade · Bebidas' },
  { metric: '1.200 ativos cadastrados', quote: 'O cadastro técnico com taxonomia padronizada foi a base que faltava. Hoje tomamos decisões com dados, não com achismo.', initials: 'FT', name: 'Fernando Tavares', role: 'Eng. Manutenção · Papel & Celulose' },
]
</script>

<style scoped>
@media (max-width: 1000px) {
  .services-grid,
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 560px) {
  .metrics-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 920px) {
  .vc-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 820px) {
  .timeline {
    grid-template-columns: 1fr 1fr !important;
    gap: 40px 0 !important;
  }

  .timeline > div:first-of-type {
    display: none !important;
  }
}
</style>
