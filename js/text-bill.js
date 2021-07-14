// get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");

//referencing the template
const userTemplateElem = document.querySelector('.userTemplate').innerHTML

 //Compile the template
 var userTemplate = Handlebars.compile(userTemplateElem);

//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed
    function textBillTotal(){
        // get the value entered in the billType textfield
        var billTypeEntered = billTypeTextElement.value.trim();
        // update the correct total
        if (billTypeEntered === "call"){
            callsTotal += 2.75;
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }
        
        //update the totals that is displayed on the screen.
        callsTotalElem.innerHTML = userTemplate({callTotalOne:callsTotal.toFixed(2)});
        smsTotalElem.innerHTML = userTemplate({smsTotalOne:smsTotal.toFixed(2)});
        var totalCost = callsTotal + smsTotal;
        totalCostElem.innerHTML = userTemplate({totalOne:totalCost.toFixed(2)});

        //add color

        if (totalCost >= 50){
            // adding the danger class will make the text red
            totalCostElem.classList.add("danger");
        }
        else if (totalCost >= 30){
            totalCostElem.classList.add("warning");
        }
    };

        
    addToBillBtnElement.addEventListener('click', textBillTotal);
//});


//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
//addToBillBtnElement.addEventListener("click", addToBillBtnClicked);