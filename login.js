// Login recognition

// add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address from inside the email input field
    // always remember to use ".value" to get text from an input field
    const emailField= document.getElementById('user-email');
    const email= emailField.value;
    
    // step 3: get the password
    const passwordField= document.getElementById('user-password');
    const password= passwordField.value;
    console.log(email, password)

    // WARNING: DO NOT verify email password on the client side
    // step 4: verify email and password and check whether valid user or not
    if(email=== 'mksaadi@gmail.co' && password=== 'secret'){
        window.location.href= 'bank.html'
    }
    else{
        alert('invalid password or email')
    }
})