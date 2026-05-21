<template>
  <div>
    <PredTheHeader />
    <main>
      <slot />
    </main>
    <PredTheFooter />
    <ClientOnly>
      <PredAccessibilityTools />
    </ClientOnly>
  </div>
</template>
