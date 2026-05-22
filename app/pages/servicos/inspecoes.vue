<template>
  <div class="page-enter">
    <HeroSection
      code="MP-502"
      eyebrow="SIT · Serviços Técnicos Especializados"
      headlineHtml="Excelência operacional<br/>através da <span class='underline'>Metodologia MCI®</span>"
      sub="Transforme sua operação com nossos serviços técnicos de inspeção e manutenção. Baseados na metodologia MCI® para máxima confiabilidade e disponibilidade física."
      primaryCta="Solicitar Consultoria"
      secondaryCta="Ver Metodologia"
      :stats="[
        { value: 98, suffix: '%', label: 'Precisão na identificação' },
        { value: 1200, prefix: '+', label: 'Inspeções/mês' },
        { value: 24, suffix: '/7', label: 'Suporte técnico' },
      ]"
      imageUrl="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80"
      imageAlt="Técnico em inspeção industrial"
      floatingNum="98%"
      floatingLbl="Precisão"
    />

    <TrustBar />

    <!-- Inspeções Preditivas -->
    <section class="s">
      <div class="wrap">
        <SectionHead
          num="01"
          eyebrow="Inspeções Preditivas"
          title="Técnicas de inspeção <span style='color:var(--red)'>avançadas</span>"
          lede="Utilizamos as mais modernas técnicas de inspeção para identificar não-conformidades antes da falha e garantir rastreabilidade completa."
        />

        <div
          :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }"
          class="ins-grid"
        >
          <div
            v-for="(ins, i) in inspections"
            :key="i"
            :class="`reveal reveal-delay-${(i % 2) + 1}`"
            :style="{
              background: '#fff',
              border: '1px solid var(--paper-line)',
              borderRadius: '6px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
            }"
          >
            <div :style="{ position: 'relative', background: 'var(--ink-800)', overflow: 'hidden' }">
              <img :src="ins.img" alt="" :style="{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.65' }" />
              <div :style="{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg, rgba(10,22,40,0.5), rgba(10,22,40,0.1))' }"></div>
              <div :style="{ position: 'absolute', top: '14px', left: '14px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--cyan)', letterSpacing: '0.16em' }">{{ ins.num }}</div>
              <div :style="{ position: 'absolute', bottom: '14px', left: '14px', fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: '800', color: '#fff', lineHeight: '1' }">{{ ins.icon }}</div>
            </div>
            <div :style="{ padding: '28px' }">
              <h3 class="card-title" :style="{ marginBottom: '10px' }">{{ ins.t }}</h3>
              <p class="card-body" :style="{ marginBottom: '18px' }">{{ ins.d }}</p>
              <ul :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '6px' }">
                <li
                  v-for="(b, j) in ins.bullets"
                  :key="j"
                  :style="{ display: 'flex', gap: '10px', fontSize: '13.5px', color: 'var(--ink-400)' }"
                >
                  <span :style="{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }">✓</span>
                  {{ b }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Não-Conformidades -->
    <section class="s dark">
      <div class="wrap">
        <div
          :style="{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }"
          class="nc-grid"
        >
          <div class="reveal">
            <div class="section-eyebrow">
              <span class="num mono">02</span>
              <span>Identificação Sistemática</span>
              <span class="line"></span>
            </div>
            <h2 class="h-section section-title" :style="{ marginTop: '14px' }">
              Não-Conformidades <span :style="{ color: 'var(--cyan)' }">rastreáveis</span> com<br/>metodologia própria de priorização
            </h2>
            <p :style="{ marginTop: '24px', fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,0.7)', maxWidth: '520px' }">
              Sistema robusto de identificação, classificação e rastreamento de não-conformidades com critérios técnicos auditáveis.
            </p>
            <div :style="{ marginTop: '32px', display: 'grid', gap: '14px' }">
              <div
                v-for="(it, i) in ncItems"
                :key="i"
                :style="{
                  display: 'grid',
                  gridTemplateColumns: '24px 1fr',
                  gap: '14px',
                  alignItems: 'baseline',
                  padding: '16px 0',
                  borderBottom: '1px solid var(--ink-line)',
                }"
              >
                <div :style="{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '16px' }">↗</div>
                <div>
                  <div :style="{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }">{{ it.t }}</div>
                  <div :style="{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }">{{ it.d }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="reveal reveal-delay-2" :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }">
            <div class="metric">
              <div class="corner"></div>
              <div class="metric-num"><AnimatedNumber :value="98" suffix="%" /></div>
              <div class="metric-lbl">Precisão na identificação</div>
              <p class="metric-cap">Taxa de acerto em diagnóstico vs. desmontagem</p>
            </div>
            <div class="metric" :style="{ borderColor: 'var(--red)' }">
              <div class="corner" :style="{ borderColor: 'var(--red)' }"></div>
              <div class="metric-num"><AnimatedNumber :value="45" suffix="%" prefix="−" /></div>
              <div class="metric-lbl">Falhas evitadas</div>
              <p class="metric-cap">Detecção preditiva antes do estágio crítico</p>
            </div>
            <div class="metric">
              <div class="corner"></div>
              <div class="metric-num"><AnimatedNumber :value="72" suffix="h" /></div>
              <div class="metric-lbl">Tempo médio de laudo</div>
              <p class="metric-cap">Da coleta em campo ao laudo entregue ao cliente</p>
            </div>
            <div class="metric" :style="{ borderColor: 'var(--cyan)' }">
              <div class="corner"></div>
              <div class="metric-num"><AnimatedNumber :value="100" suffix="%" /></div>
              <div class="metric-lbl">Rastreabilidade</div>
              <p class="metric-cap">Toda inspeção vinculada a ativo, técnico e protocolo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <DividerPulse />

    <!-- PCM -->
    <section class="s">
      <div class="wrap">
        <SectionHead
          num="03"
          eyebrow="PCM"
          title="Planejamento &amp; Controle <br/>de <span style='color:var(--red)'>Manutenção</span>"
          lede="Estratégia integrada de Planejamento, Aprovisionamento e Programação para garantir máxima disponibilidade física dos ativos críticos."
        />

        <div
          :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '1px solid var(--paper-line-strong)', borderRadius: '6px', overflow: 'hidden', background: '#fff' }"
          class="pcm-grid"
        >
          <div
            v-for="(p, i) in pcmItems"
            :key="i"
            :class="`reveal reveal-delay-${i + 1}`"
            :style="{
              padding: '36px',
              borderRight: i < 2 ? '1px solid var(--paper-line-strong)' : 'none',
            }"
          >
            <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }">
              <div class="mono" :style="{ color: 'var(--red)', fontSize: '13px', letterSpacing: '0.16em' }">{{ p.n }}</div>
              <div :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--ink-300)' }">{{ p.icon }}</div>
            </div>
            <h3 class="h-section" :style="{ fontSize: '26px', marginBottom: '12px' }">{{ p.t }}</h3>
            <p :style="{ margin: '0', fontSize: '14.5px', lineHeight: '1.6', color: 'var(--ink-400)' }">{{ p.d }}</p>
          </div>
        </div>

        <!-- Disponibilidade Física -->
        <div class="reveal" :style="{ marginTop: '32px', background: 'var(--paper-2)', border: '1px solid var(--paper-line)', borderRadius: '6px', padding: '48px' }">
          <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }">
            <div>
              <div class="mono" :style="{ color: 'var(--red)', fontSize: '12px', letterSpacing: '0.16em', marginBottom: '8px' }">INDICADOR-CHAVE</div>
              <h3 class="h-section" :style="{ fontSize: '32px', margin: '0' }">Disponibilidade Física (DF)</h3>
            </div>
            <div class="mono" :style="{ fontSize: '11.5px', color: 'var(--ink-300)', letterSpacing: '0.12em', textTransform: 'uppercase' }">Métricas comprovadas em campo</div>
          </div>
          <div
            :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', borderTop: '1px solid var(--paper-line-strong)', paddingTop: '32px' }"
            class="df-grid"
          >
            <div v-for="(d, i) in dfItems" :key="i">
              <div class="h-display" :style="{ fontSize: '52px', color: d.clr, lineHeight: '1', marginBottom: '8px' }">
                <AnimatedNumber :value="d.v" :suffix="d.suf" :prefix="d.pre || ''" />
                <span v-if="d.unit" :style="{ color: 'var(--cyan)' }">{{ d.unit }}</span>
              </div>
              <div class="mono" :style="{ fontSize: '11px', color: 'var(--ink-300)', letterSpacing: '0.14em', textTransform: 'uppercase' }">{{ d.lbl }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modelo de Negócio -->
    <section class="s dark">
      <div class="wrap">
        <SectionHead
          num="04"
          eyebrow="Modelo de Negócio Inovador"
          title="Contratação <span style='color:var(--cyan)'>modular</span> com foco em<br/>transferência de conhecimento"
          lede="Diferente de consultorias que prendem o cliente, nosso modelo é desenhado para criar autonomia. Contrate apenas o que precisa, escale conforme evolui."
        />

        <div
          :style="{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px' }"
          class="mn-grid"
        >
          <div class="reveal">
            <div class="mono" :style="{ color: 'var(--cyan)', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '24px', textTransform: 'uppercase' }">Contratação Modular</div>
            <ul :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '0' }">
              <li
                v-for="(m, i) in modeloItems"
                :key="i"
                :class="`reveal reveal-delay-${i + 1}`"
                :style="{
                  padding: '22px 0',
                  borderBottom: '1px solid var(--ink-line)',
                  display: 'grid',
                  gridTemplateColumns: '36px 1fr',
                  gap: '16px',
                }"
              >
                <div :style="{ width: '32px', height: '32px', background: 'rgba(0,194,224,0.14)', color: 'var(--cyan)', display: 'grid', placeItems: 'center', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: '600', fontSize: '13px' }">0{{ i + 1 }}</div>
                <div>
                  <div :style="{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }">{{ m.t }}</div>
                  <div :style="{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.55' }">{{ m.d }}</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="reveal reveal-delay-2">
            <div :style="{ background: 'linear-gradient(160deg, var(--ink-700), var(--ink-900))', border: '1px solid var(--ink-line-strong)', borderRadius: '6px', padding: '36px', position: 'relative', overflow: 'hidden' }">
              <div :style="{ position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(0,194,224,0.2), transparent 50%)', pointerEvents: 'none' }"></div>
              <div :style="{ position: 'relative' }">
                <div class="mono" :style="{ color: 'var(--cyan)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '18px' }">NOSSO COMPROMISSO</div>
                <div class="h-display" :style="{ fontSize: '36px', lineHeight: '1.05', marginBottom: '20px' }">
                  Trabalhamos para que você não precise mais de nós.
                </div>
                <p :style="{ color: 'rgba(255,255,255,0.7)', margin: '0 0 32px', lineHeight: '1.6', fontSize: '15px' }">
                  Nossa missão é transferir conhecimento e criar autonomia operacional na sua equipe. O sucesso é medido pela sua independência.
                </p>
                <div :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', paddingTop: '24px', borderTop: '1px solid var(--ink-line-strong)' }">
                  <div>
                    <div class="h-display" :style="{ fontSize: '42px', color: 'var(--cyan)' }"><AnimatedNumber :value="100" suffix="+" /></div>
                    <div class="mono" :style="{ fontSize: '10.5px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '4px' }">Profissionais capacitados</div>
                  </div>
                  <div>
                    <div class="h-display" :style="{ fontSize: '42px', color: 'var(--cyan)' }"><AnimatedNumber :value="85" suffix="%" /></div>
                    <div class="mono" :style="{ fontSize: '10.5px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '4px' }">Taxa de autonomia</div>
                  </div>
                </div>
                <button class="btn btn-primary" :style="{ marginTop: '28px', width: '100%', justifyContent: 'center' }">
                  Conhecer Metodologia MCI® <span class="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSection :items="testimonials" />

    <ContactSection
      pitchTitleHtml="Comece pela <span style='color:var(--cyan)'>inspeção</span>"
      pitchSub="Uma campanha técnica em sua planta principal revela 2-3 anos de oportunidades acumuladas. Comece com um piloto auditável e expanda a partir de evidências."
      :bullets="[
        'Inspeção piloto em até 30 ativos críticos',
        'Laudo técnico completo com fotos termográficas',
        'Plano de ação priorizado por matriz GUT',
        'Capacitação inicial da equipe técnica incluída',
      ]"
      submitLabel="Agendar Inspeção Piloto"
    />
  </div>
