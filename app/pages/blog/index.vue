<template>
  <div class="page-enter">
    <!-- Hero -->
    <section class="hero" :style="{ padding: '80px 0 64px' }">
      <div class="hero-grid-bg" />
      <div class="hero-corner left mono">PRED · BLOG</div>
      <div class="hero-corner right mono">EDIÇÃO 47 · 2026</div>
      <div class="wrap">
        <div
          :style="{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '64px', alignItems: 'end' }"
          class="blog-hero-grid"
        >
          <div class="reveal in">
            <div class="hero-eyebrow">
              <span class="hero-eyebrow-dot"></span>
              INSIGHTS TÉCNICOS · PUBLICAÇÕES ESTRATÉGICAS
            </div>
            <h1 class="h-display hero-headline" :style="{ fontSize: 'clamp(36px, 4.4vw, 64px)' }">
              Inteligência aplicada à<br/>
              <span class="underline">manutenção industrial</span>
            </h1>
            <p class="hero-sub" :style="{ marginTop: '24px' }">
              Artigos, análises e estudos de caso sobre confiabilidade, gestão de ativos e transformação digital — escritos por nossos engenheiros sêniores e revisados por pares.
            </p>
          </div>
          <div class="reveal in reveal-delay-2" :style="{ display: 'flex', flexDirection: 'column', gap: '16px' }">
            <div :style="{ position: 'relative' }">
              <input
                placeholder="Buscar artigos por tema, técnica ou setor..."
                :style="{ width: '100%', padding: '16px 50px 16px 18px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '14px' }"
              />
              <div :style="{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--cyan)', fontSize: '18px' }">⌕</div>
            </div>
            <button class="btn btn-primary">Inscrever-se na Newsletter Técnica <span class="arrow">→</span></button>
            <div class="btn-microcopy">PUBLICAÇÃO QUINZENAL · ZERO SPAM · CANCELE QUANDO QUISER</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter pills -->
    <div :style="{ background: '#fff', borderBottom: '1px solid var(--paper-line)', position: 'sticky', top: 'var(--header-h)', zIndex: '50', backdropFilter: 'blur(8px)' }">
      <div class="wrap" :style="{ display: 'flex', alignItems: 'center', gap: '24px', padding: '16px 32px', overflowX: 'auto' }">
        <div class="mono" :style="{ fontSize: '11px', color: 'var(--ink-300)', letterSpacing: '0.16em', textTransform: 'uppercase', flexShrink: '0' }">FILTRAR POR</div>
        <div :style="{ display: 'flex', gap: '8px', flexShrink: '0' }">
          <button
            v-for="c in categories"
            :key="c"
            @click="filter = c"
            :style="{
              padding: '7px 14px',
              borderRadius: '50px',
              border: filter === c ? '1px solid var(--ink-800)' : '1px solid var(--paper-line-strong)',
              background: filter === c ? 'var(--ink-800)' : 'transparent',
              color: filter === c ? '#fff' : 'var(--ink-700)',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap',
              transition: 'all 0.18s',
            }"
          >
            {{ c }}
          </button>
        </div>
        <div :style="{ marginLeft: 'auto', flexShrink: '0', display: 'flex', gap: '14px', alignItems: 'center' }" class="blog-tools">
          <span class="mono" :style="{ fontSize: '11px', color: 'var(--ink-300)', letterSpacing: '0.1em', textTransform: 'uppercase' }">187 ARTIGOS · ORDENADO POR DATA</span>
        </div>
      </div>
    </div>

    <!-- Featured -->
    <section class="s" :style="{ paddingTop: '48px' }">
      <div class="wrap">
        <div class="reveal feat-grid" :style="{ background: '#fff', border: '1px solid var(--paper-line)', borderRadius: '6px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }" >
          <div :style="{ position: 'relative', minHeight: '400px', overflow: 'hidden' }">
            <img :src="featured.img" alt="" :style="{ width: '100%', height: '100%', objectFit: 'cover' }" />
            <div :style="{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg, rgba(10,22,40,0.3), transparent 60%)' }"></div>
            <div :style="{ position: 'absolute', top: '24px', left: '24px', padding: '6px 12px', background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.18em', borderRadius: '2px' }">
              {{ featured.cat }}
            </div>
          </div>
          <div :style="{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }">
            <div :style="{ display: 'flex', gap: '16px', marginBottom: '20px', fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--ink-300)', letterSpacing: '0.14em', textTransform: 'uppercase' }">
              <span>{{ featured.date }}</span>
              <span>·</span>
              <span>{{ featured.read }}</span>
              <span>·</span>
              <span>POR {{ featured.author.toUpperCase() }}</span>
            </div>
            <h2 class="h-section" :style="{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: '1.05', marginBottom: '18px' }">
              {{ featured.title }}
            </h2>
            <p :style="{ margin: '0 0 32px', fontSize: '16px', lineHeight: '1.6', color: 'var(--ink-400)' }">
              {{ featured.sub }}
            </p>
            <div>
              <button class="btn btn-primary">Ler artigo completo <span class="arrow">→</span></button>
            </div>
            <div :style="{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--paper-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }">
              <div :style="{ display: 'flex', alignItems: 'center', gap: '12px' }">
                <div :style="{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--ink-800)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '14px' }">OR</div>
                <div>
                  <div :style="{ fontSize: '13px', fontWeight: '600' }">{{ featured.author }}</div>
                  <div class="mono" :style="{ fontSize: '10.5px', color: 'var(--ink-300)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '2px' }">FUNDADOR · ENGENHARIA SR</div>
                </div>
              </div>
              <div :style="{ display: 'flex', gap: '14px', fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--ink-300)', letterSpacing: '0.1em' }">
                <span>◐ {{ featured.views }}</span>
                <span>↗ 84</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles + Sidebar -->
    <section class="s dense" :style="{ paddingTop: '0' }">
      <div class="wrap">
        <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px' }" class="blog-main-grid">
          <!-- Articles -->
          <div>
            <div :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }" class="posts-grid">
              <article
                v-for="(p, i) in posts"
                :key="i"
                :class="`reveal reveal-delay-${(i % 3) + 1}`"
                :style="{
                  background: '#fff',
                  border: '1px solid var(--paper-line)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }"
                @mouseenter="(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 18px 36px -18px rgba(10,22,40,0.25)'; }"
                @mouseleave="(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }"
              >
                <div :style="{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--ink-800)' }">
                  <img :src="p.img" alt="" :style="{ width: '100%', height: '100%', objectFit: 'cover' }" />
                  <div :style="{ position: 'absolute', top: '16px', left: '16px', padding: '5px 10px', background: 'rgba(10,22,40,0.85)', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '10.5px', fontWeight: '500', letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: '2px' }">
                    {{ p.cat }}
                  </div>
                </div>
                <div :style="{ padding: '24px' }">
                  <div class="mono" :style="{ fontSize: '11px', color: 'var(--ink-300)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }">
                    {{ p.date }} · {{ p.read }}
                  </div>
                  <h3 class="h-section" :style="{ fontSize: '21px', lineHeight: '1.1', marginBottom: '10px' }">{{ p.title }}</h3>
                  <p :style="{ margin: '0', fontSize: '14px', lineHeight: '1.55', color: 'var(--ink-400)' }">{{ p.sub }}</p>
                  <div :style="{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--paper-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }">
                    <span :style="{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: 'var(--red)', letterSpacing: '0.1em', textTransform: 'uppercase' }">Ler artigo →</span>
                    <span :style="{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-300)' }">◐ {{ p.views }}</span>
                  </div>
                </div>
              </article>
            </div>

            <!-- Pagination -->
            <div :style="{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '48px' }">
              <button @click="page = Math.max(1, page - 1)" :style="{ width: '40px', height: '40px', borderRadius: '4px', border: '1px solid var(--paper-line-strong)', background: '#fff', cursor: 'pointer', fontFamily: 'var(--font-mono)' }">←</button>
              <button
                v-for="n in [1,2,3,4,5]"
                :key="n"
                @click="page = n"
                :style="{
                  width: '40px',
                  height: '40px',
                  borderRadius: '4px',
                  border: page === n ? '1px solid var(--ink-800)' : '1px solid var(--paper-line)',
                  background: page === n ? 'var(--ink-800)' : 'transparent',
                  color: page === n ? '#fff' : 'var(--ink-700)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '600',
                }"
              >
                {{ n }}
              </button>
              <span class="mono" :style="{ padding: '0 8px', color: 'var(--ink-300)' }">...</span>
              <button @click="page = 24" :style="{ width: '40px', height: '40px', borderRadius: '4px', border: '1px solid var(--paper-line)', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontWeight: '600' }">24</button>
              <button @click="page = page + 1" :style="{ width: '40px', height: '40px', borderRadius: '4px', border: '1px solid var(--paper-line-strong)', background: '#fff', cursor: 'pointer', fontFamily: 'var(--font-mono)' }">→</button>
            </div>
          </div>

          <!-- Sidebar -->
          <aside :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }">
            <!-- Guide download -->
            <div class="reveal" :style="{ background: 'var(--ink-800)', color: '#fff', borderRadius: '6px', padding: '28px', position: 'relative', overflow: 'hidden' }">
              <div :style="{ position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(rgba(0,194,224,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,224,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }"></div>
              <div :style="{ position: 'relative' }">
                <div :style="{ width: '42px', height: '42px', background: 'var(--red)', color: '#fff', display: 'grid', placeItems: 'center', borderRadius: '4px', fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '18px' }">↓</div>
                <div class="mono" :style="{ color: 'var(--cyan)', fontSize: '11px', letterSpacing: '0.16em', marginBottom: '8px' }">GUIA GRATUITO</div>
                <div class="h-section" :style="{ fontSize: '22px', marginBottom: '10px', color: '#fff' }">MCI® na Prática</div>
                <p :style="{ fontSize: '13.5px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.55', margin: '0 0 18px' }">Metodologia completa para implementar Manutenção Centrada na Integridade na sua operação. 64 páginas.</p>
                <button class="btn btn-primary btn-sm" :style="{ width: '100%', justifyContent: 'center' }">Baixar Agora <span class="arrow">→</span></button>
              </div>
            </div>

            <!-- Diagnostic -->
            <div class="reveal reveal-delay-1" :style="{ background: '#fff', border: '1px solid var(--paper-line)', borderRadius: '6px', padding: '28px' }">
              <div :style="{ width: '42px', height: '42px', background: 'rgba(0,194,224,0.14)', color: 'var(--cyan)', display: 'grid', placeItems: 'center', borderRadius: '4px', fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '18px' }">↗</div>
              <div class="mono" :style="{ color: 'var(--red)', fontSize: '11px', letterSpacing: '0.16em', marginBottom: '8px' }">AVALIAÇÃO TÉCNICA</div>
              <div class="h-section" :style="{ fontSize: '22px', marginBottom: '10px' }">Sua manutenção está alinhada?</div>
              <p :style="{ fontSize: '13.5px', color: 'var(--ink-400)', lineHeight: '1.55', margin: '0 0 18px' }">Receba um diagnóstico personalizado e gratuito da sua operação. Respostas em até 24h.</p>
              <button class="btn btn-outline-dark btn-sm" :style="{ width: '100%', justifyContent: 'center' }">Solicitar Diagnóstico <span class="arrow">→</span></button>
            </div>

            <!-- Newsletter -->
            <div class="reveal reveal-delay-2" :style="{ background: 'var(--paper-2)', border: '1px solid var(--paper-line-strong)', borderRadius: '6px', padding: '28px' }">
              <div class="mono" :style="{ color: 'var(--red)', fontSize: '11px', letterSpacing: '0.16em', marginBottom: '8px' }">NEWSLETTER TÉCNICA</div>
              <div class="h-section" :style="{ fontSize: '20px', marginBottom: '10px' }">Quinzenalmente na sua caixa</div>
              <p :style="{ fontSize: '13.5px', color: 'var(--ink-400)', lineHeight: '1.55', margin: '0 0 14px' }">Conteúdo curado por engenheiros sêniores. +12.000 inscritos.</p>
              <input placeholder="seu@email.corp.br" :style="{ width: '100%', padding: '12px 14px', border: '1px solid var(--paper-line-strong)', borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '13px', background: '#fff', marginBottom: '8px' }" />
              <button class="btn btn-primary btn-sm" :style="{ width: '100%', justifyContent: 'center' }">Inscrever-se <span class="arrow">→</span></button>
            </div>

            <!-- Most read -->
            <div class="reveal reveal-delay-3" :style="{ background: '#fff', border: '1px solid var(--paper-line)', borderRadius: '6px', padding: '28px' }">
              <div class="mono" :style="{ color: 'var(--ink-300)', fontSize: '11px', letterSpacing: '0.16em', marginBottom: '14px', textTransform: 'uppercase' }">MAIS LIDOS · 30 DIAS</div>
              <ol :style="{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '14px' }">
                <li
                  v-for="(t, i) in mostRead"
                  :key="i"
                  :style="{
                    display: 'grid',
                    gridTemplateColumns: '32px 1fr',
                    gap: '12px',
                    paddingBottom: i < 3 ? '14px' : '0',
                    borderBottom: i < 3 ? '1px solid var(--paper-line)' : 'none',
                  }"
                >
                  <div class="h-display" :style="{ fontSize: '22px', color: 'var(--red)', lineHeight: '1' }">0{{ i + 1 }}</div>
                  <div :style="{ fontSize: '13.5px', lineHeight: '1.4', fontWeight: '500', cursor: 'pointer' }">{{ t }}</div>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- CTA Strip -->
    <section class="s dark" :style="{ paddingTop: '64px', paddingBottom: '64px' }">
      <div class="wrap">
        <div class="reveal" :style="{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }">
          <div class="mono" :style="{ color: 'var(--cyan)', fontSize: '11.5px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '14px' }">PRONTO PARA APLICAR?</div>
          <h2 class="h-section" :style="{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: '18px' }">
            Transforme sua manutenção em <span :style="{ color: 'var(--cyan)' }">vantagem competitiva</span>
          </h2>
          <p :style="{ fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: '1.6', margin: '0 0 32px' }">
            Conteúdo é fundação. Mas resultado só vem com aplicação. Agende uma conversa estratégica e descubra como elevar sua operação ao próximo nível.
          </p>
          <div :style="{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }">
            <button class="btn btn-primary btn-lg">Agendar Conversa Estratégica <span class="arrow">→</span></button>
            <button class="btn btn-outline btn-lg">Baixar Material Técnico</button>
          </div>
          <div class="btn-microcopy" :style="{ textAlign: 'center' }">45 MIN · SEM COMPROMISSO · ENGENHEIRO SR</div>
        </div>
      </div>
    </section>

    <PredContactSection
      pitchTitleHtml="Quer ser nosso <span style='color:var(--cyan)'>convidado?</span>"
      pitchSub="Aceitamos contribuições de engenheiros, gestores industriais e pesquisadores em manutenção e confiabilidade. Conteúdo técnico, com revisão por pares e direito a co-assinatura."
      :bullets="[
        'Curadoria editorial por engenheiro sênior',
        'Revisão técnica antes da publicação',
        'Distribuição para +12.000 profissionais',
        'Material de apoio (guias, planilhas) co-criado',
      ]"
      submitLabel="Enviar Proposta de Artigo"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'pred' })
