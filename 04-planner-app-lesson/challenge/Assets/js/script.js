const currentDay = $("#currentDay")
// const textArea = $("textarea")
const currentTime = parseInt(dayjs().format('H'))



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

let hour = [];

for (let i = 1; i < 10; i++) {
  const element = $(`#hour${[i]}`).text()
  hour.push(element)
}


// const example1 = dayjs().hour(parseInt(hour[1]))
// const example2 = parseInt(dayjs(example1).format('H'))
// console.log(typeof example2)




function colorCode() {
  for (let i = 0; i < hour.length; i++) {
    const textTime = dayjs().hour(parseInt(hour[i]))
    const timeBlockTime = parseInt(dayjs(textTime).format('H'))

    if (timeBlockTime < currentTime) {
      $(`#text${i}`).addClass('past')
    }
    else if (timeBlockTime === currentTime) {
      $(`#text${i}`).addClass('present')
    }
    else if (timeBlockTime > currentTime) {
      $(`#text${i}`).addClass('future')
    }
  }
}

colorCode()



//select all the data using jquery
//On click of the save button we want to save the input to local storage
//if there exists data in local storage then we want to push the data into the text selector
//this will mean the data will remain even on refresh 


