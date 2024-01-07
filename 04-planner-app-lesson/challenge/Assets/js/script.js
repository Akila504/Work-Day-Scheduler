
const currentDay = $("#currentDay")



//Second part once the HTML is done

//2.1 SHould display the date and the current time using day JS
//So select the CURRENT DAY id
//use day js
//append day js to the header selctor
function displaydaytime() {
  const today = dayjs()
  currentDay.text(today)
}
//calling the displaydaytime every 1 second 
setInterval(displaydaytime, 1000)

//2.2 color coding

function colorCode() {



}

//if the time right now is less than the time on the time block then apply class past
//if the time right now is within the timeblock then apply class present
//if the time right now is less than the timeblock time than apply the clas future

//select all the data using jquery
//On click of the save button we want to save the input to local storage
//if there exists data in local storage then we want to push the data into the text selector
//this will mean the data will remain even on refresh 


