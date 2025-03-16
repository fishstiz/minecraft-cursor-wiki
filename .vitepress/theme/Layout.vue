<template>
  <DefaultTheme.Layout />
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted } from 'vue'
import { base } from '../../utils/base'

const arrow = `url(${base('/assets/cursors/default24.png')}) 7 3, default`
const pointer = `url(${base('/assets/cursors/pointer24.png')}) 7 3, pointer`
const text = `url(${base('/assets/cursors/text24.png')}) 8 11, text`

const point = { x: 0, y: 0 }
let previousElement: HTMLElement | null = null
let unmounted = false

const isPointOverText = () => {
  const { x, y } = point
  const element = document.elementFromPoint(x, y)
  if (!element) return false

  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const range = document.createRange()
      range.selectNode(node)
      const rects = range.getClientRects()

      for (const rect of rects) {
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          return true
        }
      }
    }
  }
  return false
}

const setCursor = () => {
  if (unmounted) return

  const element = document.elementFromPoint(point.x, point.y)
  if (!(element instanceof HTMLElement) || !document.body.classList.contains('minecraft-cursor')) {
    requestAnimationFrame(setCursor)
    return
  }

  if (previousElement && element !== previousElement && previousElement.dataset.isText === 'true') {
    previousElement.style.cursor = ''
    previousElement.dataset.isText = ''
    previousElement = null
  }

  const { cursor, userSelect } = getComputedStyle(element)
  const isText = cursor.includes('default') && isPointOverText()
  if (userSelect !== 'none' && (cursor === 'text' || isText)) {
    element.style.cursor = text
    element.dataset.isText = isText.toString()
    previousElement = element
  } else if (element.dataset.isText === 'true' && !isPointOverText()) {
    element.style.cursor = ''
  } else if (cursor === 'pointer') {
    element.style.cursor = pointer
  } else if (cursor === 'default' || cursor === 'auto') {
    element.style.cursor = arrow
  }

  requestAnimationFrame(setCursor)
}

const handleMouseMove = (e: MouseEvent) => {
  point.x = e.clientX
  point.y = e.clientY
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  setCursor()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  unmounted = true
})
</script>
