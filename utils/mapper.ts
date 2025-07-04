export enum Mappings {
  YARN = 'yarn',
  MOJANG = 'mojang'
}

export const yarnToMojang = {
  Element: 'GuiEventListener',
  element: 'guiEventListener',
  ParentElement: 'ContainerEventHandler',
  hoveredElement: 'getChildAt',
  children: 'children',
  HandledScreen: 'AbstractContainerScreen',
  handledScreen: 'abstractContainerScreen',
  ScreenHandler: 'AbstractContainerMenu',
  Identifier: 'ResourceLocation',
  ClickableWidget: 'AbstractWidget',
  DrawContext: 'GuiGraphics',
  drawContext: 'guiGraphics',
  PressableWidget: 'AbstractButton',
  TextFieldWidget: 'EditBox',
  EditBoxWidget: 'MultiLineEditBox',
  SliderWidget: 'AbstractSliderButton',
  MessageScreen: 'GenericMessageScreen',
  DownloadingTerrainScreen: 'ReceivingLevelScreen',
  'net.minecraft.class_492$class_493':
    'net.minecraft.client.gui.screens.inventory.MerchantScreen$TradeOfferButton',
  close: 'onClose'
}

export const isValidMappings = (mappings: Mappings | string) => {
  return mappings.toUpperCase() in Mappings
}

export const mapYarn = (mappings: Mappings, yarnType: string): string => {
  return mappings == 'yarn' ? yarnType : yarnToMojang[yarnType] ?? yarnType
}
