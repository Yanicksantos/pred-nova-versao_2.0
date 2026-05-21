<template>
  <div class="page-enter">
    <PredHeroSection
      code="PRED"
      eyebrow="Soluções industriais inteligentes desde 1993"
      headlineHtml="Segurança, <span class='accent'>confiabilidade</span><br/>e produtividade para <span class='underline'>ativos industriais</span>"
      sub="A Pred Engenharia integra serviços técnicos, engenharia de manutenção, automação industrial e plataformas digitais para transformar inspeções, PCM e confiabilidade em resultado operacional mensurável."
      primaryCta="Solicitar Diagnostico"
      secondaryCta="Conhecer Soluções"
      primaryHref="#contact"
      secondaryHref="#servicos"
      :stats="[
        { value: 30, prefix: '+', label: 'Anos de experiência' },
        { value: 500, prefix: '+', label: 'Projetos e indústrias' },
        { value: 23, label: 'Registros e marcas' },
      ]"
      imageUrl="/servico/services1.webp"
      imageAlt="Técnico industrial realizando inspeção em campo"
      floatingNum="1993"
      floatingLbl="Base técnica e inovação"
    />

    <PredTrustBar />

    <!-- Servicos -->
    <section id="servicos" class="s">
      <div class="wrap">
        <PredSectionHead
          num="01"
          eyebrow="Soluções Integradas"
          title="Tudo que sua operação precisa para <br/><span style='color:var(--red)'>evoluir a manutenção</span>"
          lede="Unimos campo, engenharia, tecnologia e gestão. O objetivo não é entregar um relatório bonito, é reduzir risco operacional, aumentar disponibilidade e deixar a rotina auditável."
        />

        <div
          class="home-services-grid"
          :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }"
        >
          <NuxtLink
            v-for="(s, i) in services"
            :key="s.to"
            :to="s.to"
            :class="`card reveal reveal-delay-${(i % 3) + 1} ${s.dark ? 'dark' : ''}`"
            :style="s.featured ? { borderColor: 'var(--red)', borderWidth: '1.5px' } : {}"
          >
            <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }">
              <div class="card-num">{{ s.num }}</div>
              <div
                :style="{
                  width: '44px',
                  height: '44px',
                  display: 'grid',
                  placeItems: 'center',
                  background: s.dark ? 'rgba(0,194,224,0.18)' : 'rgba(230,48,48,0.1)',
                  color: s.dark ? 'var(--cyan)' : 'var(--red)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: '800',
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
                gap: '16px',
              }"
            >
              <div :class="`tag ${s.dark ? 'dark' : s.featured ? 'red' : 'cyan'}`">{{ s.tag }}</div>
              <div class="mono" :style="{ fontSize: '12px', color: s.dark ? 'var(--cyan)' : 'var(--red)', letterSpacing: '0.08em' }">
                VER →
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="home-service-strip reveal">
          <div v-for="item in serviceStrip" :key="item" class="tag">{{ item }}</div>
        </div>
      </div>
    </section>

    <PredDividerPulse />

    <!-- Metodo -->
    <section class="s dark">
      <div class="wrap">
        <PredSectionHead
          num="02"
          eyebrow="Como a Pred Atua"
          title="Da inspeção em campo ao <span style='color:var(--cyan)'>plano de decisão</span>"
          lede="A autoridade da Pred vem da integração: metodologia proprietária MCI, dados de campo, engenharia de confiabilidade e sistemas que transformam recorrência em inteligência operacional."
        />

        <div
          class="home-method-grid"
          :style="{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '64px', alignItems: 'center' }"
        >
          <div class="reveal">
            <div v-for="(step, i) in methodSteps" :key="step.title" class="home-method-step">
              <div class="mono home-method-num">{{ String(i + 1).padStart(2, '0') }}</div>
              <div>
                <h3 class="h-section">{{ step.title }}</h3>
                <p>{{ step.body }}</p>
              </div>
            </div>
          </div>

          <div class="home-method-panel reveal reveal-delay-2">
            <div class="mono" :style="{ color: 'var(--cyan)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }">
              MCI + S2i + Campo
            </div>
            <div class="h-display home-method-kpi">100%</div>
            <p>
              Decisões técnicas rastreáveis, com critério de criticidade, evidência de campo e plano de ação conectado à rotina da manutenção.
            </p>
            <div class="home-method-tags">
              <span v-for="tag in methodTags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section class="s darker">
      <div class="wrap">
        <PredSectionHead
          num="03"
          eyebrow="Autoridade em Numeros"
          title="Resultados que ajudam a <span style='color:var(--cyan)'>comprar com segurança</span>"
          lede="O que clientes industriais procuram antes de contratar: experiência, rastreabilidade, capacidade técnica e visão completa da cadeia de manutenção."
        />

        <div
          class="home-metrics-grid"
          :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }"
        >
          <div v-for="(m, i) in metrics" :key="m.label" :class="`metric reveal reveal-delay-${i + 1}`">
            <div class="corner"></div>
            <div class="metric-icon">{{ m.icon }}</div>
            <div class="metric-num">
              <PredAnimatedNumber :value="m.value" :prefix="m.prefix" :suffix="m.suffix" />
            </div>
            <div class="metric-lbl">{{ m.label }}</div>
            <p class="metric-cap">{{ m.caption }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Historia -->
    <section class="s paper2">
      <div class="wrap">
        <PredSectionHead
          num="04"
          eyebrow="Inovação e Confiança"
          title="Três décadas de <span style='color:var(--red)'>evolução industrial</span>"
          lede="A Pred nasceu no serviço especializado e evoluiu para uma operação integrada de tecnologia, automação, metodologia e gestão de ativos."
        />

        <div class="home-history-grid">
          <div
            v-for="(item, i) in timeline"
            :key="item.year"
            :class="`card reveal reveal-delay-${(i % 4) + 1}`"
          >
            <div class="card-num">{{ item.year }}</div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-body">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferenciais -->
    <section class="s">
      <div class="wrap">
        <div
          class="home-why-grid"
          :style="{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '64px', alignItems: 'center' }"
        >
          <div class="reveal">
            <div class="section-eyebrow">
              <span class="num mono">05</span>
              <span>Por que a Pred</span>
              <span class="line"></span>
            </div>
            <h2 class="h-section section-title">
              Excelência técnica com <span :style="{ color: 'var(--red)' }">visão de dono</span>
            </h2>
            <p class="home-why-lede">
              Projetos industriais falham quando campo, engenharia e gestão trabalham separados. A Pred conecta essas frentes com metodologia, dados e disciplina operacional.
            </p>
            <div class="home-proof-image">
              <img src="/sobre_30anos.png" alt="Pred Engenharia 30 anos" />
              <div>
                <div class="h-display">30+</div>
                <span class="mono">ANOS DE HISTORIA</span>
              </div>
            </div>
          </div>

          <div class="home-differentials">
            <div
              v-for="(d, i) in differentials"
              :key="d.title"
              :class="`reveal reveal-delay-${(i % 4) + 1}`"
            >
              <div class="mono">{{ String(i + 1).padStart(2, '0') }}</div>
              <div>
                <h3>{{ d.title }}</h3>
                <p>{{ d.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conversao -->
    <section class="s dark dense">
      <div class="wrap">
        <div class="home-conversion">
          <div class="reveal">
            <div class="mono">PROXIMO PASSO</div>
            <h2 class="h-section">Descubra onde sua manutenção perde disponibilidade hoje</h2>
            <p>
              Em uma conversa técnica, mapeamos maturidade, gargalos, riscos e oportunidades de ganho rápido sem interromper a operação.
            </p>
          </div>
          <div class="home-conversion-actions reveal reveal-delay-2">
            <a href="#contact" class="btn btn-primary btn-lg">Agendar diagnóstico <span class="arrow">→</span></a>
            <NuxtLink to="/mci" class="btn btn-outline btn-lg">Conhecer MCI</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <PredContactSection
      pitchTitleHtml="Vamos transformar sua <span style='color:var(--cyan)'>rotina industrial</span>"
      pitchSub="Conte o desafio da sua operação. A Pred responde com uma rota clara para diagnóstico, priorização e implementação."
      :bullets="[
        'Diagnóstico inicial com leitura de maturidade da manutenção',
        'Recomendação das frentes certas: serviço, tecnologia, MCI ou automação',
        'Plano de próximos passos com escopo, riscos e ganhos esperados',
        'Atendimento técnico para manutenção, confiabilidade e operações industriais',
      ]"
      submitLabel="Quero falar com a Pred"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'pred' })
