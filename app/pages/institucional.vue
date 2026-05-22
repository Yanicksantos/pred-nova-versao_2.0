<template>
  <div class="page-enter">
    <HeroSection
      code="PRED-1993"
      eyebrow="Institucional · Engenharia Industrial"
      headlineHtml="<span class='underline'>Uma engenharia que conecta <span class='accent'>campo</span>, dados e decisão industrial</span>"
      sub="Desde 1993, a Pred Engenharia atua na gestão de ativos e processos industriais com serviços técnicos, engenharia de manutenção, automação, tecnologia e metodologia proprietária para aumentar segurança, confiabilidade e produtividade."
      primaryCta="Falar com a Pred"
      secondaryCta="Conhecer Serviços"
      primaryHref="#contact"
      secondaryHref="#areas"
      :stats="[
        { value: 30, prefix: '+', label: 'Anos de história' },
        { value: 500, prefix: '+', label: 'Projetos e operações' },
        { value: 23, label: 'Registros e marcas' },
      ]"
      imageUrl="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80"
      imageAlt="Equipe técnica industrial em inspeção"
      floatingNum="1993"
      floatingLbl="Origem técnica"
    />

    <TrustBar />

    <section class="s">
      <div class="wrap">
        <div class="institutional-intro">
          <div class="institutional-intro-copy reveal">
            <div class="section-eyebrow">
              <span class="num mono">01</span>
              <span>Quem Somos</span>
              <span class="line"></span>
            </div>
            <h2 class="h-section section-title">
              A Pred nasceu no serviço especializado e evoluiu para uma
              <span :style="{ color: 'var(--red)' }">operação integrada</span>
            </h2>
            <p>
              Somos uma provedora de soluções para gestão de ativos e processos, com foco na garantia da segurança, confiabilidade e produtividade das atividades industriais. Nosso trabalho combina a leitura técnica de campo com engenharia, sistemas digitais e governança de manutenção.
            </p>
            <p>
              Atuamos para transformar inspeções, PCM, confiabilidade, automação e dados operacionais em decisões rastreáveis. A proposta é simples: reduzir risco, aumentar disponibilidade e deixar a manutenção mais inteligente, auditável e sustentável.
            </p>
          </div>

          <div class="institutional-proof reveal reveal-delay-2">
            <img src="/sobre_30anos.png" alt="Pred Engenharia 30 anos" loading="lazy" decoding="async" />
            <div class="institutional-proof-panel">
              <div class="mono">BASE TÉCNICA</div>
              <strong>30+</strong>
              <span>anos conectando conhecimento industrial, tecnologia e confiabilidade.</span>
            </div>
          </div>
        </div>

        <div class="identity-grid">
          <div
            v-for="(item, index) in identity"
            :key="item.title"
            :class="`card reveal reveal-delay-${index + 1}`"
          >
            <div class="card-num">{{ item.num }}</div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-body">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <DividerPulse />

    <section id="areas" class="s paper2">
      <div class="wrap">
        <SectionHead
          num="02"
          eyebrow="Áreas de Atuação"
          title="Três frentes de negócio com uma mesma <span style='color:var(--red)'>disciplina técnica</span>"
          lede="A Pred organiza sua atuação em serviços técnicos, engenharia de manutenção e tecnologia aplicada. As frentes podem ser contratadas separadamente ou integradas em uma jornada de evolução operacional."
        />

        <div class="area-grid">
          <NuxtLink
            v-for="(area, index) in areas"
            :key="area.to"
            :to="area.to"
            :class="`area-card reveal reveal-delay-${index + 1}`"
          >
            <div class="area-card-top">
              <span class="mono">{{ area.num }}</span>
              <strong>{{ area.icon }}</strong>
            </div>
            <h3 class="h-section">{{ area.title }}</h3>
            <p>{{ area.body }}</p>
            <div class="area-card-footer">
              <span :class="`tag ${area.tagClass}`">{{ area.tag }}</span>
              <span class="mono">VER →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="s dark">
      <div class="wrap">
        <SectionHead
          num="03"
          eyebrow="Linha do Tempo"
          title="Uma trajetória construída entre <span style='color:var(--cyan)'>campo, inovação e método</span>"
          lede="A história da Pred acompanha a evolução da manutenção industrial: do serviço especializado à mobilidade, integração com sistemas, automação e metodologia proprietária."
        />

        <div class="history-rail">
          <article
            v-for="(item, index) in timeline"
            :key="item.year"
            :class="`history-item reveal reveal-delay-${(index % 4) + 1}`"
          >
            <img :src="item.image" :alt="item.title" loading="lazy" decoding="async" />
            <div>
              <span class="mono">{{ item.year }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.body }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="s">
      <div class="wrap">
        <div class="method-grid">
          <div class="reveal">
            <div class="section-eyebrow">
              <span class="num mono">04</span>
              <span>Como Trabalhamos</span>
              <span class="line"></span>
            </div>
            <h2 class="h-section section-title">
              Integração antes de ferramenta. Critério antes de volume.
            </h2>
            <p class="method-lede">
              O diferencial da Pred está em conectar a decisão técnica ao processo real da manutenção. Cada inspeção, plano, rota, indicador ou sistema precisa responder a uma pergunta operacional: o que reduz risco e aumenta disponibilidade?
            </p>
          </div>

          <div class="method-stack">
            <div
              v-for="(step, index) in method"
              :key="step.title"
              :class="`method-step reveal reveal-delay-${index + 1}`"
            >
              <span class="mono">{{ String(index + 1).padStart(2, '0') }}</span>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.body }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="credential-band reveal">
          <div>
            <span class="mono">AUTORIDADE TÉCNICA</span>
            <h3 class="h-section">MCI®, S2i® e Perigômetro® como inteligência aplicada à rotina</h3>
          </div>
          <p>
            A Pred combina metodologia proprietária, aplicativos técnicos, integração com ERP e experiência de campo para criar uma base única de decisão. O resultado é uma operação com evidência, prioridade e plano de ação.
          </p>
        </div>
      </div>
    </section>

    <section class="s darker">
      <div class="wrap">
        <SectionHead
          num="05"
          eyebrow="Princípios"
          title="O que orienta cada projeto da <span style='color:var(--cyan)'>Pred Engenharia</span>"
          lede="A tecnologia importa, mas a confiança vem da forma como o trabalho é conduzido: segurança, clareza técnica, rastreabilidade e transferência de conhecimento."
        />

        <div class="principles-grid">
          <div
            v-for="(principle, index) in principles"
            :key="principle.title"
            :class="`metric reveal reveal-delay-${index + 1}`"
          >
            <div class="corner"></div>
            <div class="metric-icon">{{ principle.icon }}</div>
            <div class="metric-lbl">{{ principle.title }}</div>
            <p class="metric-cap">{{ principle.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <ContactSection
      pitchTitleHtml="Conheça a Pred por dentro e veja como podemos <span style='color:var(--cyan)'>evoluir sua operação</span>"
      pitchSub="Se sua operação precisa reduzir risco, organizar manutenção, ganhar rastreabilidade ou digitalizar rotinas técnicas, começamos por uma conversa objetiva sobre maturidade e próximos passos."
      :bullets="[
        'Leitura inicial das áreas críticas da operação',
        'Indicação da frente mais adequada: engenharia, inspeção, tecnologia ou MCI',
        'Discussão técnica com foco em segurança, disponibilidade e produtividade',
        'Plano de próximos passos sem compromisso comercial',
      ]"
      submitLabel="Quero conhecer a Pred"
    />
  </div>
</template>

<script setup lang="ts">
useReveal()

useSeoMeta({
  title: 'Institucional - Pred Engenharia',
  ogTitle: 'Institucional - Pred Engenharia',
  description: 'Conheça a Pred Engenharia: soluções industriais para gestão de ativos, serviços técnicos, engenharia de manutenção, automação, tecnologia e metodologia MCI.',
  ogDescription: 'Desde 1993, a Pred Engenharia integra campo, engenharia, tecnologia e gestão para aumentar segurança, confiabilidade e produtividade industrial.',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.predengenharia.com.br/institucional',
})

const identity = [
  {
    num: 'MISSÃO',
    title: 'Resolver desafios reais da operação',
    body: 'Entregar soluções técnicas que aumentem segurança, confiabilidade e produtividade, com critério, método e responsabilidade sobre o resultado.',
  },
  {
    num: 'VISÃO',
    title: 'Ser parceira técnica de longo prazo',
    body: 'Apoiar a evolução da manutenção industrial com uma combinação de engenharia, dados, automação e transferência de conhecimento.',
  },
  {
    num: 'VALORES',
    title: 'Rastreabilidade, ética e clareza',
    body: 'Trabalhar com evidência, respeito à operação do cliente, compromisso com segurança e disciplina para sustentar decisões técnicas.',
  },
]

const areas = [
  {
    num: '01',
    icon: 'E',
    title: 'Engenharia de Manutenção e Confiabilidade',
    body: 'Estratégia de manutenção, criticidade, planos, indicadores e confiabilidade para transformar ativos críticos em performance sustentável.',
    tag: 'Engenharia',
    tagClass: 'red',
    to: '/servicos/engenharia-manutencao-e-confiabilidade',
  },
  {
    num: '02',
    icon: 'I',
    title: 'Serviços Técnicos de Inspeção',
    body: 'Inspeções preditivas, sensitivas, PCM e gestão de não conformidades com diagnóstico rastreável e plano de ação.',
    tag: 'Campo',
    tagClass: 'cyan',
    to: '/servicos/inspecoes',
  },
  {
    num: '03',
    icon: 'S',
    title: 'Tecnologia e Automação Industrial',
    body: 'Apps S2i®, Perigômetro®, integração via API, dashboards e soluções que tiram a rotina técnica da planilha.',
    tag: 'Tecnologia',
    tagClass: 'dark',
    to: '/servicos/s3i',
  },
]

const timeline = [
  {
    year: '1993',
    title: 'Início das operações',
    body: 'Fundação da Pred com foco em soluções industriais e serviços técnicos especializados.',
    image: '/historia/1993.webp',
  },
  {
    year: '1996',
    title: 'Mobilidade corporativa',
    body: 'Pioneirismo em soluções móveis para tornar rotinas industriais mais rastreáveis e produtivas.',
    image: '/historia/1996.webp',
  },
  {
    year: '2002',
    title: 'Integração com ERP',
    body: 'Evolução das rotas de inspeção com integração a sistemas corporativos e maior controle operacional.',
    image: '/historia/2002.webp',
  },
  {
    year: '2006',
    title: 'Automação industrial',
    body: 'Ampliação da atuação para processos térmicos, automação e integração de soluções avançadas.',
    image: '/historia/2006.webp',
  },
  {
    year: '2018',
    title: 'MCI e propriedade intelectual',
    body: 'Consolidação de metodologia proprietária e soluções para gestão integrada de ativos.',
    image: '/historia/2018.webp',
  },
]

const method = [
  {
    title: 'Diagnosticar com evidência',
    body: 'Levantamento técnico de ativos, processos, dados de campo, planos de manutenção, backlog e maturidade da operação.',
  },
  {
    title: 'Priorizar com critério',
    body: 'Aplicação de criticidade, matriz de risco, MCI e lógica GUT para separar urgência real de ruído operacional.',
  },
  {
    title: 'Implementar com governança',
    body: 'Planos, rotinas, sistemas e indicadores conectados ao PCM, à execução e à confiabilidade.',
  },
  {
    title: 'Transferir conhecimento',
    body: 'Capacitação, padronização e acompanhamento para que a equipe do cliente ganhe autonomia com segurança.',
  },
]

const principles = [
  {
    icon: '01',
    title: 'Segurança operacional',
    body: 'Toda solução precisa proteger pessoas, ativos e continuidade produtiva.',
  },
  {
    icon: '02',
    title: 'Rastreabilidade',
    body: 'Cada decisão deve ter critério técnico, evidência e histórico auditável.',
  },
  {
    icon: '03',
    title: 'Resultado mensurável',
    body: 'Indicadores, disponibilidade, risco e custo precisam evoluir de forma visível.',
  },
  {
    icon: '04',
    title: 'Autonomia do cliente',
    body: 'O conhecimento deve ficar na operação, não preso em relatórios ou consultorias.',
  },
]
</script>

<style scoped>
.institutional-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: 64px;
  align-items: center;
}

