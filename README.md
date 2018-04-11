## html-tag-auto-complete

A simple atom editor plugin that enables auto completion of
html elements with/without class and id.
![demo](https://github.com/dibosh/html-tag-auto-complete/raw/master/demo.gif)

### Usage
Type in the tag name along with class and id in emmet like fashion-
e.g`<tagName>#<id>.<className>`, `<tagName>.<className>#<id>`, `<tagName>`,
`<tagName>.<class1>.<class2>#<id>`, `<tagName>#<id>` etc. and then press-
<kbd>alt</kbd> + <kbd>tab</kbd>

Voila!

### Installation

```
apm install html-tag-auto-complete
```

### Why?

- The `emmet` plugin is bloated while it's super lightweight. Also there are people
like me who only requires this feature rather than all the magics `emmet` can do!
- Supports both .jsx and normal .html files like `emmet`
