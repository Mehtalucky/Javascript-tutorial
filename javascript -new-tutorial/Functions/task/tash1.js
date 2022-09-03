// Will the function work differently if else is removed?

function premission(age) {
    age=prompt("Enter your age?")
if(age>18) {
    return true;
} //else {
return confirm("Did your parents allow you?");
// }
}
if(premission()===true){
    alert("Access allowed");
} else {
    alert("Access denied");
}
