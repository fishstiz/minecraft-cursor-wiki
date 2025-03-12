// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './style.css'

import MappingsSwitch from '../../components/MappingsSwitch.vue'
import useMappings from '../../composables/useMappings'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('MappingsSwitch', MappingsSwitch)

    router.onBeforeRouteChange = (to: String) => {
      if (typeof window === 'undefined') return

      const search = window.location.search
      const searchParams = new URLSearchParams(search)

      if (searchParams.size === 0 || to.includes('?')) return true

      const [path, hash] = to.split('#')
      const newPath = hash ? `${path}${search}#${hash}` : `${path}${search}`
      router.go(newPath)

      const mappings = searchParams.get('mappings')
      if (mappings) useMappings().setMappings(mappings)

      return false
    }
  }
} satisfies Theme
