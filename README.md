# detect-emoji-support
Detect support for emoji character sets.

```js
const emojiSupport = require('detect-emoji-support');

if (emojiSupport()) {
    console.log('☕');
}
```

Detection code ported from the Modernizr library into a stand-alone package.
https://github.com/Modernizr/Modernizr/blob/master/feature-detects/emoji.js
