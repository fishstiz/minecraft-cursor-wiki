import { DefaultTheme } from 'vitepress'

const resourcePackDir = 'resource-pack'
const javaApiDir = 'java-api'

export const resourcePack: DefaultTheme.SidebarItem = {
  text: 'Resource Pack',
  items: [
    {
      text: 'Getting Started',
      link: `/${resourcePackDir}/getting-started`,
      items: [
        {
          text: 'File Structure',
          link: `/${resourcePackDir}/getting-started#file-structure`
        },
        {
          text: 'All Cursors',
          link: `/${resourcePackDir}/getting-started#all-cursors`
        }
      ]
    },
    {
      text: 'Creating Cursor Textures',
      link: `/${resourcePackDir}/creating-cursor-textures`,
      items: [
        {
          text: 'Animated Textures',
          link: `/${resourcePackDir}/creating-cursor-textures#animated-textures`
        }
      ]
    },
    { text: 'Custom Settings', link: `/${resourcePackDir}/custom-settings` }
  ]
}

export const javaApi: DefaultTheme.SidebarItem = {
  text: 'Java API',
  items: [
    { text: 'Introduction', link: `/${javaApiDir}/introduction` },
    { text: 'Setup', link: `/${javaApiDir}/setup` },
    {
      text: 'Creating Cursors',
      link: `/${javaApiDir}/creating-cursors`
    },
    {
      text: 'Initialization',
      link: `/${javaApiDir}/initialization`,
      items: [
        {
          text: 'Registering Cursors',
          link: `/${javaApiDir}/initialization#registering-cursors`
        },
        {
          text: 'Registering Elements',
          link: `/${javaApiDir}/initialization#registering-elements`
        }
      ]
    },
    {
      text: 'Providing the Cursor from the Element',
      link: `/${javaApiDir}/providing-the-cursor-from-the-element`
    },
    {
      text: 'Directly Controlling the Cursor',
      link: `/${javaApiDir}/directly-controlling-the-cursor`
    }
  ]
}
