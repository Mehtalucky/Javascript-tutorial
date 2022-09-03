// Rewrite the "switch" into an "if"


// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
// }


let browser=prompt("enter your browser");
if(browser==="Edge") {
    alert("you have got the Edge.");
} else if(browser==="Chrome" || browser==="Firefox" || browser==="Safari" || browser==="Opera") {
    alert("Okay wesupport these browsers too.");
} else {
    alert("We hope that this page looks ok!");
}
