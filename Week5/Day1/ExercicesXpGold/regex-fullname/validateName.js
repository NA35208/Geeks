function validateFullName(name) {
  if (typeof name !== 'string') return false;

  const fullNameRegex = /^[A-Z][a-zA-Z]* [A-Z][a-zA-Z]*$/;
  return fullNameRegex.test(name.trim());
}

module.exports = validateFullName;
