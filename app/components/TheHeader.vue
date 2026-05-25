<template>
  <header class="site-header">
    <div class="wrap header-wrap">
      <NuxtLink to="/" class="site-logo" aria-label="Pred Engenharia - início">
        <img class="site-logo-img" src="/logop.png" alt="Pred Engenharia" />
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
        <div
          class="portal-dropdown"
          :class="{ open: portalOpen }"
          @mouseenter="portalOpen = true"
          @mouseleave="portalOpen = false"
          @focusout="closePortalOnFocusout"
        >
          <button
            type="button"
            class="portal-trigger"
            aria-label="Acessos internos"
            aria-haspopup="true"
            :aria-expanded="portalOpen"
            @click="portalOpen = !portalOpen"
          >
            <span class="portal-user-icon" aria-hidden="true"></span>
          </button>

          <div v-show="portalOpen" class="portal-menu">
            <a
              v-for="item in PORTAL_NAV"
              :key="item.href"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="portal-menu-item"
            >
              <span>{{ item.label }}</span>
              <span :class="`portal-item-icon ${item.icon}`" aria-hidden="true"></span>
            </a>
          </div>
        </div>

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
          class="btn btn-primary mobile-contact"
          @click="mobileMenuOpen = false"
        >
          Falar com Especialista <span class="arrow">→</span>
        </a>

        <div class="mobile-nav-group mobile-portal-group">
          <div class="mobile-nav-label">Acessos</div>
          <a
            v-for="item in PORTAL_NAV"
            :key="item.href"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="mobile-nav-subitem"
            @click="mobileMenuOpen = false"
          >
            <span>{{ item.label }}</span>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileMenuOpen = ref(false)
const servicesOpen = ref(false)
const portalOpen = ref(false)

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
  },
]

const SECONDARY_NAV = [
  { label: 'Metodologia MCI®', to: '/mci' },
  { label: 'Blog', to: '/blog' },
  { label: 'Carreiras', to: '/trabalhe-conosco' },
]

const PORTAL_NAV = [
  { label: 'Intranet', href: 'http://www.pred.com.br/sgv/login/index.asp', icon: 'intranet' },
  { label: 'Sala Vip', href: 'http://www.pred.com.br/salavip/manutencao/default.asp', icon: 'vip' },
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

function closePortalOnFocusout(event: FocusEvent) {
  const currentTarget = event.currentTarget as HTMLElement
  const nextTarget = event.relatedTarget as Node | null

  if (!nextTarget || !currentTarget.contains(nextTarget)) {
    portalOpen.value = false
  }
}

watch(() => route.path, () => {
  mobileMenuOpen.value = false
  servicesOpen.value = false
  portalOpen.value = false
})
</script>

<style scoped>
.site-header {
  background: rgba(255,255,255,0.96);
  border-bottom: 1px solid var(--paper-line);
  color: var(--ink-800);
  box-shadow: 0 10px 30px -28px rgba(10,22,40,0.45);
}

.header-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  min-width: 0;
}

.site-logo {
  width: clamp(128px, 12vw, 158px);
  height: var(--header-h);
  margin-right: auto;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.site-logo-img {
  width: 100%;
  height: auto;
  max-height: 42px;
  object-fit: contain;
  object-position: left center;
  filter: drop-shadow(0 8px 18px rgba(10,22,40,0.12));
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0;
  margin-left: 0;
  min-width: 0;
  flex: 0 1 auto;
}

.site-nav > * + * {
  margin-left: clamp(20px, 2.1vw, 34px);
}

.site-nav a,
.nav-dropdown-trigger {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  color: var(--ink-500);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  transition: color 0.18s ease;
}

.site-nav a:hover,
.site-nav a.active,
.nav-dropdown-trigger:hover,
.nav-dropdown-trigger.active,
.nav-dropdown.open .nav-dropdown-trigger {
  color: var(--ink-800);
}

.site-nav a.active::after,
.nav-dropdown-trigger.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3px;
  height: 2px;
  background: var(--red);
}

.nav-dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.nav-dropdown-trigger {
  justify-content: center;
  gap: 6px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-family: inherit;
}

.nav-chevron {
  font-size: 13px;
  line-height: 1;
  color: var(--red);
  transform: translateY(-1px);
  transition: transform 0.18s ease;
}

.nav-dropdown.open .nav-chevron {
  transform: translateY(-1px) rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 15px);
  left: 50%;
  width: min(340px, calc(100vw - 32px));
  transform: translateX(-50%);
  background: rgba(255,255,255,0.98);
  border: 1px solid var(--paper-line);
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0 24px 60px rgba(10,22,40,0.14);
  z-index: 140;
}

.nav-dropdown-menu::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -16px;
  height: 16px;
}

.nav-dropdown-menu a {
  display: block;
  min-height: 0;
  padding: 13px 14px;
  border-radius: 4px;
  color: var(--ink-500);
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease;
}

.nav-dropdown-menu a:hover,
.nav-dropdown-menu a.active {
  background: rgba(10,22,40,0.045);
  color: var(--ink-800);
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
  margin-top: 5px;
  color: var(--ink-300);
  font-size: 12px;
  line-height: 1.45;
}

