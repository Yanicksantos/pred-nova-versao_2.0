<template>
  <header class="site-header">
    <div class="wrap">
      <NuxtLink to="/" class="site-logo">
        <img src="/logop.png" alt="Pred Engenharia"  style="width: 150px; height: auto; "/>
      </NuxtLink>

      <nav class="site-nav" aria-label="Navegação principal">
        <NuxtLink
          v-for="item in PRIMARY_NAV"
          :key="item.to"
          :to="item.to"
          :class="{ active: isActive(item.to) }"
        >
          {{ item.label }}
        </NuxtLink>

        <div
          class="nav-dropdown"
          :class="{ open: servicesOpen }"
          @mouseenter="servicesOpen = true"
          @mouseleave="servicesOpen = false"
          @focusout="closeServicesOnFocusout"
        >
     
            <button
            type="button"
            class="nav-dropdown-trigger"
            :class="{ active: isServicesActive }"
            aria-haspopup="true"
            :aria-expanded="servicesOpen"
            @click="servicesOpen = !servicesOpen"
          >
            Serviços
            
          </button>
         
          

          <div v-show="servicesOpen" class="nav-dropdown-menu">
            <NuxtLink
              v-for="item in SERVICE_NAV"
              :key="item.to"
              :to="item.to"
              :class="{ active: isActive(item.to) }"
              @click="servicesOpen = false"
            >
              <span class="nav-dropdown-title">{{ item.label }}</span>
              <span class="nav-dropdown-copy">{{ item.copy }}</span>
            </NuxtLink>
          </div>
        </div>

        <NuxtLink
          v-for="item in SECONDARY_NAV"
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
        <a href="#contact" class="btn btn-primary btn-sm">
          Falar com Especialista <span class="arrow">→</span>
        </a>
        <button
          class="hamburger"
          :class="{ open: mobileMenuOpen }"
          aria-label="Menu"
          :aria-expanded="mobileMenuOpen"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="mobile-overlay" @click="mobileMenuOpen = false">
      <nav class="mobile-nav" aria-label="Navegação mobile" @click.stop>
        <NuxtLink
          v-for="item in PRIMARY_NAV"
          :key="item.to"
          :to="item.to"
          :class="{ active: isActive(item.to) }"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>

        <div class="mobile-nav-group">
          <div class="mobile-nav-label">Serviços</div>
          <NuxtLink
            v-for="item in SERVICE_NAV"
            :key="item.to"
            :to="item.to"
            class="mobile-nav-subitem"
            :class="{ active: isActive(item.to) }"
            @click="mobileMenuOpen = false"
          >
            <span>{{ item.label }}</span>
            <small>{{ item.copy }}</small>
          </NuxtLink>
        </div>

        <NuxtLink
          v-for="item in SECONDARY_NAV"
          :key="item.to"
          :to="item.to"
          :class="{ active: isActive(item.to) }"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>

        <a
          href="#contact"
          class="btn btn-primary"
          style="margin-top:16px;width:100%;justify-content:center"
          @click="mobileMenuOpen = false"
        >
          Falar com Especialista <span class="arrow">→</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileMenuOpen = ref(false)
const servicesOpen = ref(false)

const PRIMARY_NAV = [
  { label: 'Institucional', to: '/institucional' },
]

const SERVICE_NAV = [
  {
    label: 'Engenharia',
    to: '/servicos/engenharia-manutencao-e-confiabilidade',
    copy: 'Manutenção, confiabilidade e gestão de ativos',
  },
  {
    label: 'Serviços Técnicos',
    to: '/servicos/inspecoes',
    copy: 'Inspeções, PCM e diagnóstico em campo',
  },
  {
    label: 'Apps Técnicos',
    to: '/servicos/s3i',
    copy: 'S2i, Perigômetro e integração digital',
  }
]

const SECONDARY_NAV = [
  { label: 'Metodologia MCI®', to: '/mci' },
  { label: 'Blog', to: '/blog' },
  { label: 'Carreiras', to: '/trabalhe-conosco' },
]

const isServicesActive = computed(() => SERVICE_NAV.some((item) => isActive(item.to)))

function isActive(to: string) {
  return route.path === to || route.path.startsWith(to + '/')
}

function closeServicesOnFocusout(event: FocusEvent) {
  const currentTarget = event.currentTarget as HTMLElement
  const nextTarget = event.relatedTarget as Node | null

  if (!nextTarget || !currentTarget.contains(nextTarget)) {
    servicesOpen.value = false
  }
}

watch(() => route.path, () => {
  mobileMenuOpen.value = false
  servicesOpen.value = false
})
</script>

<style scoped>
.nav-dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.nav-dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
 
  background: transparent;
  border: 0;
  color: rgba(255,255,255,0.78);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.18s ease;
}

.nav-dropdown-trigger:hover,
.nav-dropdown-trigger.active,
.nav-dropdown.open .nav-dropdown-trigger {
  color: #fff;
}

.nav-dropdown-trigger.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: var(--red);
}

.nav-chevron {
  font-size: 12px;
  line-height: 1;
  transform: translateY(-1px);
  transition: transform 0.18s ease;
}

.nav-dropdown.open .nav-chevron {
  transform: translateY(-1px) rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 18px);
  left: 50%;
  width: 330px;
  transform: translateX(-50%);
  background: rgba(10, 22, 40, 0.98);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.32);
  z-index: 140;
}

.nav-dropdown-menu::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -18px;
  height: 18px;
}

.nav-dropdown-menu a {
  display: block;
  padding: 13px 14px;
  border-radius: 4px;
  color: rgba(255,255,255,0.78);
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease;
}

.nav-dropdown-menu a:hover,
.nav-dropdown-menu a.active {
  background: rgba(255,255,255,0.07);
  color: #fff;
}

.nav-dropdown-menu a.active::after {
  display: none;
}

.nav-dropdown-title {
  display: block;
  font-size: 14px;
  font-weight: 600;
}

.nav-dropdown-copy {
  display: block;
  margin-top: 4px;
  color: rgba(255,255,255,0.52);
  font-size: 12px;
  line-height: 1.45;
}

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

@media (max-width: 980px) {
  .site-nav {
    gap: 20px;
  }
}

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
  max-height: calc(100vh - var(--header-h));
  overflow-y: auto;
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
.mobile-nav a.active {
  color: var(--cyan);
}

.mobile-nav-group {
  padding: 12px 0 14px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

.mobile-nav-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--cyan);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.mobile-nav a.mobile-nav-subitem {
  border-bottom: 0;
  padding: 10px 0 10px 16px;
  font-size: 15px;
}

.mobile-nav-subitem small {
  display: block;
  margin-top: 3px;
  color: rgba(255,255,255,0.48);
  font-size: 12px;
  line-height: 1.35;
}
</style>
