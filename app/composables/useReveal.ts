export function useReveal() {
  onMounted(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.in)'))
    if (!els.length) return

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight

    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
        el.classList.add('in')
      }
    })

    document.documentElement.classList.add('reveal-ready')

    const pendingEls = els.filter((el) => !el.classList.contains('in'))
    if (!pendingEls.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    pendingEls.forEach((el) => io.observe(el))
    onUnmounted(() => io.disconnect())
  })
}
