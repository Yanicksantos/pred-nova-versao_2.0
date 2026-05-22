<template>
  <span ref="el">{{ prefix }}{{ display }}{{ suffix }}</span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}>(), {
  duration: 1400,
  prefix: '',
  suffix: '',
  decimals: 0,
})

const el = ref<HTMLElement | null>(null)
const current = ref(props.value)
const started = ref(false)

const display = computed(() => {
  if (props.decimals === 0) {
    return Math.round(current.value).toLocaleString('pt-BR')
  }
  return current.value.toFixed(props.decimals)
})

onMounted(() => {
  const node = el.value
  if (!node) return

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const rect = node.getBoundingClientRect()

  if (rect.top < viewportHeight && rect.bottom > 0) {
    started.value = true
    return
  }

  current.value = 0

  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !started.value) {
        started.value = true
        const start = performance.now()
        const v = parseFloat(String(props.value))
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / props.duration)
          const eased = 1 - Math.pow(1 - p, 3)
          current.value = v * eased
          if (p < 1) requestAnimationFrame(step)
          else current.value = v
        }
        requestAnimationFrame(step)
      }
    },
    { threshold: 0.4 }
  )
  io.observe(node)
  onUnmounted(() => io.disconnect())
})
</script>