useReveal()

useSeoMeta({
  title: 'Pred Engenharia - Blog',
  ogTitle: 'Pred Engenharia - Blog',
  description: 'Artigos, análises e estudos de caso sobre confiabilidade, gestão de ativos e transformação digital — escritos por nossos engenheiros sêniores.',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.predengenharia.com.br/blog',
})

const filter = ref('Todos')
const page = ref(1)

const categories = ['Todos', 'Manutenção Estratégica', 'Confiabilidade', 'Gestão de Ativos', 'Indicadores', 'Transformação Digital']

const featured = {
  img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=80',
  cat: 'EM DESTAQUE',
  title: 'As Cinco Dimensões da Função Manter',
  sub: 'Descubra como a manutenção industrial evoluiu para além da simples correção de falhas, abrangendo estratégias preditivas, gestão de riscos e otimização de performance através da análise de dados em tempo real.',
  date: '15 Jan 2026',
  author: 'Osório Rezende C. Filho',
  read: '8 min',
  views: '1.2k',
}

// Fixed views to avoid hydration mismatch
const posts = [
  { cat: 'Manutenção Estratégica', title: 'Como Alinhar a Manutenção ao Cenário Macroeconômico Global', sub: 'Descubra estratégias essenciais para sincronizar sua operação com tendências econômicas globais e maximizar resultados.', date: '15 Jan 2026', read: '6 min', img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=700&q=80', views: 847 },
  { cat: 'Confiabilidade', title: 'As Cinco Dimensões da Função Manter na Indústria', sub: 'Entenda os pilares fundamentais que sustentam uma gestão de manutenção de classe mundial e como implementá-los.', date: '12 Jan 2026', read: '9 min', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=700&q=80', views: 623 },
  { cat: 'Gestão de Ativos', title: 'Gestão do Autoengano na Manutenção Industrial', sub: 'Como identificar e eliminar vieses cognitivos que comprometem a tomada de decisão na gestão de ativos industriais.', date: '08 Jan 2026', read: '7 min', img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=700&q=80', views: 512 },
  { cat: 'Indicadores & KPIs', title: 'Indicadores Estratégicos para Manutenção 4.0', sub: 'Os KPIs essenciais que toda operação de manutenção moderna deve monitorar para garantir excelência operacional.', date: '05 Jan 2026', read: '5 min', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80', views: 934 },
  { cat: 'Transformação Digital', title: 'IoT e Preditiva: O Futuro da Manutenção Industrial', sub: 'Como tecnologias emergentes estão revolucionando a manutenção e criando vantagens competitivas sustentáveis.', date: '02 Jan 2026', read: '8 min', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&q=80', views: 718 },
  { cat: 'Manutenção Estratégica', title: 'ROI em Manutenção: Como Medir e Maximizar Resultados', sub: 'Metodologias comprovadas para calcular o retorno sobre investimento em projetos de manutenção e confiabilidade.', date: '28 Dez 2025', read: '6 min', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=700&q=80', views: 456 },
]

const mostRead = [
  'RCM aplicado a frotas industriais',
  'OEE, MTBF e MTTR sem confusão',
  'Lubrificação preditiva — o ABC',
  'Como apresentar manutenção pro CFO',
]
</script>

<style scoped>
@media (max-width: 920px) {
  .blog-hero-grid {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }

  .feat-grid {
    grid-template-columns: 1fr !important;
  }

  .feat-grid > div:first-child {
    min-height: 260px !important;
  }
}

@media (max-width: 1080px) {
  .blog-main-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 720px) {
  .posts-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
