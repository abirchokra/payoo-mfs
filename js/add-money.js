document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('Add money button clicked');
    const addMoney = getInputValue('add-money-input');
    const pin = getInputValue('pin-input');
    if (isNaN(addMoney)) {
        alert('Failed to add money');
        return;
        
    }
    if (pin === 1234) {
        const amount = getTextValue('account-balance');
        const newBalance = amount + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
        // console.log(newBalance);
        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added ${addMoney} Tk New Balance: ${newBalance} BDT`
        document.getElementById('transaction-container').appendChild(p);
     
        
    }else{
        alert('Failed to add money');
    }

})