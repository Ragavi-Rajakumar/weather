const apiKey = "fce040ff4a70642a7e566714a9d38fda";

async function getWeather() {

    let city = document.getElementById("city").value;

    if(city === ""){

        alert("Please enter a city name!");

        return;
    }

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        let response = await fetch(url);

        let data = await response.json();

        if(data.cod != 200){

            document.getElementById("cityName").innerHTML =
            "City Not Found";

            document.getElementById("temp").innerHTML = "--";

            document.getElementById("condition").innerHTML =
            "Please enter a valid city";

            document.getElementById("humidity").innerHTML = "--";

            document.getElementById("wind").innerHTML = "--";

            document.querySelector(".icon").innerHTML = "❓";

            return;
        }

        document.getElementById("cityName").innerHTML =
        data.name;

        document.getElementById("temp").innerHTML =
        Math.round(data.main.temp) + "°C";

        document.getElementById("condition").innerHTML =
        data.weather[0].main;

        document.getElementById("humidity").innerHTML =
        data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
        data.wind.speed + " km/h";

        let weather = data.weather[0].main;

        if(weather === "Clear"){

            document.querySelector(".icon").innerHTML = "☀️";

        }

        else if(weather === "Clouds"){

            document.querySelector(".icon").innerHTML = "☁️";

        }

        else if(weather === "Rain"){

            document.querySelector(".icon").innerHTML = "🌧️";

        }

        else if(weather === "Drizzle"){

            document.querySelector(".icon").innerHTML = "🌦️";

        }

        else if(weather === "Thunderstorm"){

            document.querySelector(".icon").innerHTML = "⛈️";

        }

        else{

            document.querySelector(".icon").innerHTML = "🌤️";

        }

    }

    catch(error){

        document.getElementById("cityName").innerHTML =
        "Error";

        document.getElementById("condition").innerHTML =
        "Check Internet Connection";

    }

}