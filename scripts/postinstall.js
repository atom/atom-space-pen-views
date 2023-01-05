// If you want to bundle atom-space-pen-views as a dependency use this script to copy the stylesheets to your package's root.

// Add the following to your package.json:
// "prebuild": "node ./node_modules/atom-space-pen-views/scripts/postinstall.js"

var fs = require('fs-extra')

function copyStyleSheet () {
  fs.copySync(__dirname + '/../stylesheets', __dirname + '/../../../stylesheets')
}

copyStyleSheet()
