/**
 * 1. add event handler with withdraw button
 * 2. get the withdraw amount from withdraw input field
 * 2.5 also make sure to convert the input into number using "parseFloat"
 * 3. get previous withdraw total
 * 4. calculate total withdraw amount
 * 4.5. set total withdraw amount
 * 5. get the 'previous balance total'
 * 6. calculate new balance total
 * 6.5 set the new balance total
 * 7. clear the input field
 */

// step 1

document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2:
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.Value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  console.log(newWithdrawAmount);
});
