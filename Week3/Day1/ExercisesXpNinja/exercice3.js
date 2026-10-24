const isPalindrome = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return normalized === normalized.split("").reverse().join("");
};

console.log(isPalindrome("madam")); 
console.log(isPalindrome("The Quick Brown Fox")); 