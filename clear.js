const fs = require('fs-extra');

fs.removeSync('./images')
fs.mkdirSync('./images')
fs.writeFileSync('./images/.gitkeep', '')