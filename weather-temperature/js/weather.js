const API_KEY = `68e58d78556661e27896cb7a9bdf6ea0`;


//here loadweather data by async function 
const loadWeatherTemperaure = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        displayWetherData(data);
    }catch(error){
        console.log(error);
    }
};

const displayWetherData = data => {
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const textelement = document.getElementById(id);
    textelement.innerText = text;
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchInputField = document.getElementById('search-field');
    const city = searchInputField.value;
    searchInputField.value = '';
    setInnerTextById('city-name', city);
    loadWeatherTemperaure(city);
})