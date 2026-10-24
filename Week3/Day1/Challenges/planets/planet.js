const planets = [
	{ name: "Mercury", color: "#8c8c8c", moons: 0 },
	{ name: "Venus", color: "#d9a441", moons: 0 },
	{ name: "Earth", color: "#2878c7", moons: 1 },
	{ name: "Mars", color: "#c1440e", moons: 2 },
	{ name: "Jupiter", color: "#d8a878", moons: 95 },
	{ name: "Saturn", color: "#e6d3a3", moons: 146 },
	{ name: "Uranus", color: "#78d1d1", moons: 28 },
	{ name: "Neptune", color: "#3155c6", moons: 16 },
];

const planetList = document.querySelector(".listPlanets");

planets.forEach(({ name, color, moons }) => {
	const planet = document.createElement("div");
	planet.classList.add("planet");
	planet.style.backgroundColor = color;
	planet.setAttribute("aria-label", `${name}, ${moons} moons`);
	planet.append(document.createTextNode(name));

	for (let i = 0; i < moons; i++) {
		const moon = document.createElement("div");
		moon.classList.add("moon");
		moon.setAttribute("aria-label", `${name} moon ${i + 1}`);

		const angle = (2 * Math.PI * i) / moons;
		const radius = 65 + (i % 3) * 12;
		moon.style.left = `calc(50% + ${radius * Math.cos(angle)}px)`;
		moon.style.top = `calc(50% + ${radius * Math.sin(angle)}px)`;
		moon.style.transform = "translate(-50%, -50%)";
		planet.appendChild(moon);
	}

	planetList.appendChild(planet);
});