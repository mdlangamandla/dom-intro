
// get a reference to the sms or call radio buttons
const callSettingsElem = document.querySelector('.callTotalSettings')
const smsSettingsElem = document.querySelector('.smsTotalSettings')
const totalSettingElem = document.querySelector('.totalSettings')

// get refences to all the settings fields
const callTotalCostElem = document.querySelector('.callCostSetting')
const smsTotalCostElem = document.querySelector('.smsCostSetting')
const criticalLevelElem = document.querySelector('.criticalLevelSetting')
const warningLevelElem = document.querySelector('.warningLevelSetting')

//get a reference to the add button
const addBtn = document.querySelector('.addedBtn')

//get a reference to the 'Update settings' button
const updateBtn = document.querySelector('.updateSettings')

// create a variables that will keep track of all the settings
var smsTotalCostSetting = 0;
var callTotalCostSetting = 0;
var critcicalValueSetting = 0;
var warningValueSetting = 0;

// create a variables that will keep track of all three totals.
var smsTotal3 = 0;
var callTotal3 = 0;
var overallTotal3 = 0;

//add an event listener for when the 'Update settings' button is pressed
function settingTotal (){
smsTotalCostSetting = Number(smsTotalCostElem.value)
callTotalCostSetting = Number(callTotalCostElem.value) 
critcicalValueSetting = criticalLevelElem.value
warningValueSetting = warningLevelElem.value
console.log({smsTotalCostSetting});
addAndRemoveClasses()
}
updateBtn.addEventListener("click", settingTotal )

//add an event listener for when the add button is pressed
function addButtonSettings(){
 

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

 if(overallTotal3 < critcicalValueSetting){
    if (checkedRadioBtn){
        var billItemType1 = checkedRadioBtn.value

    

    if (billItemType1 === "call"){
        callTotal3 += callTotalCostSetting
    }
    else if (billItemType1 === "sms"){
        smsTotal3 += smsTotalCostSetting
    }
}
 }
    

callSettingsElem.innerHTML = callTotal3.toFixed(2);
smsSettingsElem.innerHTML = smsTotal3.toFixed(2);
    overallTotal3 = callTotal3 + smsTotal3;
    totalSettingElem.innerHTML = overallTotal3.toFixed(2);
    addAndRemoveClasses()
  
} 

function addAndRemoveClasses(){
    totalSettingElem.classList.remove('warning')
    totalSettingElem.classList.remove('danger')

    if(overallTotal3 >= parseFloat(critcicalValueSetting)){
        totalSettingElem.classList.add('danger')
    }
    else if(overallTotal3 >= parseFloat(warningValueSetting) ) {
        totalSettingElem.classList.add('warning')
        
    }
}

addBtn.addEventListener("click", addButtonSettings )
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.