document.getElementById('cash-out-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('some is clicked');
    const cashOut = document.getElementById('input-cash-out-money').value;
    // console.log(cashOut);
    const pinInput = document.getElementById('cash-out-pin-number').value;
    console.log(cashOut, pinInput);
    if(pinInput === '1234'){
        // console.log("mama kaj hoye geca sobai ready thako");
        const balanceValue = document.getElementById('balance').innerText;
        const showBalance = parseFloat(balanceValue);
        const balance = parseFloat(cashOut);
        const newBlance = balanceValue - balance;
        document.getElementById('balance').innerText = newBlance;
        document.getElementById('input-cash-out-money').value = '';
        document.getElementById('cash-out-pin-number').value = '';
        // console.log(blanceValue);
    }else{
        alert('Failed to add money! Please try again...')
    }
})