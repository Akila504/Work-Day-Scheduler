const currentDay = $("#currentDay")
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

//color code the data by comparing the current time against the timeblock time 


let hour = [];

for (let i = 1; i < 10; i++) {
  const element = $(`#hour${[i]}`).text()
  hour.push(element)
}


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





//function for saving our data to local storage if the save button is clicked 
//iterate through our hour array length and set a local storage item corresponding to that hour 
//if there is already a value in the text we will replace it with what we put in new 
//else we will set the tbvalue to local storage

function savingData() {
  for (let i = 0; i < hour.length; i++) {
    $(".saveBtn").on("click", function (e) {
      e.preventDefault()

      let tbValue = $(`#text${i}`).val()
      let StoredJson = JSON.parse(localStorage.getItem(`tbData${[i]}`))
      StoredJson = tbValue


      if (StoredJson !== null) {
        tbValue = StoredJson
        localStorage.setItem(`tbData${[i]}`, JSON.stringify(tbValue))
      } else {
        localStorage.setItem(`tbData${[i]}`, JSON.stringify(tbValue))
      }

    })
  }
}

savingData()



//if the page is refreshed we want the text area data to still be present
// let a variable equal to the localstorage 
// set the data to the inner text of the text area.
for (let i = 0; i < hour.length; i++) {
  let history = JSON.parse(localStorage.getItem(`tbData${[i]}`))
  let tbValue = history
  console.log(history)
  document.getElementById(`text${i}`).innerText = tbValue
}


