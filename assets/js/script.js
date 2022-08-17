var today = moment();
$("#day-time").text(today.format("dddd, MMMM Do YYYY, h:mm A"));

var inputEl = $("#text");
var historyEl = $("#history-list");
var searchBtnEl = $("#btn");

var printHistory = function (city) {
  var listEl = $("<li>");
  var cityEl = city;
  listEl.addClass("list-group-item").text = cityEl;
  listEl.appendTo(historyEl);
};

var handleSearchClick = function (event) {
  event.preventDefault();

  var searchInput = inputEl.val();

  if (!searchInput) {
    return;
  }

  printHistory(searchInput);

  inputEl.val("");
};

searchBtnEl.on("click", handleSearchClick);

// $(function () {
//   $("#history-list").sortable({
//     placeholder: "ui-state-highlight",
//   });
//   $("#history-list").disableSelection();
// });
