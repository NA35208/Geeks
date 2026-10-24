const capitalizer = (str) => {
    let str1 = '';
    let str2 = '';

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            str1 += str[i].toUpperCase();
            str2 += str[i].toLowerCase();
        } else {
            str1 += str[i].toLowerCase();
            str2 += str[i].toUpperCase();
        }
    }

    console.log(str1);
    console.log(str2);
};

capitalizer("abcdef");