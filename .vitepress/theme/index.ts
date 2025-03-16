// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { LiteTree } from '@lite-tree/vue'
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import 'virtual:group-icons.css'
import './style.css'
import './lite-tree.css'

import MappingsSwitch from '../../components/MappingsSwitch.vue'
import useMappings from '../../composables/useMappings'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    vitepressNprogress(ctx)
    const { app, router } = ctx;

    app.component('MappingsSwitch', MappingsSwitch)
    app.component('LiteTree', LiteTree)

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
