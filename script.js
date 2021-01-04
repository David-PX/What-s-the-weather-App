$(document).ready(function () {
    
    $("#searchInput").on("keyup" , function(e){
        var cityName = e.target.value;
        const APIKey = '23336f6b757bbf1495f74aaf865d06ff';

        // make a request to the server

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKey +"&units=metric",
        
            
        }).done(function(weatherdata){
            console.log(weatherdata);

            $("#profile").html(`
            <div class="row">
          
 

            <div class="card mb-3 container bg-transparent shadow-sm " style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 ">
                <img class="mx-auto d-block p-4" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5>
                    <p class="card-text">The termperatur at ${cityName} is = ${weatherdata.main.temp} &#8451; and it feels like it is ${weatherdata.main.feels_like}</p>
                    <a href="https://www.google.com/search?q=${cityName}" class="btn btn-primary">Learn more information about this city</a>
                </div>
                </div>
            </div>
            </div>





            
            
            
            
            
            </div>
            
            
            `);
            

        })
    })











});