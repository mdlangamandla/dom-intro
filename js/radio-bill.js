// get a reference to the sms or call radio buttons
const callTotalTwoElem = document.querySelector('.callTotalTwo');
const smsTotalTwoElem = document.querySelector('.smsTotalTwo');
const billItemTypeRadio = document.querySelector('.billItemTypeRadio');
const totalTwoElem = document.querySelector('.totalTwo');

//get a reference to the add button
const radioBillAddBtnElement = document.querySelector('.radioBillAddBtn');

//REFERENCE A TEMPLATE
const radioUserTemplateElem = document.querySelector('.userTemplate').innerHTML

 //COMPILE A TEMPLATE
 var userTemplate = Handlebars.compile(radioUserTemplateElem);

//create a variable that will keep track of the total bill
var call = 0;
var sms = 0;

//add an event listener for when the add button is pressed

//adding a value when radio is checked
function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    
    if(billItemType === "call"){
        call += 2.75;
    }
    if(billItemType === "sms"){
        sms += 0.75;
    }

    callTotalTwoElem.innerHTML = userTemplate({callTotalTwo:call.toFixed(2)});
    smsTotalTwoElem.innerHTML = userTemplate({smsTotalTwo:sms.toFixed(2)});
    var totalCost = call + sms;
    totalTwoElem.innerHTML = userTemplate({totalTwo:totalCost.toFixed(2)});
}

if (totalCost >= 50){
    // adding the danger class will make the text red
    totalTwoElem.classList.add("danger");
}
else if (totalCost >= 30){
    totalTwoElem.classList.add("warning");
}

}

//in the event listener get the value from the billItemTypeRadio radio buttons
radioBillAddBtnElement.addEventListener('click', radioBillTotal);

// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
