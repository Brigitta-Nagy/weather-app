$(document).ready(function(){

    $("#button").click(function(){
      let city = $("input").val();
           
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1bac5aca459e264eb7cf875cfcc14c2&units=imperial`)
        .then((response) => response.json())
        .then(function (data){
           
            console.log(data);

            if(data.cod == '404') {
              $('.errorMessage').show();
            }
              
              let newCity = data.name;
              let temp = Math.round(data.main.temp);
              let newDesc = data.weather[0]["description"];
              let wind = data.wind.speed;
              let tempCelsius = Math.round(temp -32 *1.8);
              //let icon = data.weather[0].icon;

              $('#city-name').html(`<p> ${newCity} </p>`);
              $('#temp-f').html(`<p> ${temp} &deg;F</p>`)
              $('#temp-c').html(`<p> ${tempCelsius} &deg;C</p>`)
              $('#desc').html(newDesc);
              $('#wind').html(`<p>Wind: ${wind} miles/h</p>`);
                    

          


              switch(true){
                case newDesc.includes("clouds"):
                  $("body").css({'backgroundImage':'url("./assets/clouds.jpg'}) 
                break;
                case newDesc.includes("clear sky"):
                   $("body").css({'backgroundImage':'url("./assets/clear-sky2.jpg'}) 
                break;
                case newDesc.includes("mist"):
                  $("body").css({'backgroundImage':'url("./assets/mist.jpg'}) 
                break;
                case newDesc.includes("rain"):
                  $("body").css({'backgroundImage':'url("./assets/rain.jpg'}) 
                break;
                case newDesc.includes("snow"):
                  $("body").css({'backgroundImage':'url("./assets/snow.jpg'}) 
                break;
                case newDesc.includes("sun"):
                  $("body").css({'backgroundImage':'url("./assets/sunshine.jpg'}) 
                break;
                case newDesc.includes("thunderstorm"):
                  $("body").css({'backgroundImage':'url("./assets/thunderstorm.jpg'}) 
                break;
              }


              
  
                $("input").val("")
                $("cityName").val("")
                $("input").attr("placeholder", newCity)
 
})
          $('#btn').click(function(){
            $('#temp-f').toggleClass('degree-btn')
            $('#temp-c').toggleClass('degree-btn')
          })
})
})



//FOCUS ON INPUT *******************************************
$("input").focus(function(){
  $("input.input-field").css({"background":"rgb(184, 146, 175", "color":"white"})
})
$("input").blur(function(){
  $("input.input-field").css({"background":"whitesmoke"})
})

//DATE ***************************************************
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

let currentDate = new Date();
 let weekday = days[currentDate.getDay()]
let day = currentDate.getDate();
let month = months [currentDate.getMonth()];
let year = currentDate.getFullYear();
let fullDate = `${weekday}, ${day}. ${month} ${year}`


$(".date").html(fullDate);

$('.closeMessage').click(function(){
  $('.errorMessage').hide()
})


