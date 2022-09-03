//string concations with binary +

// Usually, the plus operator + sums numbers.
// But, if the binary + is applied to strings, it merges (concatenates) them:
let a="Lucky";
let b="Mehta";
console.log(a+b);//

// Note that if any of the operands is a string, then the other one is converted to a string too.

// For example:

let str="1";
let str2=4;
console.log(str+str2);// output is string '14'
console.log(str2+str);//output is string 41

//See, it doesn’t matter whether the first operand is a string or the second one.
//Here’s a more complex example:
let x=2;
let y=3;
let z="4";
console.log(x+y+z);// output is 54
console.log(z+y+x);// output is 432

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:

let a1="6";
let a2="3";
console.log(a1-a2);// output is 3 (number)
console.log(a1-"2");// output is 4
console.log(a1/"2");//output is 3
console.log("12"/a2);//output is 4