<template>
  <div class="page-enter">
    <HeroSection
      code="MP-503"
      eyebrow="SOF · Apps Técnicos em Nuvem"
      headlineHtml="<span class='accent'>S2i®</span> e <span class='accent'>Perigômetro®</span><br/>Apps técnicos para <span class='underline'>engenharia de manutenção</span>"
      sub="Soluções SaaS homologadas em nuvem para otimizar processos industriais e aumentar a confiabilidade dos ativos. Tecnologia de ponta para gestão inteligente da manutenção."
      primaryCta="Solicitar Demonstração"
      secondaryCta="Ver Apps em Funcionamento"
      :stats="[
        { value: 99.9, decimals: 1, suffix: '%', label: 'Uptime garantido' },
        { value: 24, suffix: '/7', label: 'Suporte técnico' },
        { value: 500, prefix: '+', label: 'Empresas atendidas' },
      ]"
      imageUrl="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80"
      imageAlt="Dashboard industrial em tempo real"
      floatingNum="99.9%"
      floatingLbl="UPTIME SLA"
    />

    <TrustBar />

    <!-- S2i -->
    <section class="s">
      <div class="wrap">
        <div
          :style="{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '64px', alignItems: 'start' }"
          class="s2i-grid"
        >
          <!-- Left visual stack -->
          <div class="reveal" :style="{ position: 'sticky', top: 'calc(var(--header-h) + 24px)' }">
            <div :style="{ position: 'relative', aspectRatio: '4/5', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--paper-line-strong)' }">
              <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80" alt="Inspetor industrial usando tablet" :style="{ width: '100%', height: '100%', objectFit: 'cover' }" />
              <div :style="{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, transparent 40%, rgba(10,22,40,0.55))' }"></div>
              <div :style="{ position: 'absolute', top: '18px', left: '18px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#fff', letterSpacing: '0.16em' }">
                <span :style="{ width: '8px', height: '8px', background: 'var(--cyan)', display: 'inline-block' }"></span>
                S2I · ATIVO
              </div>
              <div :style="{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }">
                <div class="h-display" :style="{ color: '#fff', fontSize: '30px', lineHeight: '1', marginBottom: '8px' }">Inspeção em campo</div>
                <div class="mono" :style="{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase' }">App mobile · sincronização offline-first</div>
              </div>
            </div>
            <!-- Floating module card -->
            <div :style="{ marginTop: '-32px', marginLeft: '24px', marginRight: '24px', background: '#fff', border: '1px solid var(--paper-line-strong)', borderRadius: '6px', padding: '20px', position: 'relative', boxShadow: '0 24px 50px rgba(10,22,40,0.18)' }">
              <div class="mono" :style="{ fontSize: '11px', color: 'var(--red)', letterSpacing: '0.16em', marginBottom: '10px' }">MÓDULO DESTAQUE</div>
              <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }">
                <div class="h-display" :style="{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase' }">Inspeções preditivas</div>
                <div class="mono" :style="{ fontSize: '11px', color: 'var(--ink-300)', letterSpacing: '0.1em' }">v.4.2</div>
              </div>
              <div :style="{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--paper-line)', display: 'flex', gap: '18px', fontSize: '12px', color: 'var(--ink-400)' }">
                <div><span :style="{ color: 'var(--cyan)' }">●</span> Cat I-III ISO 18436</div>
                <div><span :style="{ color: 'var(--red)' }">●</span> ABRAMAN homologado</div>
              </div>
            </div>
          </div>

          <div>
            <div class="reveal">
              <div class="section-eyebrow">
                <span class="num mono">01</span>
                <span>APP S2i®</span>
                <span class="line"></span>
              </div>
              <h2 class="h-section section-title" :style="{ marginTop: '14px' }">
                Sistema Simplificado<br/>de <span :style="{ color: 'var(--red)' }">Inspeção</span>
              </h2>
              <p :style="{ marginTop: '20px', fontSize: '17px', lineHeight: '1.6', color: 'var(--ink-400)', maxWidth: '520px' }">
                Aplicativo desenvolvido especificamente para inspeção industrial, focado em rotinas preditivas e sensitivas com formação completa de inspetores.
              </p>
            </div>

            <div :style="{ marginTop: '40px', display: 'grid', gap: '14px' }">
              <div
                v-for="(f, i) in s2iFeatures"
                :key="i"
                :class="`reveal reveal-delay-${i + 1}`"
                :style="{
                  background: '#fff',
                  border: '1px solid var(--paper-line)',
                  borderRadius: '6px',
                  padding: '24px',
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr auto',
                  gap: '20px',
                  alignItems: 'center',
                  transition: 'border-color 0.25s, transform 0.25s',
                }"
                @mouseenter="(e) => { (e.currentTarget as HTMLElement).style.borderColor = f.clr; (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'; }"
                @mouseleave="(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--paper-line)'; (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'; }"
              >
                <div class="mono" :style="{ color: f.clr, fontSize: '13px', letterSpacing: '0.16em' }">{{ f.n }}</div>
                <div>
                  <div class="h-section" :style="{ fontSize: '20px', marginBottom: '6px' }">{{ f.t }}</div>
                  <div :style="{ fontSize: '14px', lineHeight: '1.55', color: 'var(--ink-400)' }">{{ f.d }}</div>
                </div>
                <div :style="{ color: f.clr, fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '0.08em' }">→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <DividerPulse />

    <!-- Perigômetro -->
    <section class="s dark">
      <div class="wrap">
        <SectionHead
          num="02"
          eyebrow="App Perigômetro®"
          title="Gestão sistêmica <br/>de <span style='color:var(--cyan)'>manutenção</span>"
          lede="Abordagem sistêmica inspirada na Matriz GUT para priorização estratégica de intervenções, com integração completa aos principais sistemas de gestão industrial."
        />

        <div
          :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }"
          class="peri-cards"
        >
          <!-- Matriz GUT -->
          <div class="reveal reveal-delay-1" :style="{ background: 'linear-gradient(160deg, var(--ink-700), #0c1d36)', border: '1px solid var(--ink-line-strong)', borderRadius: '6px', padding: '32px', position: 'relative', overflow: 'hidden' }">
            <div :style="{ position: 'absolute', top: '12px', right: '12px', width: '14px', height: '14px', borderTop: '2px solid var(--cyan)', borderRight: '2px solid var(--cyan)' }"></div>
            <div :style="{ width: '44px', height: '44px', background: '#fff', color: 'var(--ink-800)', display: 'grid', placeItems: 'center', borderRadius: '4px', fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '20px', marginBottom: '24px' }">▦</div>
            <h3 class="card-title" :style="{ color: '#fff' }">Matriz GUT</h3>
            <p :style="{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.55', marginTop: '8px', marginBottom: '24px' }">
              Sistema de priorização baseado em Gravidade, Urgência e Tendência para decisões estratégicas eficientes.
            </p>
            <ul :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '8px' }">
              <li v-for="(b, i) in ['Análise de Gravidade', 'Avaliação de Urgência', 'Previsão de Tendências']" :key="i" :style="{ display: 'flex', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }">
                <span :style="{ color: 'var(--cyan)' }">✓</span> {{ b }}
              </li>
            </ul>
          </div>

          <!-- Integração API -->
          <div class="reveal reveal-delay-2" :style="{ background: 'linear-gradient(160deg, var(--red), #b81f1f)', borderRadius: '6px', padding: '32px', position: 'relative', overflow: 'hidden', color: '#fff' }">
            <div :style="{ position: 'absolute', top: '12px', right: '12px', width: '14px', height: '14px', borderTop: '2px solid rgba(255,255,255,0.6)', borderRight: '2px solid rgba(255,255,255,0.6)' }"></div>
            <div :style="{ position: 'absolute', top: '0', right: '0', bottom: '0', width: '40%', backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.15), transparent 60%)' }"></div>
            <div :style="{ position: 'relative' }">
              <div :style="{ width: '44px', height: '44px', background: 'rgba(255,255,255,0.2)', color: '#fff', display: 'grid', placeItems: 'center', borderRadius: '4px', fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '20px', marginBottom: '24px' }">⇄</div>
              <h3 class="card-title" :style="{ color: '#fff' }">Integração via API</h3>
              <p :style="{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.55', marginTop: '8px', marginBottom: '24px' }">
                Conectividade total com os principais sistemas de gestão de manutenção do mercado via API REST robusta.
              </p>
              <ul :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '8px' }">
                <li v-for="(b, i) in ['SAP PM', 'IBM Maximo', 'TOTVS', 'Oracle EAM']" :key="i" :style="{ display: 'flex', gap: '10px', fontSize: '13px' }">
                  <span :style="{ color: '#fff', opacity: '0.7' }">●</span> {{ b }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Módulo IA -->
          <div class="reveal reveal-delay-3" :style="{ background: 'linear-gradient(160deg, #2a1a4a, #4a2a8a)', borderRadius: '6px', padding: '32px', position: 'relative', overflow: 'hidden', color: '#fff' }">
            <div :style="{ position: 'absolute', top: '12px', right: '12px', padding: '4px 8px', background: 'var(--cyan)', color: 'var(--ink-800)', fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.14em', borderRadius: '2px' }">NOVO</div>
            <div :style="{ position: 'absolute', top: '0', right: '0', bottom: '0', width: '40%', backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(0,194,224,0.25), transparent 60%)' }"></div>
            <div :style="{ position: 'relative' }">
              <div :style="{ width: '44px', height: '44px', background: 'rgba(0,194,224,0.25)', color: 'var(--cyan-bright)', display: 'grid', placeItems: 'center', borderRadius: '4px', fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '20px', marginBottom: '24px' }">◇</div>
              <h3 class="card-title" :style="{ color: '#fff' }">Módulo de IA</h3>
              <p :style="{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.55', marginTop: '8px', marginBottom: '24px' }">
                Inteligência Artificial com aprendizado dinâmico e pool global de conhecimento para predições cada vez mais precisas.
              </p>
              <ul :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '8px' }">
                <li v-for="(b, i) in ['Aprendizado contínuo', 'Base global de falhas', 'Predições avançadas']" :key="i" :style="{ display: 'flex', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }">
                  <span :style="{ color: 'var(--cyan-bright)' }">✓</span> {{ b }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Recursos avançados -->
        <div class="reveal" :style="{ marginTop: '32px', background: 'var(--ink-700)', border: '1px solid var(--ink-line-strong)', borderRadius: '6px', padding: '36px' }">
          <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '14px' }">
            <div class="h-section" :style="{ fontSize: '24px', color: '#fff' }">Recursos avançados</div>
            <div class="mono" :style="{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em', textTransform: 'uppercase' }">+ 40 funcionalidades</div>
          </div>
          <div
            :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', paddingTop: '28px', borderTop: '1px solid var(--ink-line-strong)' }"
            class="ra-grid"
          >
            <div v-for="(r, i) in recursosItems" :key="i" :style="{ display: 'flex', flexDirection: 'column', gap: '6px' }">
              <div :style="{ width: '36px', height: '36px', background: 'rgba(0,194,224,0.15)', color: 'var(--cyan-bright)', display: 'grid', placeItems: 'center', borderRadius: '4px', fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '16px', marginBottom: '8px' }">{{ r.i }}</div>
              <div :style="{ fontWeight: '600', color: '#fff', fontSize: '15px' }">{{ r.t }}</div>
              <div :style="{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.5' }">{{ r.d }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section class="s darker">
      <div class="wrap">
        <SectionHead
          num="03"
          eyebrow="Impacto Mensurável"
          title="Resultados <span style='color:var(--cyan)'>comprovados</span>"
          lede="Nossos clientes alcançam resultados extraordinários com a implementação das soluções S2i® e Perigômetro®. Dados de +200 plantas industriais."
        />
        <div
          :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }"
          class="ra2-grid"
        >
          <div v-for="(m, i) in resultadosMetrics" :key="i" :class="`metric reveal reveal-delay-${i + 1}`">
            <div class="corner"></div>
            <div class="metric-icon">{{ m.icon }}</div>
            <div class="metric-num">
              <AnimatedNumber :value="m.num" :prefix="m.pre" :suffix="m.suf" />
            </div>
            <div class="metric-lbl">{{ m.lbl }}</div>
            <p class="metric-cap">{{ m.cap }}</p>
          </div>
        </div>

        <!-- Benefícios + Impacto Operacional -->
        <div :style="{ marginTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }" class="ba-grid">
          <div class="reveal" :style="{ background: 'var(--ink-700)', border: '1px solid var(--ink-line-strong)', borderRadius: '6px', padding: '32px' }">
            <div class="h-section" :style="{ fontSize: '22px', marginBottom: '20px', color: '#fff' }">Benefícios Adicionais</div>
            <ul :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '14px' }">
              <li v-for="(b, i) in beneficiosAdicionais" :key="i" :style="{ display: 'flex', gap: '12px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }">
                <span :style="{ width: '18px', height: '18px', background: 'rgba(0,194,224,0.18)', color: 'var(--cyan)', display: 'grid', placeItems: 'center', borderRadius: '2px', fontFamily: 'var(--font-mono)', fontSize: '11px', flexShrink: '0', marginTop: '2px' }">✓</span>
                {{ b }}
              </li>
            </ul>
          </div>
          <div class="reveal reveal-delay-2" :style="{ background: 'var(--ink-700)', border: '1px solid var(--ink-line-strong)', borderRadius: '6px', padding: '32px' }">
            <div class="h-section" :style="{ fontSize: '22px', marginBottom: '20px', color: '#fff' }">Impacto Operacional</div>
            <ul :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '14px' }">
              <li v-for="(b, i) in impactoOperacional" :key="i" :style="{ display: 'flex', gap: '12px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }">
                <span :style="{ width: '18px', height: '18px', background: 'rgba(230,48,48,0.2)', color: 'var(--red-bright)', display: 'grid', placeItems: 'center', borderRadius: '2px', fontFamily: 'var(--font-mono)', fontSize: '11px', flexShrink: '0', marginTop: '2px' }">✓</span>
                {{ b }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSection :items="testimonials" />

    <ContactSection
      pitchTitleHtml="Veja o S2i® rodando em <span style='color:var(--cyan)'>30 minutos</span>"
      pitchSub="Demo guiada com dados sintéticos do seu setor industrial. Você sai da reunião sabendo exatamente como os apps se conectam ao seu CMMS atual."
      :bullets="[
        'Demo personalizada para seu setor industrial',
        'Análise técnica da integração com seu CMMS',
        'Período de avaliação de 14 dias sem compromisso',
        'Onboarding técnico incluído na contratação',
      ]"
      submitLabel="Agendar Demonstração"
    />
  </div>
