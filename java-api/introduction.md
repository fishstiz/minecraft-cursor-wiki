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

## How Minecraft Cursor Works
**Minecraft Cursor** uses an element registration system that maps <code>{{ Element }}</code> classes to a cursor type function which determines the cursor type when the mouse hovers over the <code>{{ Element }}</code>.

Elements are discovered using the <code>{{ ParentElement }}.children()</code> method of the screen, and recursively traverses child <code>{{ ParentElement }}</code> instances with the same method to locate deeper nested elements. 

When an instance of <code>{{ Element }}</code> is discovered, the `isMouseOver(mouseX, mouseY)` method of the element is invoked, and if `true`, executes the cursor type function of the <code>{{ Element }}</code> to determine the cursor type to apply.

## The <code>{{ ParentElement }}</code> hierarchy

Based on the above information, in order for **Minecraft Cursor** to discover your elements, they must be an instance of <code>{{ Element }}</code>. 

The element must be the screen itself, or be accessible from the screen or from its parent using the <code>{{ ParentElement }}.children()</code> method. 

Containers and nested containers must be an instance of <code>{{ ParentElement }}</code> and also be accessible from the screen using the <code>{{ ParentElement }}.children()</code> method. 

This accessibility must be maintained through the element hierarchy, starting from the current screen down to the deepest nested element.

<script setup lang="ts">
import useMappings from '../composables/useMappings'

const { Element, ParentElement } = useMappings()
</script>
