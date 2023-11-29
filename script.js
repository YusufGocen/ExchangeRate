
const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#FirstOption");
const secondOption = document.querySelector("#SecondOption");
const resultInput = document.querySelector("#result"); 
const currency = new Currency();

function runEventListeners(){
    amountInput.addEventListener("input",exchange);
}
runEventListeners();


function exchange(){
  const amount = Number(amountInput.value.trim());
  const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;


  currency.exchange(amount,firstOptionValue,secondOptionValue)
  .then((result)=>{
    resultInput.value=result.toFixed(3);
  })

}