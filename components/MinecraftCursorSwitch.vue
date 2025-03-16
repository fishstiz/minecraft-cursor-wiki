<template>
  <button @click="toggle">
    <img :class="{ disabled: !minecraftCursor }" src="/assets/cursors/default.png" width="22" />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const minecraftCursor = ref(false)

const toggle = () => {
  minecraftCursor.value = !minecraftCursor.value
  minecraftCursor.value
    ? document.body.classList.add('minecraft-cursor')
    : document.body.classList.remove('minecraft-cursor')
}
</script>

<style scoped>
button {
  padding: 0 12px;
  align-self: center;
}

img {
  transition: 0.25s opacity;

  &.disabled {
    opacity: 0.25;
  }
}

button:hover img {
  opacity: 0.5;
}

@media (max-width: 800px) {
  button {
    display: none;
  }
}
</style>
