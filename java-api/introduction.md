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

It must be accessible recursively from the `Screen` using <code>{{ ParentElement }}#{{ hoveredElement }}(mouseX, mouseY)</code>. 

In other words, the element must be a child of the `Screen`, or a child of a child (and so on), where each parent in the chain correctly implements <code>{{ ParentElement }}#{{ hoveredElement }}()</code>

To check if the element is being detected, inspect mode can be toggled from the <b>More Cursor Options</b> screen.

<script setup lang="ts">
import useMappings from '../composables/useMappings'

const { Element, ParentElement, hoveredElement } = useMappings()
</script>