.header-right {
  margin-left: clamp(30px, 3.2vw, 52px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0;
  flex: 0 0 auto;
}

.header-right > * + * {
  margin-left: 18px;
}

.portal-dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.portal-trigger {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  padding: 0;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.18s ease;
}

.portal-trigger:hover,
.portal-dropdown.open .portal-trigger {
  background: rgba(10,22,40,0.045);
}

.portal-user-icon {
  position: relative;
  width: 23px;
  height: 24px;
  display: block;
}

.portal-user-icon::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 50%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--ink-800);
  transform: translateX(-50%);
}

.portal-user-icon::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  border-radius: 10px 10px 2px 2px;
  background: var(--ink-800);
}

.portal-menu {
  position: absolute;
  top: calc(100% + 13px);
  right: 0;
  width: 164px;
  padding: 10px;
  background: rgba(255,255,255,0.98);
  border: 1px solid var(--paper-line);
  border-radius: 6px;
  box-shadow: 0 20px 52px rgba(10,22,40,0.18);
  z-index: 145;
}

.portal-menu::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -14px;
  height: 14px;
}

.portal-menu-item {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 12px;
  border-radius: 4px;
  background: var(--paper-2);
  color: var(--ink-700);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease;
}

.portal-menu-item + .portal-menu-item {
  margin-top: 8px;
}

.portal-menu-item:hover {
  background: rgba(10,22,40,0.09);
  color: var(--ink-800);
}

.portal-item-icon {
  position: relative;
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  color: var(--ink-300);
}

.portal-item-icon.intranet::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 1px;
  width: 8px;
  height: 8px;
  border: 1.8px solid currentColor;
  border-radius: 50%;
}

.portal-item-icon.intranet::after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  bottom: 1px;
  height: 8px;
  border: 1.8px solid currentColor;
  border-radius: 8px 8px 3px 3px;
}

.portal-item-icon.vip::before {
  content: "";
  position: absolute;
  left: 1px;
  top: 3px;
  width: 8px;
  height: 8px;
  border: 1.8px solid currentColor;
  border-radius: 50%;
}

.portal-item-icon.vip::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 2px;
  width: 9px;
  height: 9px;
  border: 1.8px solid currentColor;
  border-radius: 50%;
  box-shadow: -4px -4px 0 -3px currentColor;
}

.lang-pills {
  color: var(--ink-300);
}

.lang-pills span:first-child {
  color: var(--ink-800);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--ink-800);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.hamburger.open span:nth-child(1) { transform: translateY(10px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-10px) rotate(-45deg); }

.mobile-overlay {
  position: fixed;
  inset: var(--header-h) 0 0 0;
  background: rgba(10, 22, 40, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 99;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
}

.mobile-nav {
  width: min(100%, 460px);
  min-height: min(90vh, calc(100dvh - var(--header-h)));
  max-height: calc(100dvh - var(--header-h));
  overflow-y: auto;
  background: #fff;
  border-left: 1px solid var(--paper-line);
  padding: 26px 28px 32px;
  display: flex;
  flex-direction: column;
  box-shadow: -24px 0 60px rgba(10,22,40,0.16);
}

.mobile-nav a {
  display: block;
  padding: 16px 0;
  border-bottom: 1px solid var(--paper-line);
  color: var(--ink-700);
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.18s ease;
}

.mobile-nav a:hover,
.mobile-nav a.active {
  color: var(--red);
}

.mobile-nav-group {
  padding: 22px 0;
  border-bottom: 1px solid var(--paper-line);
}

.mobile-nav-label {
  margin-bottom: 10px;
  color: var(--red);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.mobile-nav a.mobile-nav-subitem {
  border: 1px solid var(--paper-line);
  border-radius: 6px;
  padding: 15px 16px;
  margin-top: 10px;
  background: var(--paper);
  font-size: 15px;
}

.mobile-nav-subitem small {
  display: block;
  margin-top: 5px;
  color: var(--ink-300);
  font-size: 12px;
  line-height: 1.4;
}

.mobile-contact {
  width: 100%;
  justify-content: center;
  margin-top: auto;
  min-height: 50px;
}

.mobile-portal-group {
  padding-top: 18px;
  margin-top: 18px;
}

.mobile-portal-group .mobile-nav-subitem {
  display: block;
}

@media (max-width: 1260px) {
  .site-nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}

@media (max-width: 760px) {
  .header-right .lang-pills {
    display: none;
  }
}

@media (max-width: 620px) {
  .header-right > .btn {
    display: none;
  }

  .site-logo {
    width: 132px;
  }

  .header-right {
    margin-left: 18px;
  }
}

@media (max-width: 520px) {
  .mobile-overlay {
    justify-content: flex-start;
  }

  .mobile-nav {
    width: 100%;
    min-height: calc(100dvh - var(--header-h));
    border-left: 0;
  }
}

@media (max-width: 380px) {
  .site-logo {
    width: 118px;
  }

  .mobile-nav {
    padding-inline: 20px;
  }
}
</style>
