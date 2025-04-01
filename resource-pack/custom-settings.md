---
title: Custom Settings
next: false
---
# Custom Settings

Custom settings can be defined in <code>assets/minecraft-cursor/atlases/cursors.json</code>.

Refer to the [file structure](getting-started.md#file-structure) of the resource pack.

> [!NOTE]
> Custom settings are layered per resource pack. Not all keys have to be present if no custom configurations are needed.

<table>
  <thead>
    <tr><th colspan="3" align="left">Root</th></tr>
    <tr>
      <th>Key</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>settings</code>&nbsp;<sup>required</sup></td>
      <td><code>Map&lt;String, Settings&gt;</code></td>
      <td>Maps a cursor <code>key</code> to a <code>Settings</code> object.</td>
    </tr>
  </tbody>
</table>

<table>
    <thead>
        <tr><th colspan="5" align="left">Settings</th></tr>
        <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Range</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>enabled</code>&nbsp;<sup>optional</sup></td>
            <td><code>boolean</code></td>
            <td><code>true</code>, <code>false</code></td>
            <td><code>true</code></td>
            <td>Determines whether the cursor is enabled or not.</td>
        </tr>
        <tr>
            <td><code>scale</code>&nbsp;<sup>optional</sup></td>
            <td><code>float</code></td>
            <td><code>0.50</code> - <code>8.00</code> (incrementing by <code>0.05</code>)</td>
            <td><code>1.00</code></td>
            <td>Specifies the Scale of the cursor.</td>
        </tr>
        <tr>
            <td><code>xhot</code>&nbsp;<sup>optional</sup></td>
            <td><code>int</code></td>
            <td><code>0</code> - <code>31</code></td>
            <td><code>0</code></td>
            <td>Specifies the X Hotspot position.</td>
        </tr>
        <tr>
            <td><code>yhot</code>&nbsp;<sup>optional</sup></td>
            <td><code>int</code></td>
            <td><code>0</code> - <code>31</code></td>
            <td><code>0</code></td>
            <td>Specifies the Y Hotspot position.</td>
        </tr>
        <tr>
            <td><code>animated</code>&nbsp;<sup>optional</sup></td>
            <td><code>boolean</code></td>
            <td><code>true</code>, <code>false</code>, <code>null</code></td>
            <td><code>null</code>, or <code>true</code> if animation data exists</td>
            <td>Determines whether the cursor animation should be played.</td>
        </tr>
    </tbody>
</table>

**Example usage**:
```json:line-numbers [cursors.json]
{
  "settings": {
    "default": {
      "xhot": 7,
      "yhot": 3,
      "scale": 0.75
    },
    "pointer": {
      "xhot": 7,
      "yhot": 3,
      "scale": 0.75
    },
    "text": {
      "xhot": 12,
      "yhot": 15,
      "scale": 0.75
    },
    "grabbing": {
      "xhot": 15,
      "yhot": 3,
      "scale": 0.75
    },
    "shift": {
      "enabled": false 
    },
    "busy": {
      "animated": false
    }
  }
}
```
