
const currency_one=document.getElementById("currency-one");
const currency_two=document.getElementById("currency-two");
const amount_one=document.getElementById("amount-one");
const amount_two=document.getElementById("amount-two");

const rateEl=document.getElementById("rate");
const swap=document.getElementById('swap');



//fetch exchange rates and update the DOM
function calculate(){
   const currencyEl_one=currency_one.value;
   const currencyEl_two=currency_two.value;

   fetch(`https://v6.exchangerate-api.com/v6/0455c31a771143df2f1857fe/latest/${currencyEl_one}`)
   .then(res=>res.json())
   .then(data=>{
    //console.log(data);
    const rate=data.conversion_rates[currencyEl_two];

    rateEl.innerText=`1 ${currencyEl_one} =${rate} ${currencyEl_two}`;

    amount_two.value=(amount_one.value * rate).toFixed(2);
   })

}


//event listener
currency_one.addEventListener('change',calculate);
amount_one.addEventListener('change',calculate);
currency_two.addEventListener('input',calculate);
amount_two.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
    const temp=currency_one.value;
    currency_one.value=currency_two.value;
    currency_two.value=temp;
    calculate();
})

calculate();