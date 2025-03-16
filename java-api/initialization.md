---
title: Initialization
---

# Initialization

Register cursor types and `{{ Element }}` classes using the <code>MinecraftCursorInitializer</code> interface.

> [!TIP]
> `MinecraftCursorInitializer` is safe to implement even if **Minecraft Cursor** is an optional dependency as long as it is not referenced in your main code. It will only be loaded when needed.

## Creating the Entrypoint
Create the entrypoint by implementing `MinecraftCursorInitializer`.

```java:line-numbers [MyMinecraftCursorInitializer.java]
public class MyMinecraftCursorInitializer implements MinecraftCursorInitializer {
    @Override
    public void init(CursorTypeRegistrar cursorRegistrar, ElementRegistrar elementRegistrar) {
        // The CursorTypeRegistrar and ElementRegistrar instances are injected here for registration.
        // This method is invoked on client initialization of Minecraft Cursor.
    }
}
```

### Registering the Entrypoint
#### Fabric
Add the entrypoint in `fabric.mod.json` with the `minecraft-cursor` key.

```json [fabric.mod.json]
"entrypoints": {
  "minecraft-cursor": ["com.example.modid.MyMinecraftCursorInitializer"]
}
```
#### Neoforge & Forge 

1. Inside `META-INF`, create a `services` directory. Then create a file named after the fully-qualified name of the `MinecraftCursorInitializer` interface.
    ```
    resources/
    └── META-INF/
        └── services/
            └── io.github.fishstiz.minecraftcursor.api.MinecraftCursorInitializer
    ```
2. Inside the file, write the fully-qualified name of your `MinecraftCursorInitializer` implementation.

    ```:line-numbers [io.github.fishstiz.minecraftcursor.api.MinecraftCursorInitializer]
    com.example.modid.MyMinecraftCursorInitializer
    ```

## Registering Cursors
[Created cursors](creating-cursors) must be registered using the `CursorTypeRegistrar.register()` method so its assets can be recognized.

```java:line-numbers {7,12,15,18,21} [MyMinecraftCursorInitializer.java]
public class MyMinecraftCursorInitializer implements MinecraftCursorInitializer {
    static final CursorType STATIC_CURSOR_TYPE = CursorType.of("static-cursor-type");

    @Override
    public void init(CursorTypeRegistrar cursorRegistrar, ElementRegistrar elementRegistrar) {
        // Register STATIC_CURSOR_TYPE
        cursorRegistrar.register(STATIC_CURSOR_TYPE)

        // Creating a CursorType inline
        CursorType customCursor = CursorType.of("custom-cursor");
        // Register customCursor
        cursorRegistrar.register(customCursor);

        // Create and register a cursor type inline at the same time
        CursorType myCursor = cursorRegistrar.register("my-cursor");

        // Registering multiple cursor types
        cursorRegistrar.register(STATIC_CURSOR_TYPE, customCursor, myCursor);

        // Registering cursor types from a CursorType enum
        cursorRegistrar.register(CustomCursorEnum.values());
    }

    // Example implementation of CursorType on an enum
    enum CustomCursorEnum implements CursorType {
        CROSSHAIR,
        NOT_ALLOWED;

        @Override
        public String getKey() {
            return this.name().toLowerCase();
        }
    }
}
```

