## html-tag-auto-complete

A simple atom editor package that enables auto completion of
html elements with/without class and id.
![demo](https://github.com/dibosh/html-tag-auto-complete/raw/master/demo.gif)

### Features

- Nothing much, but does exactly what it is supposed to do

- Works with any file type(e.g. `.php`, `.js`, `.jsx`, `.md` etc.) as long as the word you are executing it on is a valid html tag(e.g. `div`, `p`, `abbr` etc.)


### Installation

```
apm install html-tag-auto-complete
```

or, go to `Preferences > Install` and search for `html-tag-auto-complete`

### Usage

  - Type in the tag name along with class and id in emmet like fashion-

  ```
  {tag-name}
  {tag-name}#{id}
  {tag-name}.{class-1}.{class-2}
  ```
  and then press: <kbd>alt</kbd> + <kbd>tab</kbd>

  or, right click and do `Run HTML Tag AutoComplete`.

  - You will also find it available under `Packages` in menubar.

### Why?

- The `emmet` plugin is bloated while it's super lightweight. Also there are people like me who only requires this feature rather than all the magics `emmet` can do!

### Development

- Clone this repo locally

- Open `atom` in developer mode: `atom -d`

- Open the source code in `atom`, make whatever changes you would like to make in `lib/html-tag-auto-complete.js` and do `View > Developer > Reload Window` to see if your changes are reflected(e.g. by applying the formatter from context menu or `Package` menu on top)

- Feel free to create a PR with your changes
