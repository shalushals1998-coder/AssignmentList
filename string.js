let str = 'Testleaf'
let rev =''
let len= str.length
for (i=len-1;i>=0;i--){
rev = rev + str.charAt(i)
}

console.log("The given string is",str );
console.log("The reversed string is",rev);
