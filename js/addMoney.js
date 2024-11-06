// s-1 : Set Event handler to the btn-add-money
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // console.log('btn-add-money is clicked');

// set preventDefault() behavior 
event.preventDefault();
    // step 2: get the money user wants to do . Also the pin number provided 
const addMoney = document.getElementById('input-add-money').value;
const addMoneyNumber = parseFloat(addMoney);
const pinNumber = document.getElementById('input-pin-number').value;
console.log(addMoney, pinNumber);


    // step 3: Verify the pin Number // wrong way
    if(pinNumber === '1234'){

        // step 4: Get the current balance 
        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);
        const balanceNumber = parseFloat(balance);

        // step 5: add money to be added with the current balance 
        const newBalance = addMoneyNumber + balanceNumber;

        // step 6 : Update the balance with UI / DOMException. 
        document.getElementById('account-balance').innerText = newBalance;
        window.location.href ='./index.html';


    }

    else{
        alert('Failed to add money. Please! Try again');
    }
})


