function returnNumbers(input) {
  if (typeof input !== 'string') return '';
  const matches = input.match(/\d/g);
  return matches ? matches.join('') : '';
}

module.exports = returnNumbers;
