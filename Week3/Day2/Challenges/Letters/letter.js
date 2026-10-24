const input = document.createElement("input");
input.type = "text";
input.addEventListener("input", () => {
	input.value = input.value.replace(/[^a-z]/gi, "");
});

document.body.appendChild(input);