//get a reference to the calculate button
const mycalculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringField = document.querySelector(".billString");
//get a reference to the total element
const billTotalColor = document.querySelector(".total"); 
//alert(mycalculateBtn);


//create the function that will be called when the calculate button is pressed

function totalPhoneBill(billString){
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    return  roundedBillTotal;

}
function styleTotalColor(roundedBillTotal){
    const currentTotal = Number(roundedBillTotal);
// remove the color total 
    billTotalColor.classList.remove("danger");
    billTotalColor.classList.remove("warning");
//add the coloe total
    if(currentTotal >= 30){
        // make the total red
        billTotalColor.classList.add("danger");
    }else if(currentTotal >= 20 && currentTotal < 30){
        //make the total orange
        billTotalColor.classList.add("warning");
    }

}


function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;
    const roundedBillTotal = totalPhoneBill(billString);
    
    billTotalElement.innerHTML = roundedBillTotal;
    styleTotalColor(roundedBillTotal);
}
mycalculateBtn.addEventListener('click', calculateBtnClicked);