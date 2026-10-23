let guestList = {
	randy: "Germany",
	karla: "France",
	wendy: "Japan",
	norman: "England",
	sam: "Argentina"
};

let nom = prompt("What is your name?");

if (nom in guestList) {
	console.log(`Hi! I'm ${nom}, and I'm from ${guestList[nom]}.`);
} else {
	console.log("Hi! I'm a guest.");
}