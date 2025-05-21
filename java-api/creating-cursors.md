---
title: Creating Cursors
---
# Creating Cursors

Every cursor must have a unique **key** as its identifier. Choose a unique key for your custom cursor and follow the [resource pack](../resource-pack/getting-started.md) guide when creating the assets.

Once you have prepared the cursor's assets, you can create a `CursorType` object using the static method: `CursorType.of(String key)`. This serves as the identifier of the cursor.

The `CursorType` must then be registered from the [`MinecraftCursorInitializer`](initialization.md#registering-cursors)

> [!TIP]
> All [built-in cursors](../resource-pack/getting-started.md#all-cursors) are available as static fields of `CursorType`.

## The Cursor Type key
Used to identify the cursor type. Following the [resource pack structure](../resource-pack/getting-started.md#file-structure), this is the:
- **file name** of the cursor type:
<LiteTree>
picture={{ icons.picture }}
---
assets
	minecraft-cursor                                                          
    	textures
      		cursors
          		{{ picture }}&lt;&#8203;key&#8203;&gt;.png
</LiteTree>
    
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
### Creating `CursorType` objects
```java:line-numbers
CursorType customCursor = CursorType.of("custom-cursor");
```

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
import { onMounted, onUnmounted } from 'vue';
import useMappings from '../composables/useMappings';
import icons from '../utils/icons' 

const { Identifier } = useMappings();
const picture = "[picture]"
let tree: Element;

const updateNodes = () => {
  tree?.querySelectorAll('.lite-tree-node > .title')?.forEach((tree) => {
    tree.innerHTML = tree.innerHTML.replace(
      /(&lt;.key.&gt;)(?!<)/g, 
      '<span style="color: var(--vp-code-color);">$1</span>'
    )
  })
}

onMounted(() => {
  tree = document.querySelector('.lite-tree')
  tree.addEventListener('click', updateNodes)

  updateNodes()

  document.querySelectorAll('.language-json')?.forEach((tree) => {
    tree.innerHTML = tree.innerHTML.replace(
      /(&lt;key&gt;)(?!<)/g, 
      '<span style="color: var(--vp-code-color);">$1</span>'
    )
  })
})

onUnmounted(() => {
  if (tree) tree.removeEventListener('click', updateNodes)
})
</script>