## Registering Elements
> [!IMPORTANT]
> Instances of `{{ Element }}` must follow the [`{{ ParentElement }}` hierarchy](introduction#the-parentelement-hierarchy) to be discoverable by **Minecraft Cursor**.

> [!TIP]
> If **Minecraft Cursor** is a required dependency, it is better to use the [`CursorProvider`](providing-the-cursor-from-the-element.md) interface approach. You'll be able to declare the cursor type directly from the element without having to register it.   

Elements can be registered with a cursor type function using the method: `ElementRegistrar.register({{ Element }}, CursorTypeFunction)`. 

The `CursorTypeFunction` is executed when the mouse is hovering over the registered `{{ Element }}`, as determined by the method `{{ Element }}.isMouseOver(double, double)`. It receives three parameters: 
- The `{{ Element }}` instance - type of the registered `{{ Element }}`
- The Mouse X position - `double`
- The Mouse Y position - `double`

### Class Reference
Registering the `{{ Element }}` implementation class with a cursor type function.

```java:line-numbers {5,8,12} [MyMinecraftCursorInitializer.java]
public class MyMinecraftCursorInitializer implements MinecraftCursorInitializer {
    @Override
    public void init(CursorTypeRegistrar cursorRegistrar, ElementRegistrar elementRegistrar) {
        // Register MyButton with the built-in pointer cursor type
        elementRegistrar.register(MyButton.class, (myButton, mouseX, mouseY) -> CursorType.POINTER);

        // You can use the built-in static methods of ElementRegistrar when no additional logic is needed
        elementRegistrar.register(MyOtherButton.class, ElementRegistrar::elementToPointer);

        // Register MyCustomElement with a custom cursor type
        CursorType customCursor = cursorRegistrar.register("custom-cursor");
        elementRegistrar.register(MyCustomElement.class, (myCustomElement, mouseX, mouseY) -> customCursor);
    }
}
```
### Fully-Qualified Binary Name
If the class is not publicly accessible, it can be registered using its fully-qualified binary name.

> [!NOTE] NOTE (FABRIC)
> Use the intermediary mappings when registering a native `{{ Element }}` in Fabric.

```java:line-numbers [MyMinecraftCursorInitializer.java]
public class MyMinecraftCursorInitializer implements MinecraftCursorInitializer {
    @Override
    public void init(CursorTypeRegistrar cursorRegistrar, ElementRegistrar elementRegistrar) {
        elementRegistrar.register("com.example.modid.MyButton", ElementRegistrar::elementToPointer);
    }
}
```

### `CursorHandler` Interface
The `CursorHandler` interface can be implemented to improve code readability and separation of concerns.

It defines two methods and accepts a type parameter `T` that extends `{{ Element }}`.

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Parameters</th>
      <th>Returns</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>getTargetElement</code></td>
      <td></td>
      <td><code>TargetElement</code></td>
      <td>
        The <code>{{ Element }}</code> to be registered. 
        <br><br>This is inferred from the provided type <code>T</code>.
      </td>
    </tr>
    <tr>
      <td><code>getCursorType</code></td>
      <td><code>T&nbsp;{{ Element }}</code><br><code>double&nbsp;mouseX</code><br><code>double&nbsp;mouseY</code></td>
      <td><code>CursorType</code></td>
      <td>The <code>CursorTypeFunction</code>.</td>
    </tr>
  </tbody>
</table>

```java-vue:line-numbers [My{{ Element }}CursorHandler.java]
// The type passed will be the {{ Element }} to be registered. In this case, it is My{{ Element }}. 
public class My{{ Element }}CursorHandler implements CursorHandler<My{{ Element }}> { 
    @Override
    public CursorType getCursorType(My{{ Element }} my{{ Element }}, double mouseX, double mouseY) {
        // This is the cursor type function to be associated with My{{ Element }}, invoked when My{{ Element }}.isMouseOver returns true
        return CursorType.POINTER;
    }
}
```
```java:line-numbers {5} [MyMinecraftCursorInitializer.java]
// Registering the CursorHandler
public class MyMinecraftCursorInitializer implements MinecraftCursorInitializer {
    @Override
    public void init(CursorTypeRegistrar cursorRegistrar, ElementRegistrar elementRegistrar) {
        elementRegistrar.register(new MyElementCursorHandler());
    }
}
```
#### Using the Fully-Qualified Binary Name of the `{{ Element }}`

If the class is not publicly accessible, you can simply pass the `{{ Element }}` type then override the `CursorHandler.getTargetElement()` method to return the binary name of the target element.

> [!NOTE] NOTE (FABRIC)
> Use the intermediary mappings when registering a native `{{ Element }}` in Fabric.

```java-vue:line-numbers {5} [MerchantScreenButtonCursorHandler.java]
// Pass the {{ Element }} superclass as placeholder
public class MerchantScreenButtonCursorHandler implements CursorHandler<{{ Element }}> {
    @Override
    public @NotNull TargetElement<{{ Element }}> getTargetElement() { 
        return TargetElement.fromClassName("{{ TradeOfferButton }}"); 
    }

    @Override
    public CursorType getCursorType({{ Element }} element, double mouseX, double mouseY) {
        return CursorTypeUtil.canShift() ? CursorType.SHIFT : CursorType.POINTER;
    }
}
```
```java:line-numbers [MyMinecraftCursorInitializer.java]
public class MyMinecraftCursorInitializer implements MinecraftCursorInitializer {
    @Override
    public void init(CursorTypeRegistrar cursorRegistrar, ElementRegistrar elementRegistrar) {
        cursorTypeRegistrar.register(new MerchantScreenButtonCursorHandler());
    }
}
```

### `{{ HandledScreen }}` Subclass
`{{ HandledScreen }}` subclasses must be handled differently so that the built-in cursor handler for `{{ HandledScreen }}` does not get overriden.

The `{{ HandledScreen }}` cursor handler is responsible for: 
- Changing the cursor type to shift when holding shift above items in the inventory.
- Changing the cursor type to pointer when hovering over items in the inventory.
- Changing the cursor type to grabbing when an item is held in the inventory.

You can either replicate this behavior in your `{{ HandledScreen }}` subclass or extend the `AbstractHandledScreenCursorHandler` provided by the **Minecraft Cursor API**.

> [!TIP]
> This problem can be avoided altogether by implementing the [`CursorProvider`](providing-the-cursor-from-the-element.md) interface directly to your `{{ HandledScreen }}` subclass. Recommended if **Minecraft Cursor** is a required dependency. 

#### Example extending `AbstractHandledScreenCursorHandler`
```java-vue:line-numbers [My{{ HandledScreen }}CursorHandler.java]
// AbstractHandledScreenCursorHandler accepts two parameters:
// The first parameter is the {{ ScreenHandler }} of the {{ HandledScreen }} subclass you wish to be registered.
// The second parameter is the {{ HandledScreen }} subclass itself.
public class My{{ HandledScreen }}CursorHandler extends AbstractHandledScreenCursorHandler<My{{ ScreenHandler }}, My{{ HandledScreen }}> {
    @Override
    public CursorType getCursorType(My{{ HandledScreen }} {{ handledScreen }}, double mouseX, double mouseY) {
        // There are two approaches:

        // 1. Get the cursor type of the {{ HandledScreen }} superclass first.
        CursorType cursorType = super.getCursorType({{ handledScreen }}, mouseX, mouseY);
        // If the cursor type of the {{ handledScreen }} is not default then return the cursor type 
        if (cursorType != CursorType.DEFAULT) return cursorType;
        // You can also return later if you need the state of the cursor type from the {{ HandledScreen }}.

        // 2. Return the cursor type of the {{ HandledScreen }} last after computing the cursor type
        // of your {{ HandledScreen }} subclass and none of your conditions were met. 
        return super.getCursorType({{ handledScreen }}, mouseX, mouseY);
    }
}
```

## Practical Examples

For more examples, you can take a look at the [source code](https://github.com/fishstiz/minecraft-cursor/blob/mc/1.21.4/common/src/main/java/io/github/fishstiz/minecraftcursor/impl/MinecraftCursorInitializerImpl.java#L18) of **Minecraft Cursor**.

---

<script setup lang="ts">
import useMappings from '../composables/useMappings'

const { 
    Element, 
    ParentElement, 
    HandledScreen, 
    ScreenHandler, 
    handledScreen, 
    ["net.minecraft.class_492$class_493"]: TradeOfferButton 
} = useMappings()
</script>
