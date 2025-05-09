---
title: Getting Started with Resource Packs
---
# Getting Started with Resource Packs
  
You may start with this resource pack template that contains the built-in textures of **Minecraft Cursor**:

[Minecraft-Cursor.v3.3.0.zip](https://github.com/user-attachments/files/18857805/Minecraft.Cursor.v3.3.0.zip)

## File Structure
**namespace**: `minecraft-cursor`
<LiteTree>
picture={{ icons.picture }}
---
assets
    minecraft-cursor                                                          
        atlases
            cursors.json&nbsp;(optional)    // Custom Settings
        textures
            cursors
              [picture]&lt;&#8203;cursor-key&#8203;&gt;.png                            // The Cursor Texture
              &lt;&#8203;cursor-key&#8203;&gt;.png.mcmeta&nbsp;(optional)  // Animation Data
pack.mcmeta
pack.png                                                                  
</LiteTree>

## All Cursors
Each cursor has an associated **key**. This is used as the file name of the texture, animation data, and the key for custom settings.

> [!NOTE]
> Mods can register new cursors using the Java API.

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Key</th>
      <th>Image</th>
      <th>When it is used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Default</td>
      <td><code>default</code></td>
      <td><img src="/assets/cursors/default.png" width="32" alt="default"/></td>
      <td>
        <ul>
          <li>The default cursor.</li>
          <li>If another cursor is disabled.</li>
        </ul>
        <p>Remaps <code>GLFW_ARROW_CURSOR</code>.</p>
      </td>
    </tr>
    <tr>
      <td>Pointer</td>
      <td><code>pointer</code></td>
      <td><img src="/assets/cursors/pointer.png" width="32" alt="pointer"/></td>
      <td>
        <span>Hovered over:</span>
        <ul>
          <li>Discoverable <code>{{ PressableWidget }}</code> elements.</li>
          <li>Inventory slots with item/s.</li>
          <li>Creative inventory tabs.</li>
          <li>Recipe book tabs and recipes.</li>
          <li>Available enchantments in the enchanting table.</li>
          <li>Available stonecutter recipes.</li>
          <li>Available loom patterns.</li>
          <li>Advancement tabs.</li>
          <li>Crafter slots.</li>
        </ul>
        <p>Remaps <code>GLFW_POINTING_HAND_CURSOR</code>.</p>
      </td>
    </tr>
    <tr>
      <td>Text</td>
      <td><code>text</code></td>
      <td><img src="/assets/cursors/text.png" width="32" alt="text"/></td>
      <td>
        <ul>
          <li>Hovered over discoverable <code>{{ TextFieldWidget }}</code> elements.</li>
          <li>Hovered inside Book and Quill book.</li>
        </ul>
        <p>Remaps <code>GLFW_IBEAM_CURSOR</code>.</p>
      </td>
    </tr>
    <tr>
      <td>Grabbing</td>
      <td><code>grabbing</code></td>
      <td><img src="/assets/cursors/grabbing.png" width="32" alt="grabbing"/></td>
      <td>
        <ul>
          <li>Grabbing items in the inventory.</li>
          <li>Dragging the slider in discoverable <code>{{ SliderWidget }}</code> elements.</li>
        </ul>
        <p>Remaps <code>GLFW_RESIZE_ALL_CURSOR</code>.</p>
      </td>
    </tr>
    <tr>
      <td>Shift</td>
      <td><code>shift</code></td>
      <td><img src="/assets/cursors/shift.png" width="32" alt="shift"/></td>
      <td>
        <span>Shift is pressed and mouse is hovered over:</span>
        <ul>
          <li>Inventory slots with item/s.</li>
          <li>Creative inventory destroy item slot.</li>
          <li>Recipe book recipes.</li>
          <li>Villager trade offers.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Busy</td>
      <td><code>busy</code></td>
      <td><img src="/assets/cursors/busy.png" width="32" alt="busy"/></td>
      <td>
        <span>In loading screens: </span>
        <ul>
          <li><code>{{ DownloadingTerrainScreen }}</code></li>
          <li><code>ProgressScreen</code></li>
          <li><code>LevelLoadingScreen</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Crosshair</td>
      <td><code>crosshair</code></td>
      <td><img src="/assets/cursors/crosshair.png" width="32" alt="crosshair"/></td>
      <td>
        <p>Only used for compatibility with other mods.</p>
        <p>Remaps <code>GLFW_CROSSHAIR_CURSOR</code>.</p>
      </td>
    </tr>
    <tr>
      <td>Resize EW</td>
      <td><code>resize_ew</code></td>
      <td><img src="/assets/cursors/resize_ew.png" width="32" alt="resize_ew"/></td>
      <td>
        <p>Only used for compatibility with other mods.</p>
        <p>Remaps <code>GLFW_RESIZE_EW_CURSOR</code>.</p>
      </td>
    </tr>
    <tr>
      <td>Resize NS</td>
      <td><code>resize_ns</code></td>
      <td><img src="/assets/cursors/resize_ns.png" width="32" alt="resize_ns"/></td>
      <td>
        <p>Only used for compatibility with other mods.</p>
        <p>Remaps <code>GLFW_RESIZE_NS_CURSOR</code>.</p>
      </td>
    </tr>
    <tr>
      <td>Resize NWSE</td>
      <td><code>resize_nwse</code></td>
      <td><img src="/assets/cursors/resize_nwse.png" width="32" alt="resize_nwse"/></td>
      <td>
        <p>Only used for compatibility with other mods.</p>
        <p>Remaps <code>GLFW_RESIZE_NWSE_CURSOR</code>.</p>
      </td>
    </tr>
    <tr>
      <td>Resize NESW</td>
      <td><code>resize_nesw</code></td>
      <td><img src="/assets/cursors/resize_nesw.png" width="32" alt="resize_nesw"/></td>
      <td>
        <p>Only used for compatibility with other mods.</p>
        <p>Remaps <code>GLFW_RESIZE_NESW_CURSOR</code>.</p>
      </td>
    </tr>
    <tr>
      <td>Not Allowed</td>
      <td><code>not_allowed</code></td>
      <td><img src="/assets/cursors/not_allowed.png" width="32" alt="not_allowed"/></td>
      <td>
        <p>Only used for compatibility with other mods.</p>
        <p>Remaps <code>GLFW_NOT_ALLOWED_CURSOR</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import useMappings from '../composables/useMappings'
import icons from '../utils/icons'

const { PressableWidget, TextFieldWidget, SliderWidget, MessageScreen, DownloadingTerrainScreen } = useMappings()

let tree: Element;

const updateNodes = () => {
  tree?.querySelectorAll('.lite-tree-node > .title')?.forEach((tree) => {
    tree.innerHTML = tree.innerHTML.replace(
      /(&lt;.cursor-key.&gt;)(?!<)/g, 
      '<span style="color: var(--vp-code-color);">$1</span>'
    )
  })
}

onMounted(() => {
  tree = document.querySelector('.lite-tree')
  tree.addEventListener('click', updateNodes)

  updateNodes()
})

onUnmounted(() => {
  if (tree) tree.removeEventListener('click', updateNodes)
})
</script>