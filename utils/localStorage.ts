export enum LocalStorage {
  MAPPINGS = 'mappings',
  CURSOR = 'minecraft-cursor'
}

type LocalStorageTypes = {
  [LocalStorage.MAPPINGS]: string
  [LocalStorage.CURSOR]: boolean
}

export const store = <K extends LocalStorage>(key: K, value: LocalStorageTypes[K]) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const fetch = <K extends LocalStorage>(key: K): LocalStorageTypes[K] | null => {
  const item = localStorage.getItem(key)
  
  try {
    return JSON.parse(item)
  } catch (error) {
    return item as LocalStorageTypes[K]
  }
}
