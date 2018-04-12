'use babel';

import { CompositeDisposable } from 'atom';

const _match = (text, pattern) => {
  return text.match(pattern) ? text.match(pattern) : [''];
};

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'html-tag-auto-complete:run': () => this.run()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  run() {
    let editor;
    let idPattern = /#[^#.]+/g;
    let classPattern = /\.[^#.]+/g;
    let tagPattern = /^[^#.]+/g;
    let replaceable = '';

    if (editor = atom.workspace.getActiveTextEditor()) {
      let currentLine = editor.getLastCursor().getCurrentBufferLine();
      let lastWord = currentLine.split(' ').slice(-1)[0];
      if (lastWord.endsWith(' ')) {
        return;
      }

      editor.selectLeft(lastWord.length);

      let tag = _match(lastWord, tagPattern)[0];
      let id = _match(lastWord, idPattern)[0].replace(/#/g, '');
      let classes = _match(lastWord, classPattern)
      .join(' ').trim().replace(/\./g, '');
      // jsx or not
      let classAttrName = editor.getText().includes('className=')
        ? 'className'
        : 'class';

      replaceable = id && classes ?
            `<${tag} id="${id}" ${classAttrName}="${classes}"></${tag}>`
            : id ? `<${tag} id="${id}"></${tag}>`
            : classes ? `<${tag} ${classAttrName}="${classes}"></${tag}>`
            : `<${tag}></${tag}>`

      editor.insertText(replaceable);
    }
  }



};
