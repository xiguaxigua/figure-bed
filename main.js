const fs = require('fs-extra');
const { format } = require('fecha');
const { removeItem } = require('./utils');
const package = require('./package.json');
const record = require('./record.json');

main();

function main() {
  let images = fs.readdirSync('./images');
  removeItem(images, '.gitkeep');
  if (!images.length) return;

  const newPackage = updateVersion(package);
  const newData = images.map(name => ({
    name,
    createdAt: format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    url: `https://cdn.jsdelivr.net/npm/figure-bed@${newPackage.version}/images/${name}`
  }))
  const newRecord = newData.concat(record)

  fs.writeFileSync('./package.json', JSON.stringify(newPackage, null, 2))
  fs.writeFileSync('./record.json', JSON.stringify(newRecord, null, 2))
}

function updateVersion(package) {
  let { version } = package;
  version = version
    .split('.')
    .map((value, index) => {
      if (index === 2) return +value + 1;
      return value;
    })
    .join('.');
  return Object.assign({}, package, { version });
}
