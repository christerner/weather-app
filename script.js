
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
apiKey = "2bb256cabe4e231779cb38b5d56410f5";

const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button");
let info = document.querySelector(".info");
let main = document.querySelector(".main");
let footer = document.querySelector(".footer");

async function getData(city) {


    if (searchBox.value == "") {
        info.innerHTML = "Please enter a city"
    }
    else {

        try {
            info.innerHTML = " Fetching data. Please wait...";
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            let data = await response.json();


            document.querySelector(".city").innerHTML = data.name + "-";
            document.querySelector(".country").innerHTML = data.sys.country;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
            document.querySelector(".lat").innerHTML = Math.round(data.coord.lat);
            document.querySelector(".lon").innerHTML = Math.round(data.coord.lon);
            document.querySelector(".weather").innerHTML = data.weather[0].main;

            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".feels").innerHTML = data.main.feels_like + "%";
            document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
            info.innerHTML = '';
            main.style.display = "block";
            footer.style.display = "flex";
        }
        catch (error) {
            info.innerHTML = 'Data not found';
        }
    }
}

searchBtn.addEventListener("click", function () {
    let value = searchBox.value;
    main.style.display = "none";
    footer.style.display = "none";
    getData(value);
    searchBox.value = '';
})




