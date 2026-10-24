const waps = (str) => {
    return str
        .split("")
        .map((char) => {
            if (char >= "a" && char <= "z") return char.toUpperCase();
            if (char >= "A" && char <= "Z") return char.toLowerCase();
            return char;
        })
        .join("");
};
console.log(waps('The Quick Brown Fox'))