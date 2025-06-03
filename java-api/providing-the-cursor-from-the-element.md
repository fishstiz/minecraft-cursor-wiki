---
title: Providing the Cursor from the Element
---
# Providing the Cursor from the Element

> [!IMPORTANT]
> Non-screen `{{ Element }}`s  must be discoverable through the [`{{ ParentElement }}` hierarchy](introduction#the-parentelement-hierarchy).

The <code>CursorProvider</code> interface provides a more declarative alternative to the element registration system. 

 `{{ Element }}`s can implement <code>CursorProvider#getCursorType(double, double)</code> to return the `CursorType` to be applied when it is detected.

## Implementing `CursorProvider`
```java-vue:line-numbers [MyButton.java]
public class MyButton extends {{ ClickableWidget }} implements CursorProvider {
    // ... your other methods

    @Override
    public CursorType getCursorType(double mouseX, double mouseY) {
        return CursorType.POINTER;
    }
}
```

## Implement `CursorProvider` to your custom `Screen`
Custom screens can also implement `CursorProvider`, since `Screen` is an instance of `{{ Element }}`. 

This allows you to skip the [element detection](../java-api/introduction.md#the-parentelement-hierarchy) and offers greater control over the cursor type at the screen level.

If you return `CursorType.DEFAULT`, **Minecraft Cursor** will still perform a second pass to detect the cursor type from individual elements.

```java:line-numbers [MyScreen.java]
public class MyScreen extends Screen implements CursorProvider {
    // ...

    private CustomTableWidget tableWidget;
    private boolean isLoading;
    private boolean isSelecting;

    @Override
    public CursorType getCursorType(double mouseX, double mouseY) {
        if (isLoading) {
            return CustomCursor.WAIT; 
        }
        if (isSelecting) {
            return CustomCursor.CROSSHAIR;
        }
        if (tableWidget.isMouseOver(mouseX, mouseY)) {
            return CustomCursor.CELL;
        }
        return CursorType.DEFAULT;
    }
}
```

## Practical Examples

For more examples, you can take a look at the [source](https://github.com/fishstiz/minecraft-cursor/blob/master/common/src/main/java/io/github/fishstiz/minecraftcursor/gui/widget/CursorHotspotWidget.java#L146) [code](https://github.com/fishstiz/minecraft-cursor/blob/master/common/src/main/java/io/github/fishstiz/minecraftcursor/gui/widget/CursorPreviewWidget.java#L106) of **Minecraft Cursor**.

<script setup lang="ts">
import useMappings from '../composables/useMappings';

const { Element, ParentElement, ClickableWidget } = useMappings()
</script>
