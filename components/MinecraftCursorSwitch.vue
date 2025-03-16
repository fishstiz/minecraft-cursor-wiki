<template>
  <button @click="handleClick">
    <span class="label">Minecraft Cursor</span>
    <img :class="{ disabled: !minecraftCursor }" src="/assets/cursors/default.png" width="22" />
  </button>
</template>

<script setup lang="ts">
import { LocalStorage, store, fetch } from '../utils/localStorage'
import { onMounted, ref } from 'vue'

const minecraftCursor = ref(false)

const updateClass = () => {
  if (minecraftCursor.value) {
    document.body.classList.add('minecraft-cursor')
  } else {
    document.body.classList.remove('minecraft-cursor')
  }
}

onMounted(() => {
  minecraftCursor.value = fetch(LocalStorage.CURSOR)
  updateClass()
})

const handleClick = () => {
  minecraftCursor.value = !minecraftCursor.value
  store(LocalStorage.CURSOR, minecraftCursor.value)
  updateClass()
}
</script>

<style scoped>
button {
  padding: 0 12px;
  align-self: center;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

.label {
  display: none;
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

img {
  transition: 0.25s opacity;

  &.disabled {
    opacity: 0.25;
  }
}

.VPNavScreenMenu button {
  margin-top: 24px;
  padding: 12px 14px 12px 16px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &:enabled:hover {
    border-color: var(--vp-button-alt-hover-border);
    color: var(--vp-button-alt-hover-text);
    background-color: var(--vp-button-alt-hover-bg);
    color: var(--vp-c-brand-1);
  }

  .label {
    display: inline;
  }
}
</style>
