const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;


// Static values for temperature and wind speed (Imperial system)
let temperature = 0; 
let windSpeed = 20;   


function calculateWindChill(temp, wind) {
    
    if (temp <= 10 && wind > 4.8) {
    
        let windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
        return Math.round(windChill);
    } else {
        return "N/A"; 
    }
}

function displayWindChill() {
    let windChillFactor = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChillFactor + " °C";
}
window.onload = function() {
    displayWindChill();
};