</template>

<script setup lang="ts">
useReveal()

useSeoMeta({
  title: 'Pred Engenharia - Serviços Técnicos de Inspeção',
  ogTitle: 'Pred Engenharia - Serviços Técnicos de Inspeção',
  description: 'Transforme sua operação com nossos serviços técnicos de inspeção e manutenção. Baseados na metodologia MCI® para máxima confiabilidade e disponibilidade física.',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.predengenharia.com.br/servicos/inspecoes',
})

const inspections = [
  { num: '01', t: 'Análise de Vibração', d: 'Detecção precoce de falhas em equipamentos rotativos através de análise espectral avançada. Categoria I-III ISO 18436.', bullets: ['Identificação de desbalanceamento', 'Detecção de rolamentos defeituosos', 'Diagnóstico de desalinhamento'], icon: '≈', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80' },
  { num: '02', t: 'Termografia Infravermelha', d: 'Inspeção térmica não invasiva para detecção de anomalias em equipamentos elétricos e mecânicos.', bullets: ['Detecção de aquecimento anormal', 'Identificação de conexões soltas', 'Mapeamento de pontos quentes'], icon: '☼', img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80' },
  { num: '03', t: 'Inspeção Visual & Tátil', d: 'Metodologia estruturada IVT para inspeções visuais com padronização rigorosa de critérios.', bullets: ['Protocolos padronizados', 'Rastreabilidade completa', 'Equipes treinadas SPA®'], icon: '◉', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80' },
  { num: '04', t: 'Ultrassom Industrial', d: 'Detecção de vazamentos, problemas de lubrificação e defeitos estruturais via ultrassom airborne.', bullets: ['Detecção de vazamentos', 'Monitoramento de lubrificação', 'Inspeção de descargas elétricas'], icon: '))', img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80' },
]

const ncItems = [
  { t: 'Classificação por criticidade', d: 'Matriz GUT (Gravidade × Urgência × Tendência) aplicada a cada anomalia.' },
  { t: 'Rastreabilidade completa', d: 'Cada NC vinculada a ativo, ordem, técnico e laudo — histórico completo.' },
  { t: 'Cronograma de correções', d: 'Plano de ação automático com responsáveis e prazos sincronizados ao CMMS.' },
]

const pcmItems = [
  { n: '01', t: 'Planejamento', d: 'Estruturação detalhada de atividades de manutenção com base em criticidade, histórico de falhas e janela operacional.', icon: '⬚' },
  { n: '02', t: 'Aprovisionamento', d: 'Gestão inteligente de estoque e suprimentos para garantir disponibilidade de materiais e peças no momento exato.', icon: '▦' },
  { n: '03', t: 'Programação', d: 'Otimização de recursos e cronogramas para maximizar eficiência e minimizar paradas não programadas.', icon: '≡' },
]

const dfItems = [
  { v: 95, suf: '%', unit: '+', lbl: 'Disponibilidade Média', clr: 'var(--ink-800)' },
  { v: 40, suf: '%', pre: '−', lbl: 'Redução de Paradas', clr: 'var(--red)' },
  { v: 25, suf: '%', pre: '−', lbl: 'Redução de Custos', clr: 'var(--red)' },
  { v: 30, suf: '%', pre: '+', lbl: 'Eficiência Operacional', clr: 'var(--cyan)' },
]

const modeloItems = [
  { t: 'Módulos Independentes', d: 'Contrate apenas os serviços que sua operação necessita, com flexibilidade total.' },
  { t: 'Escalabilidade', d: 'Expanda ou reduza os serviços conforme a evolução das suas necessidades operacionais.' },
  { t: 'Investimento Otimizado', d: 'Pague apenas pelo que utiliza, com ROI mensurável em cada módulo contratado.' },
  { t: 'Saída Planejada', d: 'Cláusula de exit programada — quando sua equipe estiver pronta, nós saímos.' },
]

const testimonials = [
  { metric: '+12% disponibilidade', quote: 'As inspeções preditivas reduziram drasticamente nossas paradas não programadas. Hoje temos previsibilidade real do orçamento de manutenção.', initials: 'PS', name: 'Paulo Silveira', role: 'Ger. Manutenção · Siderurgia' },
  { metric: '−68% falhas críticas', quote: 'Termografia e ultrassom integrados nos deram uma camada de detecção que antes simplesmente não existia. ROI em 4 meses.', initials: 'LM', name: 'Luciana Mota', role: 'Eng. Confiabilidade · Cimento' },
  { metric: 'Cat I-III certificada', quote: 'A capacitação SPA® formou nossa equipe interna para fazer 80% das inspeções. O restante seguimos com a Pred como parceira técnica.', initials: 'EB', name: 'Eduardo Bastos', role: 'Diretor Operações · Química' },
]
</script>

<style scoped>
@media (max-width: 900px) {
  .ins-grid,
  .ins-grid > div,
  .pcm-grid {
    grid-template-columns: 1fr !important;
  }

  .ins-grid > div > div:first-child {
    height: 160px !important;
  }

  .pcm-grid > div {
    border-right: none !important;
    border-bottom: 1px solid var(--paper-line-strong) !important;
  }
}

@media (max-width: 920px) {
  .nc-grid,
  .mn-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 720px) {
  .df-grid {
    grid-template-columns: 1fr 1fr !important;
  }
}
</style>
