//var cityEl = "denver";
var cityName = $("#city-name");
var icon = $("#icon");
var temp = $("#temp");
var wind = $("#wind");
var humidity = $("#humidity");
var uv = $("#uv-index");
//var formEl = $("#weather-form");
var forcastEl = $("#forcast");

var date1 = $("#date1");
var temp1 = $("#temp1");
var wind1 = $("#wind1");
var humidity1 = $("#humidity1");

var date2 = $("#date2");
var temp2 = $("#temp2");
var wind2 = $("#wind2");
var humidity2 = $("#humidity2");

var date3 = $("#date3");
var temp3 = $("#temp3");
var wind3 = $("#wind3");
var humidity3 = $("#humidity3");

var date4 = $("#date4");
var temp4 = $("#temp4");
var wind4 = $("#wind4");
var humidity4 = $("#humidity4");

var date5 = $("#date5");
var temp5 = $("#temp5");
var wind5 = $("#wind5");
var humidity5 = $("#humidity5");

var runFetch = function () {
  fetch(
    "https://api.weatherbit.io/v2.0/current?&city=" +
      cityEl +
      "&key=436627ee4fdb426bac05bc9393319814"
  )
    .then(function (response) {
      //console.log(response);
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      //for (var i = 0; i < data.length; i++) {

      cityName.text(data.data[0].city_name);
      // var iconcode = data.data[0].weather.code;
      // var iconUrl = "http://openweathermap.org/img/wn/${icon}.png";

      // icon.attr("src", iconUrl);
      temp.text("temp: " + data.data[0].temp + " celsius");
      wind.text("wind: " + data.data[0].wind_spd + " kmph");
      humidity.text("humidity: " + data.data[0].rh + "%");
      uv.text("UV Index: " + data.data[0].uv);
      //}
    });

  fetch(
    "https://api.weatherbit.io/v2.0/forecast/daily&days=[6]?city=" +
      cityEl +
      "&key=436627ee4fdb426bac05bc9393319814"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      //for (var i = 0; i <= 5; i++) {
      date1.text(data.data[1].datetime);
      //date1.text(moment().format("MMM Do YYYY"));
      temp1.text("temp: " + data.data[1].temp + " celsius");
      wind1.text("wind: " + data.data[1].wind_spd + " kmph");
      humidity1.text("humidity: " + data.data[1].rh + "%");

      //date2.text(moment().format("MMM Do YYYY"));
      date2.text(data.data[2].datetime);
      temp2.text("temp: " + data.data[2].temp + " celsius");
      wind2.text("wind: " + data.data[2].wind_spd + " kmph");
      humidity2.text("humidity: " + data.data[2].rh + "%");

      date3.text(data.data[3].datetime);
      temp3.text("temp: " + data.data[3].temp + " celsius");
      wind3.text("wind: " + data.data[3].wind_spd + " kmph");
      humidity3.text("humidity: " + data.data[3].rh + "%");

      date4.text(data.data[4].datetime);
      temp4.text("temp: " + data.data[4].temp + " celsius");
      wind4.text("wind: " + data.data[4].wind_spd + " kmph");
      humidity4.text("humidity: " + data.data[4].rh + "%");

      date5.text(data.data[5].datetime);
      temp5.text("temp: " + data.data[5].temp + " celsius");
      wind5.text("wind: " + data.data[5].wind_spd + " kmph");
      humidity5.text("humidity: " + data.data[5].rh + "%");
      $("#card-section").show();
      //  }
    });

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityEl +
      "&appid=ec485387bf797030b1808247d1c50ca3"
  )
    .then(function (response) {
      //console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var img =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      $("#wicon").attr("src", img);
    });

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityEl +
      "&cnt=6" +
      "&appid=ec485387bf797030b1808247d1c50ca3"
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var img1 =
        "http://openweathermap.org/img/w/" +
        data.list[1].weather[0].icon +
        ".png";
      $("#wicon1").attr("src", img1);

      var img2 =
        "http://openweathermap.org/img/w/" +
        data.list[2].weather[0].icon +
        ".png";
      $("#wicon2").attr("src", img2);

      var img3 =
        "http://openweathermap.org/img/w/" +
        data.list[3].weather[0].icon +
        ".png";
      $("#wicon3").attr("src", img3);

      var img4 =
        "http://openweathermap.org/img/w/" +
        data.list[4].weather[0].icon +
        ".png";
      $("#wicon4").attr("src", img4);

      var img5 =
        "http://openweathermap.org/img/w/" +
        data.list[5].weather[0].icon +
        ".png";
      $("#wicon5").attr("src", img5);
    });
};

var today = moment();
$("#day-time").text(today.format("dddd, MMMM Do YYYY, h:mm A"));

var inputEl = $("#text");
var historyEl = $("#history-list");
var searchBtnEl = $("#btn");

var printHistory = function (city) {
  var listEl = $("<li>");
  var cityEl = city;
  listEl.addClass("list-group-item").text(cityEl);
  listEl.appendTo(historyEl);
};

var handleSearchClick = function (event) {
  event.preventDefault();

  var searchInput = inputEl.val();

  if (!searchInput) {
    return;
  }
  cityEl = searchInput;
  //console.log(cityEl);

  printHistory(searchInput);

  // run fetch
  runFetch();

  inputEl.val("");
};

searchBtnEl.on("click", handleSearchClick);
$("#card-section").hide();
$(function () {
  $("#history-list").sortable({
    placeholder: "ui-state-highlight",
  });
  $("#history-list").disableSelection();
});
