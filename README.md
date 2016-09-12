# adapt-flipper

**Flipper** is a *presentation component* Created by Dan storey.
<img align="right" src="">

A **Flipper** displays lists of items one at a time. When the learner clicks on the component it flips to the next item. The component completes when the last item is displayed but the learner can continue to interact with the component as it loops back to the beginning.


##Installation

## Settings Overview

The attributes listed below are used in *components.json* to configure **Flipper**, and are properly formatted as JSON in [*example.json*](https://github.com/danielstorey/adapt-flipper/example.json).

### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**_component** (string): This value must be: `flipper`. (One word.)

**_classes** (string): CSS class name to be applied to **Flipper** containing `div`. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`.

**instruction** (string): This optional text appears above the component. It is frequently used to
guide the learner’s interaction with the component.

**title** (string): This is the title text for the **Flipper** component.

**body** (string): This is the main text for the **Flipper** component.

**width** (number): Width in pixels. Default is 100% width.

**_items** (string): Each item represents one flipper container's worth of content for this component.

>**_graphic** (string): An image to be used for the flipper item (Optional).

>>**src** (string): path of the image relative to the src folder.

>>**alt** (string): This text becomes the image’s `alt` attribute.

>**title** (string): The title text for the item.

>**body** (string): The body text for the item.

>**Instruction** (string): Text displayed at the bottom right of each item instructing the learner to click next or advising them that the interaction is complete.

### Accessibility



## Limitations

----------------------------
**Version number:**  1.0
**Framework versions:**  2.0
**Author / maintainer:** Dan Storey
