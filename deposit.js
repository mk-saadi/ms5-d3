// deposit

// step 1: add addEventListener to "btn-deposit"

document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the deposit amount from the "deposit-input" field
    // always remember to use ".value" to get text from an input field
    const depositField= document.getElementById('deposit-field');
    const depositAmount= depositField.Value;
    console.log(depositAmount)
})