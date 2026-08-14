---
title: JSON API
next: false
---

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

## Getting Element Names

The names of elements can be found by using the **Inspect Element** option under **Debug Options** in Minecraft Cursor. This tool also shows which elements are actually being detected by the system.
