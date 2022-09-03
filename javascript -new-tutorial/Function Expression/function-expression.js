// function  sayHii() {//function declaration
//     alert("hello");
// }
// sayHii();
// let sayHii=function() {// function expression
//     alert("functionexpression");
// }
// alert(sayHii)
function ask(question,yes,no) {
if(confirm(question)) yes()
else no();

}
function showOk() {
    alert("success")
}
function notOk() {
    alert("not success")
}
ask("enter any botton",showOk,notOk);