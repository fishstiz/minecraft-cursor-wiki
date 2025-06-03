---
title: Introduction
prev: false
--- 
# Introduction

> [!TIP]
> You can toggle between **Yarn** and **Mojang** mappings by clicking on the button next to the Java API link from the navigation bar.


The **Minecraft Cursor API** lets mod developers extend the functionality of **Minecraft Cursor** allowing them to:
- Create new cursors.
- Register elements with a cursor type mapping function. 
- Declare the cursor type from within the element.
- Control the cursor directly to bypass the element system.

## What is An Element?

Elements are simply classes or objects that implement Minecraft's native <code>{{ Element }}</code> interface, which allows the capturing and propagating of mouse events on GUIs and widgets/components from screens.

## The <code>{{ ParentElement }}</code> hierarchy

For elements to be detected, they must be an instance of <code>{{ Element }}</code>.

It must be accessible recursively from the `Screen` via <code>{{ ParentElement }}#{{ children }}()</code>. 

Each parent in the hierarchy must correctly expose children, forming a chain from the `Screen` to the target element.

If the element is an instance of <code>{{ ClickableWidget }}</code>, <code>{{ ClickableWidget }}#isHovered()</code> and
<code>{{ ClickableWidget }}#visible</code> must be true.

Otherwise, <code>{{ Element }}#isMouseOver(double, double)</code> must return true.

To check if the element is being detected, **Inspect element** can be toggled from the configuration screen under the **Debug** section.

<script setup lang="ts">
import useMappings from '../composables/useMappings'

const { Element, ParentElement, children, ClickableWidget } = useMappings()
</script>
