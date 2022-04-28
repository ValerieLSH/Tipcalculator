//Calculate Tip
//function calculateTip() {
//    var tbill = document.getElementById("tbill").value;
//     var slevel = document.getElementById("slevel").value;
//     var psharing = document.getElementById("psharing").value;
  
//     //validate input
//     if (tbill === "" || slevel == 0) {
//       alert("Please enter values");
//       return;
//     }
//     //Check to see if this input is empty or less than or equal to 1
//     if (psharing === "" || psharing <= 1) {
//       psharing = 1;
//       document.getElementById("each").style.display = "none";
//     } else {
//       document.getElementById("each").style.display = "block";
//     }
  
//     //Calculate tip
//     var total = (tbill * slevel) / psharing;
//     //round to two decimal places
//     //total = Math.round(total * 100) / 100;
//     //next line allows us to always have two digits after decimal point
//     //total = total.toFixed(2);

//     //Display the tip
//     document.getElementById("ttip").style.display = "block";
//     //document.getElementById("tip").innerHTML = total;
  
//   }
  
//   //Hide the tip amount on load
//   document.getElementById("ttip").style.display = "none";
//   document.getElementById("each").style.display = "none";
  
  //click to call function
  //document.getElementById("calculate").onclick = function() {
  //calculateTip();
  
//  };
let calculate = document.getElementById("calculate");

calculate.addEventListener('click', () => {
    let tBill = document.getElementById("tBill").value;
    let tipPercentage = document.getElementById("tipPercentage").value;
    let noofpax = document.getElementById("noofpax").value;

    //validate 
    if(tBill === '' || tipPercentage == 0 || noofpax == 0){
        alert ("Please enter values");
        return;
    }
    
    //calculate
    let totaltip = (tBill * tipPercentage) / noofpax;
    totaltip = totaltip.toFixed(2);

    document.getElementById('tip').innerHTML = totaltip;

    let totalamounttopay = (tBill / noofpax) + (tBill * tipPercentage) / noofpax;
    totalamounttopay = totalamounttopay.toFixed(2);

    document.getElementById('amttopay').innerHTML = totalamounttopay;
 
})