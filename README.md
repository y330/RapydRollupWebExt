# Rapyd Rollup Web Ext


_under construction_

**Actually, this is using [rollup.js](https://rollupjs.org/), not webpack.**

This experimental extension is a calendar extension, and it demonstrates compiling python(`.pyj` files) to Javascript, then using the [rollup plugin chrome extension](https://github.com/extend-chrome/rollup-plugin-chrome-extension/) package from NPM to build the extension files for live reloading in the browser. 

This is a webextension made using rapydscript, a pythonic flavour of javascript. Want to find out more? go to [RapydScript Github repo](https://github.com/atsepkov/RapydScript/)

----

These are the scripts in `package.json`

```json
        "build": "npm run convert && rollup -c",
        "start": "rollup -c -w",
        "popup": "rapydscript src/python/popup.pyj > popup.js && mv popup.js ./src/scripts",
        "options": "rapydscript src/python/options.pyj > options.js && mv options.js ./src/scripts",
        "convert": "npm run popup && npm run options"
```