useReveal()

useSeoMeta({
  title: 'Pred Engenharia - Soluções Industriais Inteligentes',
  ogTitle: 'Pred Engenharia - Soluções Industriais Inteligentes',
  description: 'A Pred Engenharia integra serviços técnicos, engenharia de manutenção, automação industrial e plataformas digitais para aumentar segurança, confiabilidade e produtividade.',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.predengenharia.com.br/',
})

const services = [
  {
    num: '01',
    title: 'Engenharia de Manutenção & Confiabilidade',
    body: 'Estratégia de manutenção, criticidade, planos, indicadores e confiabilidade para transformar ativos em performance sustentável.',
    tag: 'Servico principal',
    icon: 'E',
    to: '/servicos/engenharia-manutencao-e-confiabilidade',
    featured: true,
  },
  {
    num: '02',
    title: 'Inspeções Técnicas e PCM',
    body: 'Vibração, termografia, ultrassom, inspeção sensitiva e gestão de não conformidades conectadas ao planejamento e programação.',
    tag: 'Campo + gestão',
    icon: 'I',
    to: '/servicos/inspecoes',
  },
  {
    num: '03',
    title: 'Apps Tecnicos S2i e Perigometro',
    body: 'Mobilidade, padronização, priorização GUT, dashboards e integração com ERP para tirar a manutenção da planilha.',
    tag: 'Tecnologia',
    icon: 'S',
    to: '/servicos/s3i',
    dark: true,
  },
]

