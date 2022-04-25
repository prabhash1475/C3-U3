// Store the wallet amount to your local storage with key "amount"
document.getElementById('add_to_wallet').addEventListener('click', function () {
    var amount = document.getElementById('amount').value

    localStorage.setItem('amount', JSON.stringify(Number(amount)))

    document.getElementById('wallet').innerText = amount;
})