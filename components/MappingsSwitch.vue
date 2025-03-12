<template>
  <ClientOnly>
    <button :title="getTitle()" @click="handleClick">
      <span class="mappings">{{ getMappings() }}</span>
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress'
import useMappings from '../composables/useMappings'
import { Mappings } from '../utils/mapper'

const { route } = useRouter()
const { setMappings, getMappings } = useMappings()

if (typeof window !== 'undefined') {
  setMappings(new URLSearchParams(window.location.search).get('mappings'))
}

const getTitle = () => {
  const toMappings = getMappings() === Mappings.YARN ? Mappings.MOJANG : Mappings.YARN

  return `Switch to ${toMappings} mappings`
}

const handleClick = (): void => {
  if (typeof window === 'undefined') return

  const key = 'mappings'
  const searchParams = new URLSearchParams(window.location.search)

  if (getMappings() === Mappings.MOJANG) {
    searchParams.set(key, Mappings.YARN)
  } else if (getMappings() === Mappings.YARN) {
    searchParams.set(key, Mappings.MOJANG)
  }
  if (!searchParams.get(key)) return

  const search = searchParams.toString()
  const hash = window.location.href.split('#')[1] || ''
  const path = hash ? `${route.path}?${search}#${hash}` : `${route.path}?${search}`

  history.replaceState(null, '', path)
  setMappings(searchParams.get(key))
}
</script>

<style scoped>
button {
  width: 72px;
  height: 22px;
  border-radius: 20px;
  border-color: var(--vp-button-alt-border);

  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
  align-self: center;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s, opacity 0.25s, filter 0.25s;

  &:enabled:hover {
    border-color: var(--vp-button-alt-hover-border);
    color: var(--vp-button-alt-hover-text);
    background-color: var(--vp-button-alt-hover-bg);
    color: var(--vp-c-brand-1);
  }

  &:disabled {
    opacity: 0.5;
    filter: contrast(0.5);
  }
}

.mappings {
  text-transform: capitalize;
  font-family: inherit;
  font-weight: 600;
}
</style>