const serviceStrip = [
  'Consultoria técnica',
  'Treinamento de equipes',
  'Automação industrial',
  'Termografia fixa',
  'Integração ERP',
  'Gestão de ativos',
]

const methodSteps = [
  {
    title: 'Diagnosticar',
    body: 'Leitura objetiva dos ativos, processos, backlog, planos de manutenção, dados de campo e maturidade da equipe.',
  },
  {
    title: 'Priorizar',
    body: 'Uso de criticidade, MCI e matriz de risco para separar urgência real de ruído operacional.',
  },
  {
    title: 'Implementar',
    body: 'Rotina tecnicamente defensável, com padrão, indicadores, governança e transferência de conhecimento.',
  },
  {
    title: 'Evoluir',
    body: 'Dados de inspeção e performance retroalimentam engenharia, PCM e confiabilidade em ciclo contínuo.',
  },
]

const methodTags = ['MCI', 'PCM', 'Preditiva', 'S2i', 'Perigometro', 'ERP']

const metrics = [
  { value: 30, prefix: '+', suffix: '', label: 'Anos de experiência', caption: 'Atuação na indústria e área de serviços desde 1993.', icon: '01' },
  { value: 500, prefix: '+', suffix: '', label: 'Projetos entregues', caption: 'Histórico em plantas industriais, operações críticas e equipes técnicas.', icon: '02' },
  { value: 10, prefix: '+', suffix: 'k', label: 'Rotas processadas', caption: 'Marco histórico de mobilidade integrada a ERP em operação industrial.', icon: '03' },
  { value: 23, prefix: '', suffix: '', label: 'Registros e marcas', caption: 'Propriedade intelectual aplicada à gestão de ativos e manutenção.', icon: '04' },
]

const timeline = [
  { year: '1993', title: 'Início das Operações', body: 'Fundação com foco em soluções industriais e serviços especializados.' },
  { year: '1996', title: 'Mobilidade Corporativa', body: 'Pioneirismo em soluções móveis para operações industriais rastreáveis.' },
  { year: '2002', title: 'Integração ERP', body: 'Mobilidade integrada a ERP com alto volume de rotas de inspeção e usuários ativos.' },
  { year: '2006', title: 'Automação Industrial', body: 'Especialização em processos térmicos e integração de soluções avançadas.' },
  { year: '2018', title: 'MCI e Propriedade Intelectual', body: 'Consolidação de modelo inovador para operacionalização da gestão de ativos.' },
]

const differentials = [
  {
    title: 'Equipe especializada',
    body: 'Profissionais de campo, engenharia e confiabilidade atuando de forma integrada, com linguagem técnica comum.',
  },
  {
    title: 'Soluções personalizadas',
    body: 'Escopos moldados ao estágio de maturidade da operação, sem pacote genérico desconectado da rotina.',
  },
  {
    title: 'Rastreabilidade e seguranca',
    body: 'Evidências, critérios e histórico técnico para sustentar auditorias, priorizações e decisões executivas.',
  },
  {
    title: 'Suporte continuo',
    body: 'Acompanhamento da implantação até a disciplina operacional, com transferência de conhecimento para o time.',
  },
]
</script>

<style scoped>
.home-services-grid a {
  color: inherit;
  text-decoration: none;
}

