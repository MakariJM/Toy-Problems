// function to calculate payee, the function takes in pay and calculates the payee based on the conditions

function payee(pay) {
    if (pay <= 24000) {
      return console.log(pay * 0.1);
    } else if (pay >= 24001 && pay <= 32333) {
      return console.log(pay * 0.25);
    } else if (pay >= 32334 && pay <= 500000) {
      return console.log(pay * 0.3);
    } else if (pay >= 500001 && pay <= 800000) {
      return console.log(pay * 0.325);
    } else if (pay >= 800000) {
      return console.log(pay * 0.35);
    } else {
      return console.log("invalid value");
    }
  }
  
  // function to calculate nssf deductions
  function rates(tire) {
    if (tire <= 6000) {
      return console.log("tire1:", tire * 0.06);
    }
    if (tire >= 6001 && tire <= 18000) {
      return console.log("tire2:", tire * 0.06);
    }
  }