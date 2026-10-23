const person1 = {
    FullName: "Nadia ck",
    Mass: 72,
    Height: 1.78,
    calculateBMI() {
        return this.Mass / (this.Height ** 2);
    },
};

const person2 = {
    FullName: "Khadija ck",
    Mass: 85,
    Height: 1.8,
    calculateBMI() {
        return this.Mass / (this.Height ** 2);
    },
};

function compareBMI(personA, personB) {
    if (personA.calculateBMI() > personB.calculateBMI()) {
        return personA.FullName;
    }
    if (personB.calculateBMI() > personA.calculateBMI()) {
        return personB.FullName;
    }
    return "Both people have the same BMI";
}

console.log(compareBMI(person1, person2));

