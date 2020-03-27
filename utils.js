const removeItem = (array, target) => {
  const index = array.indexOf(target);
  if (index > -1) array.splice(index, 1);
};

module.exports = { removeItem };