.home-service-strip {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.home-method-step {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 20px;
  padding: 26px 0;
  border-bottom: 1px solid var(--ink-line-strong);
}

.home-method-step:first-child {
  padding-top: 0;
}

.home-method-step h3 {
  margin: 0 0 8px;
  color: #fff;
  font-size: 24px;
}

.home-method-step p {
  margin: 0;
  color: rgba(255,255,255,0.68);
  font-size: 14.5px;
  line-height: 1.6;
}

.home-method-num {
  color: var(--cyan);
  font-size: 13px;
  letter-spacing: 0.16em;
}

.home-method-panel {
  background: linear-gradient(160deg, var(--ink-700), #0c1d36);
  border: 1px solid var(--ink-line-strong);
  border-radius: 6px;
  padding: 42px;
  position: relative;
  overflow: hidden;
}

.home-method-panel::after {
  content: "";
  position: absolute;
  inset: auto -80px -80px auto;
  width: 220px;
  height: 220px;
  border: 1px solid rgba(0,194,224,0.25);
  transform: rotate(18deg);
}

.home-method-kpi {
  color: #fff;
  font-size: 96px;
  line-height: 0.9;
  margin: 24px 0 16px;
}

.home-method-panel p {
  margin: 0;
  color: rgba(255,255,255,0.7);
  font-size: 15px;
  line-height: 1.65;
  max-width: 420px;
}

.home-method-tags {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.home-method-tags span {
  border: 1px solid rgba(255,255,255,0.16);
  color: rgba(255,255,255,0.82);
  border-radius: 2px;
  padding: 7px 10px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.home-history-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.home-why-lede {
  margin: 24px 0 32px;
  color: var(--ink-400);
  font-size: 16px;
  line-height: 1.65;
  max-width: 560px;
}

.home-proof-image {
  position: relative;
  border: 1px solid var(--paper-line-strong);
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}

.home-proof-image img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  padding: 28px;
}

.home-proof-image > div {
  position: absolute;
  right: 18px;
  bottom: 18px;
  background: var(--red);
  color: #fff;
  border-radius: 6px;
  padding: 18px 22px;
  box-shadow: 0 18px 42px rgba(10,22,40,0.24);
}

.home-proof-image .h-display {
  font-size: 44px;
  line-height: 0.9;
}

.home-proof-image span {
  display: block;
  margin-top: 5px;
  font-size: 10px;
  letter-spacing: 0.16em;
}

.home-differentials {
  display: grid;
  gap: 0;
  border-top: 1px solid var(--paper-line-strong);
}

.home-differentials > div {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 20px;
  padding: 26px 0;
  border-bottom: 1px solid var(--paper-line-strong);
}

.home-differentials .mono {
  color: var(--red);
  font-size: 12px;
  letter-spacing: 0.16em;
}

.home-differentials h3 {
  margin: 0 0 8px;
  font-size: 18px;
  color: var(--ink-800);
}

.home-differentials p {
  margin: 0;
  color: var(--ink-400);
  font-size: 14.5px;
  line-height: 1.6;
}

.home-conversion {
  background: linear-gradient(110deg, var(--red), #b81f1f);
  border-radius: 6px;
  padding: 40px 48px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.home-conversion::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}

.home-conversion > * {
  position: relative;
  z-index: 1;
}

.home-conversion .mono {
  color: rgba(255,255,255,0.84);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.home-conversion h2 {
  color: #fff;
  font-size: 38px;
  max-width: 680px;
  margin: 0;
}

.home-conversion p {
  margin: 12px 0 0;
  color: rgba(255,255,255,0.84);
  font-size: 15px;
  line-height: 1.6;
  max-width: 620px;
}

.home-conversion-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.home-conversion-actions .btn-outline {
  background: #fff;
  color: var(--red);
  border-color: #fff;
  justify-content: center;
}

@media (max-width: 1080px) {
  .home-services-grid,
  .home-metrics-grid,
  .home-history-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .home-method-grid,
  .home-why-grid,
  .home-conversion {
    grid-template-columns: 1fr !important;
  }

  .home-conversion-actions {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .home-services-grid,
  .home-metrics-grid,
  .home-history-grid {
    grid-template-columns: 1fr !important;
  }

  .home-method-step,
  .home-differentials > div {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .home-method-panel,
  .home-conversion {
    padding: 28px;
  }

  .home-method-kpi {
    font-size: 68px;
  }

  .home-conversion h2 {
    font-size: 30px;
  }

  .home-conversion-actions {
    flex-direction: column;
  }
}
</style>