</template>

<script setup lang="ts">
useReveal()

useSeoMeta({
  title: 'Pred Engenharia - Apps S2i® e Perigômetro®',
  ogTitle: 'Pred Engenharia - Apps S2i® e Perigômetro®',
  description: 'Soluções SaaS homologadas em nuvem para otimizar processos industriais e aumentar a confiabilidade dos ativos.',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.predengenharia.com.br/servicos/s3i',
})

const s2iFeatures = [
  { n: '01', t: 'Inspeções Preditivas', d: 'Antecipe falhas e problemas através de análises avançadas e monitoramento contínuo dos equipamentos industriais.', clr: 'var(--red)' },
  { n: '02', t: 'Inspeções Sensitivas', d: 'Detecção precisa de anomalias através de sensores inteligentes e análise de dados em tempo real.', clr: 'var(--cyan)' },
  { n: '03', t: 'Formação de Inspetores', d: 'Programa completo de capacitação e certificação de inspetores com metodologias reconhecidas internacionalmente.', clr: 'var(--red)' },
  { n: '04', t: 'Interface Simplificada', d: 'Acesso mobile + desktop com interface intuitiva, facilitando o trabalho em campo e no escritório.', clr: 'var(--cyan)' },
]

const recursosItems = [
  { i: '≡', t: 'Priorização Automática', d: 'Ordenação inteligente de tarefas' },
  { i: '!', t: 'Alertas Inteligentes', d: 'Notificações em tempo real' },
  { i: '▦', t: 'Dashboards Customizáveis', d: 'Visualização personalizada' },
  { i: '⬚', t: 'Relatórios Avançados', d: 'Análises detalhadas' },
]

