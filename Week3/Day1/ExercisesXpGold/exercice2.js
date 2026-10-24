const abbrevName=(str)=>{
 let strNew='';
 let indexofspace=str.indexOf(" ");
 strNew=str.slice(0,indexofspace);
 strNew=strNew+" "+str[indexofspace+1]+".";
 return strNew;
 

}
console.log(abbrevName("Robin Singh"));