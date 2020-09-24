//========Create all global variables========//
var sights = data;
var dataTable = d3.select("tbody");
var inputForm = d3.select(".form-control");
var filterButton = d3.select("#filter-btn");

//======== Populate Data into HTML ========//
//Method 1
// function sightTable(sights, dataTable) {
//   //Clear HTML datatable
//   dataTable.html();
//   sights.forEach(function (allData) {
//   var row = dataTable.append("tr");
//     Object.entries(allData).forEach(function ([key, value]) {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
// }
// sightTable(sights, dataTable);

//Method 2: Harnessing d3 to create table
function sightsTable(sights, dataTable) {
  dataTable
    .selectAll("tr")
    .data(sights)
    .enter()
    .append("tr")
    .selectAll("td")
    .data(function (d) {
      return Object.values(d);
    })
    .enter()
    .append("td")

    .text(function (d) {
      return d;
    });
}

sightsTable(sights, dataTable);

//======== Create event handlers for user defined date filter ========//
inputForm.on("keypress", function () {
  if (d3.event.keyCode === 13) {
    runFilter(sights, dataTable);
  }
});

filterButton.on("click", function () {
  runFilter(sights, dataTable);
});

// filterData = []
//======== Create a runFilter function ========//
function runFilter(sights, dataTable) {
  // Prevents page from reloading after every search
  d3.event.preventDefault();

  //Clear the dataTable
  dataTable.selectAll("tr").remove().exit();

  //Create local variables
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value").trim();

  var filterData = sights.filter((sight) => sight.datetime === inputValue);
  console.log(sights);
  console.log(filterData);
  sightsTable(filterData, dataTable);
}

//Notes from tutoring
//d3 good at databinding
//constantly be inspecting the elements!!!
