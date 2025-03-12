export enum Mappings {
  YARN = 'yarn',
  MOJANG = 'mojang'
}

export const yarnToMojang = {
  Element: 'GuiEventListener',
  ParentElement: 'ContainerEventListener',
  HandledScreen: 'AbstractContainerScreen',
  ScreenHandler: 'AbstractContainerMenu',
  Identifier: 'ResourceLocation',
  ClickableWidget: 'AbstractWidget',
  DrawContext: 'GuiGraphics',
  drawContext: 'guiGraphics',
  PressableWidget: 'AbstractButton',
  TextFieldWidget: 'EditBox',
  SliderWidget: 'AbstractSliderButton',
  MessageScreen: 'GenericMessageScreen',
  DownloadingTerrainScreen: 'ReceivingLevelScreen',  
  close: 'onClose'
}

export const isValidMappings = (mappings: Mappings | string) => {
  return mappings.toUpperCase() in Mappings
}

export const mapYarn = (mappings: Mappings, yarnType: string): string => {
  return mappings == 'yarn' ? yarnType : yarnToMojang[yarnType] ?? yarnType
}
