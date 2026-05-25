<template>
  <div>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
    <ClientOnly>
      <AccessibilityTools />
      <CookieConsent />
    </ClientOnly>
  </div>
</template>
