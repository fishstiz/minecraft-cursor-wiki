---
title: Creating Cursor Textures
---
# Creating Cursor Textures

**Requirements**:
- Minimum Size: **8x8**
- Maximum Size: **128x128**
- Must be divisible by: **8**
- Must be square
- File name must correspond to a [cursor key](getting-started.md#all-cursors).
- Format: **.png**

**Recommendations**:
- Use **2<sup>n</sup>** size when applying a custom scale.
- Use **16x16** with **1:1** pixel density for optimal results with auto scale (may vary across platforms).

## Example

Creating a **32x32** texture for the **Default** cursor which has the `default` key:

<img src="./demo/filename.png" width="512" alt="demo-filename">
<br><br>
<img src="./demo/texture.png" width="350" alt="demo-texture">

## Animated Textures

1. Choose a single frame size (must be within spec) and create the first sprite used as fallback.

    In this example, I chose to animate the **Default** cursor with a size of **32x32**:
    <br>
    <img src="./demo/texture.png" width="350" alt="demo-texture">

2. Add frames by stacking them vertically (top to bottom).
   - All frames must be the same size.
   - The total image height must be divisible by the chosen frame size.
   - Frames are indexed from top to bottom, starting at `0`.

    Here, a second frame was added, making the total height **64** pixels:
    <br>
    <img src="./demo/animation-texture.png" width="350" alt="demo-animation-texture"> 

3. Register the texture as animated by creating a `<key>.png.mcmeta` file within the same directory. This is where you can specify [animation data](#animation-data).

   <img src="./demo/animation-filename.png" width="350" alt="demo-animation-filename"> 
   <br><br><strong><code>default.png.mcmeta</code></strong>:
   <img src="./demo/animation-data.png" width="" alt="demo-animation-data">

### Animation Data
The existence of the `<key>.png.mcmeta` file tells **Minecraft Cursor** that `<key>.png` is an animated texture. It also specifies the animation data. 

It is in JSON format and can be opened with any text editor, preferably code editors like Notepad++ to aid with formatting.

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>mode</code>&nbsp;<sup>optional</sup></td>
      <td><code>String</code></td>
      <td><code>loop</code></td>
      <td>
        <p>Determines the animation mode.</p>          
        <table>
          <thead>
            <tr><th colspan="2" align="left">Animation Modes</th></tr>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>loop</code></td>
              <td>Repeats in a continuous loop. The default mode.</td>
            </tr>
            <tr>
              <td><code>loop_reverse</code></td>
              <td>Repeats in a continuous loop but in reverse.</td>
            </tr>
            <tr>
              <td><code>forwards</code></td>
              <td>Plays the animation and stops at the last frame.</td>
            </tr>
            <tr>
              <td><code>reverse</code></td>
              <td>Plays the animation in reverse and stops at the first frame.</td>
            </tr>
            <tr>
              <td><code>oscillate</code></td>
              <td>Loops back and forth continuously.</td>
            </tr>
            <tr>
              <td><code>random</code></td>
              <td>Randomly selects frames in a loop. Does not repeat the same frame twice.</td>
            </tr>
            <tr>
              <td><code>random_cycle</code></td>
              <td>Randomly selects frames in a loop, cycling through all frames before repeating.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>frametime</code>&nbsp;<sup>optional</sup></td>
      <td><code>int</code></td>
      <td><code>1</code></td>
      <td>The amount of ticks per frame. Minimum value: <code>1</code>.</td>
    </tr>
    <tr>
      <td><code>frames</code>&nbsp;<sup>optional</sup></td>
      <td><code>Array</code></td>
      <td><code>null</code></td>
      <td>
        <p>Determines the order and/or time of the frames to be played.</p>
        <ul>
          <li>If this is not specified, frames will be auto-generated from top to bottom with the given <code>frametime</code>.</li>
          <li>Array elements can either be an <strong><code>int</code></strong> or a <strong><code>Frame</code></strong> object.</li>
        </ul>
        <table>
          <thead><tr><th><code>int</code></th></tr></thead>
          <tbody><tr><td>Specifies the index of the frame according to the sprite sheet.</td></tr></tbody>
        </table>
        <table>
          <thead>
            <tr><th colspan="3" align="left">Frame</th></tr>
            <tr>            
              <th>Key</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>index</code>&nbsp;<sup>required</sup></td>
              <td><code>int</code></td>
              <td>Specifies the index of the frame according to the sprite sheet.</td>
            </tr>
            <tr>
              <td><code>time</code>&nbsp;<sup>required</sup></td>
              <td><code>int</code></td>
              <td>The <code>frametime</code> of the frame. Minimum value: <code>1</code>.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

#### Examples
```json:line-numbers [&lt;key&gt;.png.mcmeta]
{
  "mode": "loop",
  "frametime": 4,
  "frames": [
    3,
    { "index": 1, "time": 6 },
    0,
    5,
    { "index": 2, "time": 3 }
  ]
}
```
- Animation loops continuously.
- Default frame duration is 4 ticks.
- Frames played in this order: 3 → 1 → 0 → 5 → 2.
- Frame 1 plays for 6 ticks (overridden).
- Frame 2 plays for 3 ticks (overridden).
- All other frames play for 4 ticks (default).

--- 

```json:line-numbers [&lt;key&gt;.png.mcmeta]
{
  "frametime": 2
}
```
- Frames are played in order from top to bottom.
- Each frame lasts two ticks.
- Animation loops by default.
### Limitations

- To maximize mod compatibility, interpolation is not feasible as the cursors are not being custom rendered. **Minecraft Cursor** simply changes the look of the native cursor, with each frame essentially being its own cursor. 
  
  The animation may pause or slow down when the game does.

## Practical Examples

For more examples, you can take a look at the built-in textures of **Minecraft Cursor** in the [source files](https://github.com/fishstiz/minecraft-cursor/tree/master/common/src/main/resources/assets/minecraft-cursor/textures/cursors).
