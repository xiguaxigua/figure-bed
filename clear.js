const fs = require('fs-extra');

fs.removeSync('./images')
fs.removeSync('./.npmrc')
fs.mkdirSync('./images')
fs.writeFileSync('./images/.gitkeep', '')