.institutional-intro-copy p,
.method-lede {
  color: var(--ink-400);
  font-size: 16px;
  line-height: 1.68;
  margin: 22px 0 0;
  max-width: 680px;
}

.institutional-proof {
  position: relative;
  min-height: 420px;
  display: grid;
  place-items: center;
  background:
    linear-gradient(rgba(10,22,40,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10,22,40,0.04) 1px, transparent 1px),
    #fff;
  background-size: 42px 42px;
  border: 1px solid var(--paper-line);
  border-radius: 6px;
  overflow: hidden;
}

.institutional-proof img {
  width: min(78%, 460px);
  object-fit: contain;
}

.institutional-proof-panel {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 18px;
  align-items: end;
  background: rgba(10,22,40,0.92);
  color: #fff;
  border: 1px solid var(--ink-line-strong);
  border-radius: 6px;
  padding: 20px 22px;
}

.institutional-proof-panel .mono {
  grid-column: 1 / -1;
  color: var(--cyan);
  font-size: 11px;
  letter-spacing: 0.18em;
}

.institutional-proof-panel strong {
  font-family: var(--font-display);
  font-size: 54px;
  line-height: 0.85;
}

.institutional-proof-panel span {
  color: rgba(255,255,255,0.72);
  font-size: 13.5px;
  line-height: 1.5;
}

