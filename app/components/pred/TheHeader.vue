<template>
  <header class="site-header">
    <div class="wrap">
      <NuxtLink to="/" class="site-logo">
        <span class="site-logo-mark">P</span>
        <span>PRED <span :style="{ color: 'var(--cyan)' }">·</span> ENGENHARIA</span>
      </NuxtLink>

      <nav class="site-nav" :class="{ 'site-nav--hidden': mobileMenuOpen }">
        <NuxtLink
          v-for="item in NAV"
          :key="item.to"
          :to="item.to"
          :class="{ active: isActive(item.to) }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="header-right">
        <div class="lang-pills mono">
          <span>PT</span><span>·</span><span>EN</span><span>·</span><span>ES</span>
        </div>
        <button class="btn btn-primary btn-sm" style="display:none" v-if="false">
          Falar com Especialista <span class="arrow">→</span>
        </button>
        <a href="#contact" class="btn btn-primary btn-sm">
          Falar com Especialista <span class="arrow">→</span>
        </a>
        <button
          class="hamburger"
          :class="{ open: mobileMenuOpen }"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile overlay -->
    <div v-if="mobileMenuOpen" class="mobile-overlay" @click="mobileMenuOpen = false">
      <nav class="mobile-nav" @click.stop>
        <NuxtLink
          v-for="item in NAV"
          :key="item.to"
          :to="item.to"
          :class="{ active: isActive(item.to) }"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <a href="#contact" class="btn btn-primary" style="margin-top:16px;width:100%;justify-content:center" @click="mobileMenuOpen = false">
          Falar com Especialista <span class="arrow">→</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileMenuOpen = ref(false)

const NAV = [
  { label: 'Engenharia', to: '/servicos/engenharia-manutencao-e-confiabilidade' },
  { label: 'Serviços Técnicos', to: '/servicos/inspecoes' },
  { label: 'Apps', to: '/servicos/s3i' },
  { label: 'Metodologia MCI®', to: '/mci' },
  { label: 'Blog', to: '/blog' },
]

function isActive(to: string) {
  return route.path === to || route.path.startsWith(to + '/')
}

// Close menu on route change
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.hamburger span {
  display: block;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.hamburger.open span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

@media (max-width: 860px) {
  .hamburger { display: flex; }
  .site-nav { display: none; }
}

.mobile-overlay {
  position: fixed;
  inset: var(--header-h) 0 0 0;
  background: rgba(6, 15, 28, 0.85);
  backdrop-filter: blur(8px);
  z-index: 99;
  display: flex;
  flex-direction: column;
}
.mobile-nav {
  background: var(--ink-800);
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.mobile-nav a {
  text-decoration: none;
  color: rgba(255,255,255,0.85);
  font-size: 18px;
  font-weight: 500;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  display: block;
  transition: color 0.18s;
}
.mobile-nav a:hover,
.mobile-nav a.active { color: #fff; }
.mobile-nav a.active { color: var(--cyan); }
</style>
