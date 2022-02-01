//get dom element
let submitbtn = document.getElementById("submitbtn");
let cityname = document.getElementById("cityname");
let temp = document.getElementById("temp");
let weathericon = document.getElementById("weathericon");
let weatherStatus = document.getElementById("weatherStatus");
let cityTemp = document.getElementById("cityTemp");
let errortext = document.getElementById("errortext");
let dateTime = document.getElementById("dateTime");
let day = document.getElementById("day");
let todayTemp = document.getElementById("todayTemp");

let weatherinfo = async (e) => {
  let cityVal = cityname.value;
  e.preventDefault();
  if (cityVal === "") {
    errortext.innerText = "Enter proper city name";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1a9e4db698f7fe4bfe3bbf8f0ae5d2ff`;
      const fetchedData = await fetch(url);
      const tempData = await fetchedData.json();

      console.log(typeof todayTemp);
      console.log(tempData);
      //   insert data in dom element;

      cityTemp.innerText = `${tempData.name} ${tempData.sys.country}`;
      weatherStatus.innerText = tempData.weather[0].main;
      if (tempData.weather[0].main == "Rain") {
        weathericon.innerHTML =
          "<img src='images/rain.png' style='width:100px;height:100px;'>";
      }
      if (tempData.weather[0].main == "Clear") {
        weathericon.innerHTML =
          "<img src='images/clear.png' style='width:50px;height:50px;'>";
      }
      if (tempData.weather[0].main == "Sunny") {
        weathericon.innerHTML =
          "<img src='images/sunny.png' style='width:50px;height:50px;'>";
      }
      if (tempData.weather[0].main == "Clouds") {
        weathericon.innerHTML =
          "<i class='fa fa-cloud' style='color='#fff'; width:50px;height:50px;' ></i>";
      }
      if (tempData.weather[0].main == "Mist") {
        weathericon.innerHTML =
          "<img src='images/mist.png' style='width:50px;height:50px;background-color:'white'>";
      }
      if (tempData.weather[0].main == "Haze") {
        weathericon.innerHTML =
          "<img src='images/mist.png' style='width:50px;height:50px;background-color:'white'>";
      }
      if (tempData.weather[0].main == "Smoke") {
        weathericon.innerHTML =
          "<img src='images/smoke.png' style='width:50px;height:50px;'>";
      }
      if (tempData.weather[0].main == "Thunderstorm") {
        weathericon.innerHTML =
          "<img src='images/thunderStrom.png' style='width:50px;height:50px;'>";
      }
      temp.innerHTML = tempData.main.temp + "<span>&deg;</span>";
      errortext.innerText = "";
    } catch (err) {
      errortext.innerText =
        "Please check your Internet connection \n or enter proper city name ";
    }
  }
};
//to get Day;
function getCurrentDay() {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const currentTime = new Date();
  return days[currentTime.getDay()];
}

//get current time;
function getCurrentTime() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const now = new Date();
  let month = months[now.getMonth()];
  let date = now.getDate();
  let hours = now.getHours();
  let min = now.getMinutes();

  //to show proper timing

  let periods = hours > 11 ? "PM" : "AM";
  if (hours < 10) hours = "0" + hours;
  if (hours > 12) hours -= 12;
  if (min < 10) {
    min = "0" + min;
  }
  return `${date} ${month} | ${hours}:${min} ${periods}`;
}

dateTime.innerText = `${getCurrentTime()}`;
day.innerText = getCurrentDay();

submitbtn.addEventListener("click", weatherinfo);
