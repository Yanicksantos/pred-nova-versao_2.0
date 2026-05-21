<template>
  <v-app class="pred-app">
    <PredTheHeader />
    <main>
      <slot />
    </main>
    <PredTheFooter />
    <ClientOnly>
      <PredAccessibilityTools />
    </ClientOnly>
  </v-app>
</template>
