// Declar global variables for the functions
var principal;
var rate;
var years;
var interest;
var year;

// function to update the HTML value for rate <span> 
function updateRate() 
{
    // create a local variable to hold the rate set in the slider
    var rateval = document.getElementById("rate").value;

    // update the text -- not HTML -- of the rate span.
    document.getElementById("rate_val").innerText=rateval;
} // close updateRate()

// function to compute the money accrued.
function compute()
{
    // find out how much money the user is investing
   principal = document.getElementById("principal").value;

    // validate the data entered by checking if the amount is empty, less than, or equal to zero
   if (principal < 1) {
        // creates a pop up to make sure the user sees what went wrong
        alert("Enter a positive number");
        // auto-adjusts the user's input focus back to where the error occured / was found
       document.getElementById("principal").focus()
       // exits the function
       return;
   }

   // if the principal rate is validated, run the rest of the funciton

   // get the rate from the input
   rate = document.getElementById("rate").value;

   // get the years from the input
   years = document.getElementById("years").value;

   // get the interestest from the input
   interest = principal * years * rate /100;

   // get the year from the current date() and then add the years of investment in the input
   year = new Date().getFullYear()+parseInt(years);

   // show the user the results by adjusting the HTML of the results span.
   document.getElementById("result").innerHTML =     "If you deposit <mark>" + principal + "</mark>," + "<br>at an interest rate of <mark>" + rate + "</mark><br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + year + "</mark><br>"
}