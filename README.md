# detect-emoji-support
Detect support for emoji character sets.

```js
const emojiSupport = require('detect-emoji-support');

if (emojiSupport()) {
    console.log('☕');
}
```

Detection code ported from the Modernizr library into a stand-alone package.
https://github.com/Modernizr/Modernizr/blob/v3.5.0/feature-detects/emoji.js
