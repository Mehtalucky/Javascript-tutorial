// getText("fetch-api/json.txt");
// async  function getText(file) {
// let x= await fetch(file);
// let y=await x.text();

// console.log(y)

// document.getElementById("root").innerHTML=y;

// }


var data = JSON.parse(fs.readFileSync(fetch-api/JSON.txt));
console.log(data)
