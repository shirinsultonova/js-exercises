// FizzBuzz
var elFormFizz = document.querySelector(".site-fizbuz-form");
var elInput = elFormFizz.querySelector(".site-input");
var elAlert = document.querySelector(".site-alert");

elFormFizz.addEventListener("submit", function(evt){
    evt.preventDefault()
    
    var inputValue = elInput.value;
    
    if (inputValue % 3 == 0 && inputValue % 5 == 0){
        elAlert.textContent = "FIZZBUZZ !";
    } else if (inputValue % 3 == 0){
        elAlert.textContent = "FIZZ !";
    } else if (inputValue % 5 == 0 ){
        elAlert.textContent = "BUZZ !";
    } else{
        elAlert.textContent = "This number is not divisible by 3 or 5 !";
    }
    elInput.value = ""
})




// Currency Converter
var elCurrencyForm = document.querySelector("#currency_form");
var elCurrencyInput = document.querySelector("#currency_input");
var elCurrencySelect = document.querySelector("#currency_select");
var elCurrencyOutput = document.querySelector("#currency_output");

elCurrencyForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    elCurrencyOutput.textContent = elCurrencyInput.value * elCurrencySelect.value
})
