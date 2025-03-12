import { computed, ComputedRef, ref } from 'vue'
import { isValidMappings, Mappings, mapYarn, yarnToMojang } from '../utils/mapper'

const _mappings = ref<Mappings>(Mappings.YARN)

const setMappings = (mappings: Mappings | string) => {
  if (!mappings || _mappings.value === mappings) return

  if (!isValidMappings(mappings)) {
    console.error('Invalid Mappings: ' + mappings)
    return
  }

  _mappings.value = mappings as Mappings
}

const mappedComputed = {} as Record<keyof typeof yarnToMojang, ComputedRef<string>>
Object.keys(yarnToMojang).forEach((key) => {
  mappedComputed[key] = computed(() => mapYarn(_mappings.value, key))
})

export default () => ({
  getMappings: () => _mappings.value,
  setMappings,
  ...mappedComputed
})
