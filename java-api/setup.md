---
title: Setup
---
# Setup

Add the repository for **Minecraft Cursor** to your project.

```groovy [build.gradle]
repositories {
    maven { url = "https://raw.githubusercontent.com/fishstiz/maven/m2" }
}
```

## Adding Minecraft Cursor to Dependencies
All available versions of `minecraft-cursor-<loader>` and `minecraft-cursor-<loader>-api` can be seen [here](https://github.com/fishstiz/maven/tree/m2/io/github/fishstiz).


### Fabric Loom (Fabric)
```groovy [build.gradle]
dependencies {
    modCompileOnly "io.github.fishstiz:minecraft-cursor-fabric-api:<version>"
    modRuntimeOnly "io.github.fishstiz:minecraft-cursor-fabric:<version>"
}
```
### ModDevGradle (NeoForge)
```groovy [build.gradle]
dependencies {
    compileOnly "io.github.fishstiz:minecraft-cursor-common-api:<version>"
    runtimeOnly "io.github.fishstiz:minecraft-cursor-neoforge:<version>"
}
```
### ForgeGradle (Forge)
Make sure to apply the [MixinGradle](https://github.com/SpongePowered/MixinGradle) plugin to make **Minecraft Cursor** work in the development environment of Forge.

```groovy [build.gradle]
dependencies {
    compileOnly fg.deobf("io.github.fishstiz:minecraft-cursor-common-api:<vesion>")
    runtimeOnly fg.deobf("io.github.fishstiz:minecraft-cursor-forge:<version>")
}
```
#### ModDevGradle Legacy (Forge)
```groovy [build.gradle]
dependencies {
    modCompileOnly "io.github.fishstiz:minecraft-cursor-common-api:<version>"
    modRuntimeOnly "io.github.fishstiz:minecraft-cursor-forge:<version>"
}
```

### Artifacts
> [!NOTE]
> The full mod includes the API as a nested JAR (jar-in-jar). 

| Artifact Name                 | Description                           |
| ----------------------------- | ------------------------------------- |
| `minecraft-cursor-fabric`     | Full mod compatible with Fabric.      |
| `minecraft-cursor-fabric-api` | API compatible with Fabric.           |
| `minecraft-cursor-neoforge`   | Full mod compatible with Neoforge.    |
| `minecraft-cursor-forge`      | Full mod compatible with Forge.       |
| `minecraft-cursor-common-api` | API compatible with Forge & Neoforge. |
| `minecraft-cursor`            | (old) Full mod compatible with Fabric |
| `minecraft-cursor-api`        | (old) API compatible with Fabric      |

## Minecraft Cursor Mod ID
**Fabric**: `minecraft-cursor`

**Forge** & **NeoForge**: `minecraft_cursor`

> [!NOTE] Why isn't the Mod ID consistent?
> **Minecraft Cursor** was initially only in Fabric, which supported dashes in the mod id. Forge & NeoForge does not, so the mod id had to be changed for both. 
> 
> `minecraft-cursor` is still the namespace used to avoid breaking changes.  
