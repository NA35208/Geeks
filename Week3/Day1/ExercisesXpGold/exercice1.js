/*const isBlank=(str)=>{
   if (str =="" || str ==" "){
	return true;
   }
   return false;
};
console.log(isBlank(''));
console.log(isBlank('abc'));
console.log(isBlank(''));*/
const isBlank=(str)=>{
   return str.trim() === "";
};
console.log(isBlank(''));
console.log(isBlank('abc cd'));
