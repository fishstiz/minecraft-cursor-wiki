---
title: Getting Started with Resource Packs
---
# Getting Started with Resource Packs
  
You may start with this resource pack template that contains the built-in textures of **Minecraft Cursor**:

[Minecraft-Cursor.v3.3.0.zip](https://github.com/user-attachments/files/18857805/Minecraft.Cursor.v3.3.0.zip)

## File Structure
```xml
assets/
├── minecraft-cursor/   <!-- This is the namespace for Minecraft Cursor -->
│   ├── atlases/
│   │   └── cursors.json    <!-- (Optional) Settings for each Cursor --> 
│   └── textures/
│       └── cursors/
│           ├── <cursor-key>.png        <!-- The Cursor Texture -->
│           └── <cursor-key>.png.mcmeta <!-- (Optional) Animation Data -->
├── pack.mcmeta <!-- https://minecraft.wiki/w/Pack.mcmeta -->
└── pack.png    <!-- The Resource Pack Icon -->
```

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
          <li><code>{{ MessageScreen }}</code></li>
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
import useMappings from '../composables/useMappings';

const { PressableWidget, TextFieldWidget, SliderWidget, MessageScreen, DownloadingTerrainScreen } = useMappings()
</script>