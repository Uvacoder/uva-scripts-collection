# card-organizer
A library to create organizable cards that can be serialized into a form's hidden input.

## Configuration
```js
new CardOrganizer(
  data, // required: an array of JSON objects that have a title, description, and key
  cardContainerEl, // required: an Element object where the cards will be displayed
  outputEl, // required: an Element object (usually a hidden input element) where the card order value will be serialized
  // optional: config
  {
    unique: false, // default: true, whether or not keys can repeat
    mutation: false, // default: true, allows user to duplicate and delete blocks
    hiddenData: [] // default: nothing, an array of JSON objects with the same format as data param, but is not rendered at initialization
  }
);
```
