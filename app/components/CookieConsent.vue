<template>
  <div v-if="visible" class="cookie-consent" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
    <div class="cookie-icon" aria-hidden="true">i</div>

    <div class="cookie-body">
      <p>
        Nosso site apenas utiliza os cookies estritamente necessários para garantir sua funcionalidade, para saber mais,
        acesse nossa política de privacidade.
      </p>
      <div class="cookie-links">
        <NuxtLink to="/privacidade">Política de Privacidade</NuxtLink>
        <NuxtLink to="/privacidade#cookies">Política de Cookies</NuxtLink>
      </div>
    </div>

    <button type="button" class="cookie-action" @click="acceptCookies">
      Prosseguir
    </button>
  </div>
</template>

<script setup lang="ts">
const visible = ref(false)
const storageKey = 'pred-lgpd-cookie-consent'

onMounted(() => {
  visible.value = localStorage.getItem(storageKey) !== 'accepted'
})

function acceptCookies() {
  localStorage.setItem(storageKey, 'accepted')
  visible.value = false
}
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 220;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 20px;
  align-items: center;
  padding: 18px clamp(20px, 4vw, 56px);
  background: rgba(246,247,249,0.98);
  border-top: 1px solid var(--paper-line-strong);
  box-shadow: 0 -18px 44px rgba(10,22,40,0.1);
  color: var(--ink-800);
}

.cookie-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--ink-950);
  color: #fff;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
}

.cookie-body p {
  margin: 0;
  color: var(--ink-300);
  font-size: clamp(15px, 1.4vw, 20px);
  line-height: 1.45;
}

.cookie-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.cookie-links a {
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 4px;
  background: rgba(20,25,75,0.08);
  color: var(--ink-950);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.cookie-action {
  min-height: 44px;
  padding: 0 24px;
  border: 1px solid var(--ink-950);
  border-radius: 4px;
  background: #fff;
  color: var(--ink-950);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.cookie-action:hover {
  background: var(--ink-950);
  color: #fff;
}

@media (max-width: 760px) {
  .cookie-consent {
    grid-template-columns: auto 1fr;
    align-items: start;
  }

  .cookie-action {
    grid-column: 2;
    width: 100%;
  }
}

@media (max-width: 520px) {
  .cookie-consent {
    grid-template-columns: 1fr;
  }

  .cookie-icon {
    display: none;
  }

  .cookie-action {
    grid-column: auto;
  }
}
</style>
