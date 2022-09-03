function ask(question,yes,no){
(confirm(question)) ?yes(): no();
}
ask("do you agree?",()=>alert("You agreed."),()=>alert("You canceled the execution."))