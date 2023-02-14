// deposit

// step 1: add addEventListener to "btn-deposit"

document.getElementById("btn-deposit").addEventListener("click", function () {
    // step 2: get the deposit amount from the deposit input field
    // always remember to use ".value" to get text from an input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3: get the current deposit total
    // for non-input(elements other than input, textarea)- use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

//   step 4: add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

//   set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

//   step 5: get current total balance
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//   step 6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

// set current total balance
  balanceTotalElement.innerText = currentBalanceTotal;

// step 7: clear the input field
  depositField.value = '';
});

// 'default' hisebe html er maan 'string' thake, etake 'number' e transform korte hay jodi four arithmetic operation korte hay
// "parseFloat" dile 'string' , 'number'- transform hobe (45.3)
// "parseInt" dile 'string', 'number'- e transform hobe (45)