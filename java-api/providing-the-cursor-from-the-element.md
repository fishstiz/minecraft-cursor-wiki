---
title: Providing the Cursor from the Element
---
# Providing the Cursor from the Element

The <code>CursorProvider</code> interface provides a more declarative alternative to the element registration system. 

 `{{ Element }}` classes that implement `CursorProvider` can directly declare which cursor type to be applied when it is being hovered by the mouse by overriding the <code>CursorProvider.getCursorType(double mouseX, double mouseY)</code> method.

> [!IMPORTANT]
> Instances of `{{ Element }}` must follow the [`{{ ParentElement }}` hierarchy](introduction#the-parentelement-hierarchy) to be discoverable by **Minecraft Cursor**.

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
> [!WARNING]
> **If Minecraft Cursor is an optional dependency**, make sure that the mod is loaded before directly implementing `CursorProvider`. 
> 
> You should make a wrapper or subclass of your element that implements `CursorProvider`. Then, through a factory method, return either the normal element or the implementation depending if **Minecraft Cursor** is loaded.

## Implement `CursorProvider` to your custom `Screen`
`CursorProvider` can also be implemented in custom screens because `Screen` is an instance of `{{ Element }}`. 

The method `CursorProvider.getCursorType(double mouseX, double mouseY)` will be invoked after each render call—assuming your custom `Screen` behaves like a typical `Screen` (it is still only invoked when `{{ Element }}.isMouseOver(double mouseX, double mouseY)` returns `true`).

This approach offers greater control over the cursor type at the screen level, allowing you to manage cursor behavior based on the state of multiple elements and/or other conditions. 

It also helps you avoid the complexity of dealing with the [`{{ ParentElement }}` hierarchy](../resource-pack/getting-started.md).
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

For more examples, you can take a [look](https://github.com/fishstiz/minecraft-cursor/blob/mc/1.21.4/common/src/main/java/io/github/fishstiz/minecraftcursor/gui/widget/SelectedCursorHotspotWidget.java#L120) at the [source](https://github.com/fishstiz/minecraft-cursor/blob/mc/1.21.4/common/src/main/java/io/github/fishstiz/minecraftcursor/gui/widget/SelectedCursorTestWidget.java#L57) [code](https://github.com/fishstiz/minecraft-cursor/blob/mc/1.21.4/common/src/main/java/io/github/fishstiz/minecraftcursor/gui/screen/MoreOptionsScreen.java#L108) of **Minecraft Cursor**.

<script setup lang="ts">
import useMappings from '../composables/useMappings';

const { Element, ParentElement, ClickableWidget } = useMappings()
</script>
