# adapt-flipper

**Flipper** is a *presentation component* Created by Dan storey.
<img align="right" src="https://raw.githubusercontent.com/danielstorey/assets/master/flipper-demo.jpg">

A **Flipper** displays lists of items one at a time. When the learner clicks on the component it flips to the next item. The component completes when the last item is displayed but the learner can continue to interact with the component as it loops back to the beginning.

[**Click here for an interactive demo**](https://danielstorey.github.io/adapt-demo-course/#/id/co-main)

##Installation

Run the following from the command line: `adapt install adapt-flipper`

## Settings Overview

The attributes listed below are used in *components.json* to configure **Flipper**, and are properly formatted as JSON in [*example.json*](https://github.com/danielstorey/adapt-flipper/example.json).

### Attributes

For core model attributes see [**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes). The attributes listed below are specific to the `Flipper` component.

**_component** (string): This value must be: `flipper`. (One word.)

**width** (number): Width in pixels. Default is 100% width.

**_items** (array): Each item represents one flipper container's worth of content for this component.

>**_graphic** (object): An image to be used for the flipper item (Optional).

>>**src** (string): path of the image relative to the src folder.

>>**alt** (string): This text becomes the image’s `alt` attribute.

>**title** (string): The title text for the item.

>**body** (string): The body text for the item.

>**instruction** (string): Text displayed at the bottom right of each item instructing the learner to click next or advising them that the interaction is complete.

### Accessibility



## Limitations

Doesn't work in IE

----------------------------
**Version number:**  1.0.4
**Framework versions:**  2.0
**Author / maintainer:** Dan Storey