const resultadosMetrics = [
  { icon: '↓', num: 45, pre: '−', suf: '%', lbl: 'Redução de Downtime', cap: 'Diminuição significativa de paradas não programadas através de manutenção preditiva eficiente e priorização inteligente.' },
  { icon: '↑', num: 60, pre: '+', suf: '%', lbl: 'Aumento da Vida Útil', cap: 'Extensão significativa da vida útil dos ativos através de inspeções regulares, manutenção preventiva e gestão otimizada.' },
  { icon: '$', num: 320, pre: '+', suf: '%', lbl: 'Retorno sobre Investimento', cap: 'ROI excepcional alcançado através da redução de custos operacionais, otimização de processos e aumento da produtividade.' },
]

const beneficiosAdicionais = [
  'Redução de custos com manutenção corretiva',
  'Melhoria na segurança operacional',
  'Otimização do estoque de peças sobressalentes',
  'Aumento da confiabilidade dos equipamentos',
]

const impactoOperacional = [
  'Maior disponibilidade de equipamentos',
  'Redução de retrabalho e falhas críticas',
  'Melhoria na gestão de equipes técnicas',
  'Conformidade com normas e regulamentações',
]

const testimonials = [
  { metric: '−45% downtime', quote: 'O S2i substituiu 12 planilhas. Em 3 meses tínhamos histórico completo de inspeções por equipamento e os primeiros laudos preditivos saindo direto pro CMMS.', initials: 'MR', name: 'Marcelo Ribeiro', role: 'Eng. Manutenção · Mineradora MG' },
  { metric: '+320% ROI 18 meses', quote: 'Conectamos o Perigômetro ao nosso SAP-PM via API. A priorização GUT virou o critério oficial de criação de ordem corretiva. Antes era discussão, hoje é dado.', initials: 'TC', name: 'Tatiana Costa', role: 'PCM Manager · Bebidas' },
  { metric: '100% rastreabilidade', quote: 'A camada de IA do Perigômetro já antecipou três falhas críticas em compressores nos últimos seis meses. O ROI desse módulo se pagou na primeira detecção.', initials: 'AV', name: 'André Vasconcelos', role: 'Diretor Operações · Química' },
]
</script>

<style scoped>
@media (max-width: 920px) {
  .s2i-grid,
  .peri-cards,
  .ra2-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 800px) {
  .ra-grid {
    grid-template-columns: 1fr 1fr !important;
  }
}

@media (max-width: 720px) {
  .ba-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
