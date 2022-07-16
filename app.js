$(document).ready(function(){

    $("#button").click(function(){
      let city = $("input").val();
      console.log(city)
     
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1bac5aca459e264eb7cf875cfcc14c2&units=imperial`)
        .then((response) => response.json())
        .then(function (data){
              
            console.log(data)
              
              let newCity = data.name;
              let temp = Math.round(data.main.temp);
              let newDesc = data.weather[0]["description"];
              let wind = data.wind.speed;
              let tempCelsius = Math.round(temp -32 *1.8)

              $('#city-name').html(`<p>Weather in <strong>${newCity}<strong> today</p>`);
              $('#temp-f').html(`<p>Temperature: ${temp} F</p>`)
              
              
              $('#temp-c').html(`<p>Temperature: ${tempCelsius} C</p>`)
              $('#desc').html(newDesc);
              $('#wind').html(`<p>wind ${wind} miles/h</p>`)

              
              $("input").val("")
              $("cityName").val("")
  
  })
})
  $('btn').click(function(){
    $()
  })
});



$("input").focus(function(){
  $("input.input-field").css({"background":"rgb(184, 146, 175", "color":"white"})
})
$("input").blur(function(){
  $("input.input-field").css({"background":"whitesmoke"})
})

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

let currentDate = new Date();
 let weekday = days[currentDate.getDay()]
let day = currentDate.getDate();
let month = months [currentDate.getMonth()];
let year = currentDate.getFullYear();
let fullDate = `${weekday}, ${day}. ${month} ${year}`


$(".date").html(fullDate);





  //const giphyImg = document.querySelector("img")
  

  
  // cloudy, partly cloudy, rain, sun, clear, 
  
  // fetch('https://api.giphy.com/v1/gifs/translate?api_key=Kwsp1ITTP6kyk9k4YTkzfeeqLdaSCKFN&s=sunny', {mode: 'cors'})
  // .then(function(response) {
  //   return response.json()
  // })
  // .then(function(response){
  //   giphyImg.src = response.data.images.original.url;
  // })
