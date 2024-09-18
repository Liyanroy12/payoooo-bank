document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addvalueMoney = parseFloat(addMoneyInput);

    /// The pin number
    const inputPin = document.getElementById('input-pin-number').value;

    if(inputPin === '1234'){
        // console.log('added money to your account');
        const blanceValue = document.getElementById('balance').innerText;
        const blance = parseFloat(blanceValue);
        const newBlance = blance + addvalueMoney;
        document.getElementById('balance').innerText = newBlance;
        document.getElementById('input-add-money').value = '';
        document.getElementById('input-pin-number').value = '';

    }else{
        alert('Failed to add money! Please try again...');
    }
})