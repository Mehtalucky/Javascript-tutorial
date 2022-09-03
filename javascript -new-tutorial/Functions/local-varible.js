// varible declare inside the function that is local varible
// (1)
// function localvarible() {
//     let local="I m local varible.";
//     return console.log(local);
// }
// localvarible();

// (2
function myFunction(a,b) {
    function sum(){
    //     // let a=2,b=4;
        return a+b;
    }
    return console.log(a,b);
}
console.log(myFunction(2,4))

// function anc(a,b){
//     return a+b;
// }
// console.log(anc(2,5));