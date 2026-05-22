<template>
  <div class="section-head">
    <div class="reveal">
      <div class="section-eyebrow">
        <span class="num mono">{{ num }}</span>
        <span>{{ eyebrow }}</span>
        <span class="line"></span>
      </div>
      <h2 class="h-section section-title" v-html="title"></h2>
    </div>
    <p class="section-lede reveal reveal-delay-2" v-html="lede"></p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  num: string
  eyebrow: string
  title: string
  lede: string
}>()
</script>
