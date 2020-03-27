const fs = require('fs-extra');
const { format } = require('fecha');
const { removeItem } = require('./utils');
const package = require('./package.json');
const record = require('./record.json');

main();

function main() {
  let images = fs.readdirSync('./images');
  removeItem(images, '.gitkeep');
  if (!images.length) throw new Error();

  const newPackage = updateVersion(package);
  const newData = images.map(image => ({
    name: image,
    createdAt: format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    url: `https://cdn.jsdelivr.net/npm/${newPackage.name}@${newPackage.version}/images/${image}`,
  }));
  const newRecord = newData.concat(record);

  fs.writeFileSync('./package.json', JSON.stringify(newPackage, null, 2));
  fs.writeFileSync('./record.json', JSON.stringify(newRecord, null, 2));
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
