<template>
  <section class="hero">
    <div class="hero-grid-bg" />
    <div class="hero-corner left mono">PRED · {{ code }}</div>
    <div class="hero-corner right mono">{{ rev }}</div>
    <div class="wrap">
      <div class="hero-inner">
        <div class="reveal in">
          <div class="hero-eyebrow">
            <span class="hero-eyebrow-dot"></span>
            {{ eyebrow }}
          </div>
          <h1 class="h-display hero-headline" v-html="headlineHtml"></h1>
          <p class="hero-sub">{{ sub }}</p>
          <div class="hero-ctas">
            <component
              :is="primaryHref ? 'a' : 'button'"
              :href="primaryHref || undefined"
              :type="primaryHref ? undefined : 'button'"
              class="btn btn-primary btn-lg"
            >
              {{ primaryCta }} <span class="arrow">→</span>
            </component>
            <component
              :is="secondaryHref ? 'a' : 'button'"
              :href="secondaryHref || undefined"
              :type="secondaryHref ? undefined : 'button'"
              class="btn btn-outline btn-lg"
            >
              {{ secondaryCta }}
            </component>
          </div>
          <div class="btn-microcopy">SEM COMPROMISSO · RESPOSTA EM ATÉ 24H</div>

          <div v-if="stats && stats.length > 0" class="hero-stats">
            <div v-for="(s, i) in stats" :key="i">
              <div class="hero-stat-num">
                <AnimatedNumber
                  :value="s.value"
                  :suffix="s.suffix || ''"
                  :prefix="s.prefix || ''"
                  :decimals="s.decimals || 0"
                />
                <span v-if="s.unit" class="unit">{{ s.unit }}</span>
              </div>
              <div class="hero-stat-lbl">{{ s.label }}</div>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal in">
          <img :src="imageUrl" :alt="imageAlt" loading="eager" decoding="async" fetchpriority="high" />
          <div v-if="floatingNum" class="hero-floating">
            <div class="hero-floating-num">{{ floatingNum }}</div>
            <div class="hero-floating-lbl">{{ floatingLbl }}</div>
          </div>
          <div class="hero-visual-id">
            <span class="tick"></span>
            {{ code }} · ATIVO
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  code: string
  eyebrow: string
  headlineHtml: string
  sub: string
  primaryCta?: string
  secondaryCta?: string
  primaryHref?: string
  secondaryHref?: string
  stats?: Array<{ value: number; prefix?: string; suffix?: string; unit?: string; label: string; decimals?: number }>
  imageUrl: string
  imageAlt?: string
  floatingNum?: string
  floatingLbl?: string
  rev?: string
}>(), {
  primaryCta: 'Solicitar Diagnóstico Gratuito',
  secondaryCta: 'Ver Como Funciona na Prática',
  stats: () => [],
  imageAlt: '',
  rev: 'REV.008 / 2026',
})
</script>
