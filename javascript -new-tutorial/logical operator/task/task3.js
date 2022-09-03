let ask=prompt("Who's there?");
if(ask==="Admin") {
    let pass=prompt("enter your password?");
    if(pass==="TheMaster") {
        alert("Welcome!");
    } else if(pass==="" || pass===null) {
        alert("Cancelled");
    } else {
        alert("Wrong Password?");
    }
} else if(ask==='' || ask===null) {
    alert("cancelled");
} else {
    alert("I don't know you?");
}