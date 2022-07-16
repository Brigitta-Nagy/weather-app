$(document).ready(function(){

    $("#button").click(function(){
    let city = $("input").val();
    console.log(city)
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1bac5aca459e264eb7cf875cfcc14c2`)
    .then((response) => response.json())
    .then(function (data){
    console.log(data)
    let cityName = $('h1').append(data.name)
    let degreeFarenheit = $('h2').append(data.main.temp)
    let description = $('.weather-data').append(data.weather[0]["description"])
    let windSpeed = $('.weather-data').append(`<p>wind ${data.wind.speed} km/h</p>`)
    

    })
    $("input").val("")
    $("cityName").val("")
  })
});

$("input").focus(function(){
  $("input.input-field").css({"background":"rgb(184, 146, 175", "color":"white"})
})
$("input").blur(function(){
  $("input.input-field").css({"background":"whitesmoke"})
})








  //const giphyImg = document.querySelector("img")
  //const apiKey = "Kwsp1ITTP6kyk9k4YTkzfeeqLdaSCKFN"
  // api-key= b1bac5aca459e264eb7cf875cfcc14c2 
  // https://home.openweathermap.org/api_keys
  
  // cloudy, partly cloudy, rain, sun, clear, 
  
  // fetch('https://api.giphy.com/v1/gifs/translate?api_key=Kwsp1ITTP6kyk9k4YTkzfeeqLdaSCKFN&s=sunny', {mode: 'cors'})
  // .then(function(response) {
  //   return response.json()
  // })
  // .then(function(response){
  //   giphyImg.src = response.data.images.original.url;
  // })
