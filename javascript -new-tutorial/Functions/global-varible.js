let global="hii im a global varible.";
function globalVarible() {
    global=35;
    return global;
}
// console.log(globalVarible());//if function is call before then varible value is reassign
console.log(global);
console.log(globalVarible());// after call function varible value is new if changed any