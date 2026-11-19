let faker;
try {
  faker = require('@faker-js/faker').faker;
} catch (e) {
  try {
    faker = require('faker');
  } catch (err) {
    faker = null;
  }
}

const users = [];

function generateFakeUser() {
  if (faker) {
    const fullName = faker.person ? faker.person.fullName() : faker.name.findName();
    const street = faker.location ? faker.location.streetAddress() : faker.address.streetAddress();
    const country = faker.location ? faker.location.country() : faker.address.country();
    return {
      name: fullName,
      address_street: street,
      country: country
    };
  }

  const names = ['Alice Dupont', 'Bob Martin', 'Charlie Bernard', 'David Leroy'];
  const streets = ['123 Rue de Paris', '45 Avenue des Champs', '8 Boulevard Saint-Michel'];
  const countries = ['France', 'Canada', 'Belgium', 'Switzerland'];
  
  return {
    name: names[Math.floor(Math.random() * names.length)],
    address_street: streets[Math.floor(Math.random() * streets.length)],
    country: countries[Math.floor(Math.random() * countries.length)]
  };
}

function addFakeUsers(count = 5) {
  for (let i = 0; i < count; i++) {
    const user = generateFakeUser();
    users.push(user);
  }
  return users;
}

function addUser(name, address_street, country) {
  const user = { name, address_street, country };
  users.push(user);
  return user;
}

module.exports = {
  users,
  addFakeUsers,
  addUser
};
