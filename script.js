
let rootDiv = document.getElementById("root");
let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


rootDiv.insertAdjacentHTML("beforeend", "<h1>Wheater App</h1>");
rootDiv.insertAdjacentHTML("beforeend", "<input list='countries' id='countryInput' type='text' placeholder='Type in country'></input>");
rootDiv.insertAdjacentHTML("beforeend", "<datalist id='countries'></datalist>");

let datalist = document.getElementById("countries");
for (let i = 0; i < countries.length; i++) {
    datalist.insertAdjacentHTML("beforeend", `<option>${countries[i]}</option>`)
}

rootDiv.insertAdjacentHTML("beforeend", "<img id='image'></img>")
rootDiv.insertAdjacentHTML("beforeend", "<div id='container'></div>");

let container = document.getElementById("container");
container.insertAdjacentHTML("beforeend", "<h2 id='countryName'></h2>");
container.insertAdjacentHTML("beforeend", "<h4 id='regionName'></h4>");
container.insertAdjacentHTML("beforeend", "<h3 id='displayTemp'>Temperature: <span  id='temperature'></span>°</h3>");
container.insertAdjacentHTML("beforeend", "<h3 id='displayWind'>Wind Speed: <span id='windSpeed'></span> kp/h</h3>");
container.insertAdjacentHTML("beforeend", "<h3 id='time'>Local Time: <span id='localTime'></span></h3>");

let input = document.getElementById("countryInput");
let image = document.getElementById("image");
let countryName = document.getElementById("countryName");
let regionName = document.getElementById("regionName");
let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("windSpeed");
let displayTemp = document.getElementById("displayTemp");
let displayWind = document.getElementById("displayWind");
let localTime = document.getElementById("localTime");

function updateContent(location){
    let url = `http://api.weatherapi.com/v1/current.json?key=6bc7f751779242218b4181635232302&q=${location}&aqi=no`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            image.src = `https:` + data.current.condition.icon;
            countryName.innerHTML = data.location.country;
            regionName.innerHTML = data.location.region;
            temperature.innerHTML = data.current.temp_c;
            windSpeed.innerHTML = data.current.wind_kph;
            localTime.innerHTML = data.location.localtime;
        })
}

input.addEventListener('change', function() {
    updateContent(input.value);
    image.style.display = "inline";
    displayTemp.style.display = "inline";
    displayWind.style.display = "inline";
    time.style.display = "inline";
})