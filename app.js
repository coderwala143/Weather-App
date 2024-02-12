const apiKey = `4fe284aadd67aff480a3985594bc558b`;

// const api = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric`;

// const imgUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const box = document.querySelector('.box');


const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(data);
    return showWeather(data);

}
getWeather("Delhi");

const getDay = () => {
    let now = new Date();
    // console.log(now.getDay());
    switch (now.getDay()) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
            
        case 4:
            return "Thursday";

        case 5:
            return "Friday";
            
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";

        default:
            break;
    }
    
}

const getMonth = () =>{
     const month = new Date();

     console.log(month.getMonth());
     switch (month.getMonth()) {
        case 0:
            return "Jan"
        case 1:
            return "Feb"
        case 2:
            return "Mar"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "Jun"
        case 6:
            return "July"
        case 6:
            return "Aug"
        case 7:
            return "Sep"
        case 8:
            return "Oct"
        case 9:
            return "Nov"
        case 10:
            return "Dec"
    
     }
}
getMonth();

const showWeather = (data) => {
    if(data.cod == "404"){
        
        box.
        box.innerHTML = "<h1>City Not Found</h1>"
    }

    const date = getDay();
    const month = getMonth();
    console.log(date);

    // console.log(date.getDay());

        box.innerHTML =`
        <div class="leftBox">
        <div>
            <h2 id="day">${date}</h2>
            <h4>${month}</h4>
            <h3 id="city">${data.name}</h3>
        </div>
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="hello">
            <h3>${data.main.temp} <sup>0</sup>c</h3>
            <h4>${data.weather[0].main}</h4>
        </div>
    </div>
    <div class="right">
        <div class="forecast">
            <div style="text-align: left;">
                <h4>REAL FEEL</h4>
                <h4>HUMIDITY</h4>
                <h4>WIND</h4>
                <h4>AIR PRESSURE</h4>
                <h4>MAX TEMP</h4>
                <h4>MIN TEMP</h4>
            </div>
            <div>
                <p>${data.main.feels_like}</p>
                <p>${data.main.humidity}%</p>
                <p>${data.wind.speed} km/h</p>
                <p>${data.main.pressure} mb</p>
                <p>${data.main.temp_max}<sup>0</sup>c</p>
                <p>${data.main.temp_min} <sup>0</sup>c</p>
            </div>
        </div>
        </div>
        `

        // <div class="forecastDay">
        //     <div>
        //         <img src="" alt="hello">
        //         <h4>Mon</h4>
        //         <p>20 <sup>0</sup>c</p>
        //     </div>
        //     <div>
        //         <img src="" alt="hello">
        //         <h4>Mon</h4>
        //         <p>20 <sup>0</sup>c</p>
        //     </div>
        //     <div>
        //         <img src="" alt="hello">
        //         <h4>Mon</h4>
        //         <p>20 <sup>0</sup>c</p>
        //     </div>
        //     <div>
        //         <img src="" alt="hello">
        //         <h4>Mon</h4>
        //         <p>20 <sup>0</sup>c</p>
        //     </div>
        //     <div>
        //         <img src="" alt="hello">
        //         <h4>Mon</h4>
        //         <p>20 <sup>0</sup>c</p>
        //     </div>
        // </div>


}


const inputValue = document.querySelector("#inputValue");
const form = document.querySelector("#form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    getWeather(inputValue.value);
})