<template>
  <section class="s paper2">
    <div class="wrap">
      <PredSectionHead
        num="05"
        eyebrow="Prova Social"
        title="Indústrias que transformaram sua manutenção"
        lede="Clientes que adotaram nosso método relatam ganhos mensuráveis em disponibilidade, custo e segurança operacional."
      />
      <div
        :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }"
        class="testimonials-grid"
      >
        <div
          v-for="(t, i) in items"
          :key="i"
          :class="`card reveal reveal-delay-${(i % 3) + 1}`"
        >
          <div class="card-num">DEPOIMENTO · {{ String(i + 1).padStart(2, '0') }}</div>
          <div
            class="h-section"
            :style="{ fontSize: '22px', color: 'var(--red)', marginBottom: '16px' }"
          >
            {{ t.metric }}
          </div>
          <p :style="{ fontSize: '15px', lineHeight: '1.6', color: 'var(--ink-700)', margin: '0 0 24px' }">
            "{{ t.quote }}"
          </p>
          <div
            :style="{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid var(--paper-line)',
            }"
          >
            <div
              :style="{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--ink-800)',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: '16px',
              }"
            >
              {{ t.initials }}
            </div>
            <div>
              <div :style="{ fontWeight: '600', fontSize: '14px' }">{{ t.name }}</div>
              <div
                class="mono"
                :style="{
                  fontSize: '11px',
                  color: 'var(--ink-300)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }"
              >
                {{ t.role }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    metric: string
    quote: string
    initials: string
    name: string
    role: string
  }>
}>()
</script>

<style scoped>
@media (max-width: 920px) {
  .testimonials-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
