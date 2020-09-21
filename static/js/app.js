// from data.js
var sights = data;

//Access the table using d3
var dataTable = d3.select("tbody");

//console.log(sights);

sights.forEach(function (ufoSighting) {
  var row = dataTable.append("tr");
  Object.entries(ufoSighting).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});