.identity-grid,
.area-grid,
.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.identity-grid {
  margin-top: 48px;
}

.area-card {
  min-height: 360px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: #fff;
  border: 1px solid var(--paper-line);
  border-radius: 6px;
  color: inherit;
  text-decoration: none;
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
}

.area-card:hover {
  transform: translateY(-4px);
  border-color: rgba(230,48,48,0.32);
  box-shadow: 0 18px 44px -26px rgba(10,22,40,0.42);
}

.area-card-top,
.area-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.area-card-top .mono {
  color: var(--red);
  font-size: 12px;
  letter-spacing: 0.16em;
}

.area-card-top strong {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  background: rgba(230,48,48,0.1);
  color: var(--red);
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 26px;
}

.area-card h3 {
  font-size: 28px;
  margin: 32px 0 14px;
}

.area-card p {
  color: var(--ink-400);
  font-size: 14.5px;
  line-height: 1.65;
  margin: 0;
}

.area-card-footer {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid var(--paper-line);
}

.area-card-footer .mono:last-child {
  color: var(--red);
  font-size: 12px;
  letter-spacing: 0.1em;
}

.history-rail {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.history-item {
  background: var(--ink-700);
  border: 1px solid var(--ink-line-strong);
  border-radius: 6px;
  overflow: hidden;
}

.history-item img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  filter: saturate(0.82);
}

