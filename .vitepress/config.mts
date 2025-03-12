import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { resourcePack, javaApi } from './sidebar'
import { Mappings, mapYarn, yarnToMojang } from '../utils/mapper'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: 'Minecraft Cursor',
  description: 'Developer wiki for Minecraft Cursor',
  base: '/minecraft-cursor-wiki',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resource Pack', link: '/resource-pack/getting-started' },
      { text: 'Java API', link: '/java-api/introduction' },
      { component: 'MappingsSwitch', activeMatch: '/java-api/' }
    ],
    search: {
      provider: 'local',
      options: {
        async _render(src, env, md) {
          let html = md.render(src, env)

          html = html.replace(/\{\{([^}]+)\}\}/g, (_, match) => {
            const templateVariable = match.trim()
            let parsedVariable = templateVariable

            if (parsedVariable in yarnToMojang) {
              parsedVariable += '/' + mapYarn(Mappings.MOJANG, parsedVariable)
            }

            return parsedVariable
          })

          return html
        }
      }
    },
    sidebar: [resourcePack, javaApi],
    outline: { level: [2, 3] },
    socialLinks: [{ icon: 'github', link: 'https://github.com/fishstiz/minecraft-cursor' }],
    footer: {
      message: 'Released under the CC0-1.0 License.',
      copyright: 'Copyright © 2025-present fishstiz'
    }
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          java: 'vscode-icons:file-type-java',
          gradle: 'vscode-icons:file-type-gradle',
          mcmeta: 'vscode-icons:file-type-json'
        }
      })
    ]
  }
})
