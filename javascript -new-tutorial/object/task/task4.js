let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  function multipleNumeric() {
  for (key in menu) {
      if(typeof menu[key]=="string") continue;
      else menu[key] *=2;
  }
  return menu;
  }
  console.log(multipleNumeric());