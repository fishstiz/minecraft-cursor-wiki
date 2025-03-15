---
title: Directly Controlling the Cursor
---
# Directly Controlling the Cursor

The <code>CursorController</code> instance allows you to bypass the element-based system and the `{{ ParentElement }}` hierarchy by allowing direct control of the cursor.

> [!WARNING]
> **If Minecraft Cursor is an optional dependency**, make sure that the mod is loaded before using `CursorController` in your main code. 
> 
> It will also only be instantiated after the **Minecraft Cursor** entrypoints have been initialized, and will throw an error if accessed too early.

## Getting the `CursorController` instance
```java
CursorController cursorController = CursorController.getInstance();
```
## Methods

The `CursorController` instance provides methods for changing the cursor's cursor type.

### `void setSingleCycleCursor(CursorType cursorType)`
Changes the cursor to a specified `CursorType` for only one `render`/`tick` cycle. 

**Example Usage**:
```java-vue:line-numbers [DeeplyNestButton.java]
public class DeeplyNestedButton extends {{ ClickableWidget }} {
    // ...

    @Override
    protected void renderWidget({{ DrawContext }} {{ drawContext }}, int mouseX, int mouseY, float delta) {
        // ...

        if (this.isMouseOver(mouseX, mouseY)) {
            CursorController.getInstance().setSingleCycleCursor(CursorType.POINTER);
        }
    }
}
```

### `void overrideCursor(CursorType cursorType, int index)`
Overrides the current cursor with a specified `CursorType` and priority index. Higher index values take precedence when multiple overrides exist.

> [!TIP]
> Use positive values for the index as **Minecraft Cursor** uses negative index values internally to ensure they do not override with your custom cursor overrides.

### `void removeOverride(int index)`
Removes the cursor override at the given index.

> [!NOTE]
> Overrides will automatically be removed if they are not loaded or if the cursor type is disabled by the user.

**Example usage of** `overrideCursor` **and** `removeOverride`:
```java-vue:line-numbers [MyScreen.java]
public class MyScreen extends Screen {
    // ...

    private static final CursorController CURSOR_CONTROLLER = CursorController.getInstance();
    private boolean doingSomething;

    public void setDoingSomething(boolean isDoingSomething) {
        if (isDoingSomething) {
            CURSOR_CONTROLLER.overrideCursor(CustomCursor.DOING_SOMETHING, 100); // 100 is just an arbitrary number
        } else {
            CURSOR_CONTROLLER.removeOverride(100);
        }
    }

    @Override
    public void {{ close }}() {
        // Remove the override on close to ensure the cursor doesn't get stuck.
        CURSOR_CONTROLLER.removeOverride(100);
        super.{{ close }}();
    }
}
```

## Practical Examples
Take a look at the **Minecraft Cursor** [source code](https://github.com/fishstiz/minecraft-cursor/blob/mc/1.21.4/common/src/main/java/io/github/fishstiz/minecraftcursor/gui/widget/CursorOptionsHandler.java#L72) for an example of using `overrideCursor`.

---

<script setup lang="ts">
import useMappings from '../composables/useMappings';

const { Element, ParentElement, ClickableWidget, DrawContext, drawContext, close } = useMappings()
</script>
