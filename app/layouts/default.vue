<template>
  <div>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
    <ClientOnly>
      <AccessibilityTools />
    </ClientOnly>
  </div>
</template>
