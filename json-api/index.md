---
title: JSON API
next: false
---

# JSON API <Badge type="warning" text="beta" />

The JSON API is a simplified alternative to the Java API.

At the moment, there's only one feature available: the [**blacklist**](#blacklisting-elements).

Other planned features include:
- Creating new cursors.
- Mapping discoverable elements to a cursor.

> [!NOTE]
> These features are technically simple to implement, since the mod’s infrastructure already supports it. 
> But I'm not sure if anyone will even use them, so they're only planned for now—with no guarantee they'll be added.
> 
> **Why even make this then?** Because I thought it'd be a fun idea.
>
> If you're interested in these features then feel free to open an issue so I'll actually implement it. https://github.com/fishstiz/minecraft-cursor/issues 

## Getting Element Names

The names of elements can be found by using the **Inspect Element** option under **Debug Options** in Minecraft Cursor. This tool also shows which elements are actually being detected by the system.

## Blacklisting Elements <Badge type="warning" text="beta" />

You can exclude elements from the adaptive cursor system by adding them to the `blacklist` in the config file (**subject to change**).

The `minecraft-cursor.json` config file is located in the `config` directory of your instance. 

Add the name of the screen or element to the `blacklist` array. Requires a **restart** to apply.

If the `blacklist` key doesn’t exist, you can add it manually.

**Example**: 
```json [minecraft-cursor.json]
{ 
  "blacklist": [
    "net.minecraft.class_442",
    "com.cobblemon.mod.common.client.gui.interact.wheel.InteractWheelButton"
  ]
}
```

## Planned Features <Badge type="warning" text="preview" />

This is just a preview of upcoming features and does not do anything yet.

```json:line-numbers [minecraft-cursor-extensions.json]
{
  "cursors": ["my_awesome_cursor"],
  "mappings": [
    {
      "element": "com.example.mod.gui.widgets.CustomWidget",
      "cursor": "pointer",
      "conditions": {
        "active": true
      }
    },
    {
      "element": "net.minecraft.class_442",
      "children": [
        { 
          "element": "net.minecraft.class_4185",
          "cursor": "my_awesome_cursor",
          "conditions": {
            "active": true
          }
        }
      ]
    }
  ]
}
```
#### `cursors` Array

An array cursor keys to be registered. The resource pack must support these cursor keys.

#### `mappings` Properties

| Property     | Type     | Required | Description                                                                |
| ------------ | -------- | -------- | -------------------------------------------------------------------------- |
| `element`    | `string` | ✅ Yes    | The binary name of the element.                                            |
| `cursor`     | `string` | ✅ Yes    | The cursor key to apply when the element is hovered.                       |
| `conditions` | `object` | ❌ No     | Extra conditions for applying the cursor. See [below](#conditions-object). |
| `children`   | `array`  | ❌ No     | Mappings that apply only when this element is nested inside the parent.    |

---

#### `conditions` Object

| Key      | Type      | Required | Description                                                               |
| -------- | --------- | -------- | ------------------------------------------------------------------------- |
| `active` | `boolean` | ❌ No     | Only applies to certain element types. May be clarified in the inspector. |