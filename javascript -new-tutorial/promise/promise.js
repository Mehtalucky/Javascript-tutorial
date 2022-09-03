function getData(out) {
document.getElementById("demo").innerHTML=`your process is ${out}.`
}
let myPromise= new Promise(function(resolve,reject) {
    let x=prompt("Enter data",5);
    if(x==5) {
        resolve("ok");
    } else {
        reject("error");
    }
});
myPromise.then(function(value) {
    getData(value);
},
function(value) {
    getData(value);
});