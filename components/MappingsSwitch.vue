<template>
  <ClientOnly>
    <button :title="getTitle()" @click="handleClick">
      <span class="label">Mappings</span>
      <span class="mappings">{{ getMappings() }}</span>
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'
import { Mappings } from '../utils/mapper'
import { LocalStorage, store, fetch } from '../utils/localStorage'
import useMappings from '../composables/useMappings'

const { route } = useRouter()
const { setMappings, getMappings } = useMappings()

onMounted(() => {
  const mappingsQuery = new URLSearchParams(window.location.search).get('mappings')
  const mappingsStore = fetch(LocalStorage.MAPPINGS)

  if (mappingsQuery && mappingsQuery !== mappingsStore) {
    store(LocalStorage.MAPPINGS, mappingsQuery)
  }

  setMappings(mappingsQuery || mappingsStore)
})

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

  const mappings = searchParams.get(key)
  setMappings(mappings)
  store(LocalStorage.MAPPINGS, mappings)
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

.label {
  display: none;
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.mappings {
  text-transform: capitalize;
  font-family: inherit;
  font-weight: 600;
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

  .label {
    display: inline;
  }
}
</style>
