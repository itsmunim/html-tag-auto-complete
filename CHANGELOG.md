## 0.1.1 - Bug fix
- When the cursor is next to a tag name you typed and there's space in between
the html tag name and the cursor, then it shouldn't do anything

## 0.1.0 - Initial Release
- Feature added for auto completion of html tags
- Emmet like ability is available; class or id can be placed anywhere in the
string but it will still recognize and generate accordingly

## 2.0.2 - Bug fixes and certain improvements
- If a word has `<` or `>`, it will be ignored when applied e.g. `<table>` will be ignored
- Can be used in any language file, if it contains html and is applied against a known html tag e.g. `div`, `abbr`
