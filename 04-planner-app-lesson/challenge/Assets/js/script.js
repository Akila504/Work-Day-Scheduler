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





//if clicked on save button set the data to local storage 
//if there is data already in local storage we will append the text to the inner text of the html 

function savingData() {
  for (let i = 0; i < hour.length; i++) {
    $(".saveBtn").on("click", function (e) {

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




for (let i = 0; i < hour.length; i++) {
  let history = JSON.parse(localStorage.getItem(`tbData${[i]}`))
  let tbValue = history
  console.log(history)
  document.getElementById(`text${i}`).innerText = tbValue
}


