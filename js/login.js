document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault(); // <----------------- vejal to begianners
    // console.log('some one is clicked by the login');

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are login');
        window.location.href = './home.html';
    }else{
        alert('wrong phone number and pin')
    }
})