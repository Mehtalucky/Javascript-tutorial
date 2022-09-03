// Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

// Using a question mark operator '?':
function checkAge(age) {
    age=prompt("Enter your age?")
    // return (age>18)?true:confirm("Did parents allow you?");
    // Using OR || (the shortest variant):
    return age>18 || confirm("Did your parents allow you?");
}


(checkAge()===true)?alert("Access allowed"):alert("Access denied");