.history-item div {
  padding: 22px;
}

.history-item span {
  color: var(--cyan);
  font-size: 12px;
  letter-spacing: 0.18em;
}

.history-item h3 {
  margin: 12px 0 8px;
  color: #fff;
  font-size: 18px;
}

.history-item p {
  margin: 0;
  color: rgba(255,255,255,0.64);
  font-size: 13.5px;
  line-height: 1.55;
}

.method-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 64px;
  align-items: start;
}

.method-stack {
  border-top: 1px solid var(--paper-line-strong);
}

.method-step {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 20px;
  padding: 26px 0;
  border-bottom: 1px solid var(--paper-line-strong);
}

.method-step > span {
  color: var(--red);
  font-size: 12px;
  letter-spacing: 0.18em;
}

.method-step h3 {
  margin: 0 0 8px;
  color: var(--ink-800);
  font-size: 19px;
}

.method-step p {
  margin: 0;
  color: var(--ink-400);
  font-size: 14.5px;
  line-height: 1.6;
}

.credential-band {
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  background: var(--ink-800);
  color: #fff;
  border-radius: 6px;
  padding: 38px 42px;
  position: relative;
  overflow: hidden;
}

.credential-band::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,194,224,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,194,224,0.06) 1px, transparent 1px);
  background-size: 46px 46px;
  pointer-events: none;
}

.credential-band > * {
  position: relative;
  z-index: 1;
}

.credential-band .mono {
  color: var(--cyan);
  font-size: 11px;
  letter-spacing: 0.18em;
}

.credential-band h3 {
  margin: 12px 0 0;
  font-size: 30px;
  color: #fff;
}

.credential-band p {
  margin: 0;
  color: rgba(255,255,255,0.72);
  font-size: 15px;
  line-height: 1.65;
}

.principles-grid {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1100px) {
  .history-rail {
    grid-template-columns: repeat(3, 1fr);
  }

  .principles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 920px) {
  .institutional-intro,
  .method-grid,
  .credential-band {
    grid-template-columns: 1fr;
  }

  .identity-grid,
  .area-grid {
    grid-template-columns: 1fr;
  }

  .institutional-proof {
    min-height: 360px;
  }
}

@media (max-width: 640px) {
  .history-rail,
  .principles-grid {
    grid-template-columns: 1fr;
  }

  .institutional-proof-panel,
  .method-step {
    grid-template-columns: 1fr;
  }

  .credential-band {
    padding: 30px;
  }
}
</style>
