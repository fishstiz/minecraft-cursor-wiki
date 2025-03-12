---
title: Creating Cursors
---
# Creating Cursors

Every cursor must have a unique **key** as its identifier. Choose a unique key for your custom cursor and follow the [resource pack](../resource-pack/getting-started.md) guide when creating the assets.

Once you have prepared the cursor's assets, you can create a `CursorType` object using the static method: `CursorType.of(String key)`. The `CursorType` instance itself is inconsequential—only its **key** is used for lookup (similar to Minecraft's `{{ Identifier }}`).

The `CursorType` must then be registered from the [`MinecraftCursorInitializer`](initialization.md#registering-cursors)

> [!TIP]
> All [built-in cursors](../resource-pack/getting-started.md#all-cursors) are available as static fields of `CursorType`.

## The Cursor Type key
Used to identify the cursor type. Following the [resource pack structure](../resource-pack/getting-started.md#file-structure), this is the:
- **file name** of the cursor type:
    ```
    assets/
    └── minecraft-cursor/
        └── textures/
            └── cursors/
                └── <key>.png
    ```
- **key** for [custom settings](../resource-pack/custom-settings.md):
    ```json:line-numbers [cursors.json]
    {
      "settings": {
        "<key>": {
          "xhot": 3,
          "yhot": 3
        }
      }
    }
    ```
- suffix of the **translation entry** for your cursor type:
    ```json [en_us.json]
    {
      "minecraft-cursor.options.cursor-type.<key>": "Custom"
    }
    ```
### Creating a `CursorType` object
Using `CursorType.of(String key)`:
```java:line-numbers
CursorType customCursor = CursorType.of("custom-cursor");
```

### Creating static `CursorType` objects
You should create final static variables or an enum for cursor types so they are easily reusable and maintainable.

```java:line-numbers [CustomCursor.java]
// Create static cursor types
public class CustomCursor {
    public static final CursorType CELL = CursorType.of("cell");
    public static final CursorType PROGRESS = CursorType.of("progress");
    public static final CursorType ZOOM = CursorType.of("zoom");
}
```
```java:line-numbers [CustomCursorEnum.java]
// Create static cursor types using enum
public enum CustomCursorEnum implements CursorType {
    MOVE,
    RESIZE,
    CROSSHAIR;

    @Override
    public String getKey() {
        return this.name().toLowerCase();
    }
}
```

**After creating your cursor types**, they must be registered from the [`MinecraftCursorInitializer`](initialization.md#registering-cursors) where the `CursorRegistrar` instance will be injected.

---

<script setup lang="ts">
import useMappings from '../composables/useMappings';

const { Identifier } = useMappings();
</script>
