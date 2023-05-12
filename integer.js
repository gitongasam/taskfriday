function checkForEight(a, b) {
    if (a === 8 || b === 8) {
      return true;
    } else if (a + b === 8 ||(a - b) === 8) { 
      return true;
    } else {
      return false;
    }
  }
  
  console.log(checkForEight(8, 2)); 
    console.log(checkForEight(3, 11)); 
      console.log(checkForEight(10, 2));
  