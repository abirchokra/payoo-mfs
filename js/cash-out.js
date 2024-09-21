document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = getInputValue('cash-out-input');
    const cashOutPin = getInputValue('cash-out-pin-input');
    if (isNaN(cashOutAmount)) {
        alert('Failed to cash out');
        return;
    }
    if (cashOutPin === 1234) {
        const totalAmount = getTextValue('account-balance');
        if (cashOutAmount > totalAmount) {
            alert("You do not have enough money");
            return;
        }
        const newBalance = totalAmount - cashOutAmount;
        document.getElementById('account-balance').innerText = newBalance;

        // method one for transaction:
        // const p = document.createElement('p');
        // p.innerText = `Cash Out ${cashOutAmount} Tk New Balance: ${newBalance} BDT`
        // document.getElementById('transaction-container').appendChild(p);

        // method two for transaction :
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class='text-2xl font-bold '>Cash Out</h4>
            <p>${cashOutAmount} Withdraw . New Balance ${newBalance}</p>
        
        `
        document.getElementById('transaction-container').appendChild(div);


    } else {
        alert('Failed To Cash Out');
    }

})