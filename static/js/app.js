// from data.js
var sights = data;

//Access the table using d3
var dataTable = d3.select("tbody");

//console.log(sights);

//Add entries from data to html table
sights.forEach(function (ufoSighting) {
  var row = dataTable.append("tr");
  Object.entries(ufoSighting).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

//Access the form for filtering the results of the table
//Create a variable that references the input form
var inputForm = d3.select(".form-control");

//Create a variable for the Filter table button
var filterButton = d3.select("#filter-btn");

//Create event handlers for hitting enter on form and clicking the button to run function
inputForm.on("submit", runFilter);
filterButton.on("click", runFilter);

//Create a runFilter function
function runFilter() {
  d3.event.preventDefault();

  //Create variable for input element and input value
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");

  var filterDate = sights.filter((i) => i.datetime === inputValue);
  filterDate.forEach(function (ufoSighting) {
    var row = dataTable.append("tr");
    Object.entries(ufoSighting).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
