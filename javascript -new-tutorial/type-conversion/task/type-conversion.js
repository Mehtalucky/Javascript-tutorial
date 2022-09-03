console.log("" + 1 + 0);// string "10"

console.log("" - 1 + 0);// number -1

console.log(true + false);//number 1

console.log(6 / "3");// number 2

console.log("2" * "3");// number 6

console.log(4 + 5 + "px");// string 9px

console.log("$" + 4 + 5);// string $45

console.log("4" - 2);// number 2

console.log("4px" - 2);// number NaN

console.log("  -9  " + 5);// string -95

console.log("  -9  " - 5);// number -14

console.log(null + 1);// number 1

console.log(undefined + 1);// undefined *(undefined becomes NaN after the numeric conversion.)

console.log(" \t \n" - 2);// number NaN*(Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.)