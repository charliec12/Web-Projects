function binaryAnd(){
  var a = 1;
  var b = 1;

  updateTable(a,b)
}

function binaryOr(){
  var a = 1;
  var b = 1;

  updateTable(a,b)
}

function binaryNot(){
  var a = 1;
  var b = 1;

  updateTable(a,b)
}

function binaryXor(){
  var a = 1;
  var b = 1;

  updateTable(a,b)
}

function updateTable(binaryA,binaryB) {
  var dataTable = document.getElementById(
    'data');

  dataTable.innerHTML = '';

  //Header row
  var row = dataTable.insertRow(0);
  var aCell = row.insertCell(0);
  var bCell = row.insertCell(1);
  var orCell = row.insertCell(2);

  aCell.innerHTML = 'A';
  bCell.innerHTML = 'B';
  orCell.innerHTML = 'A||B';

  //Insert data
  for (var i = 0; i < timeArray.length; i++) {
    var row = dataTable.insertRow(-1);
    var timeCell = row.insertCell(0);
    var distanceCell = row.insertCell(1);
    var heightCell = row.insertCell(2);

    timeCell.innerHTML = timeArray[i].toFixed(2);
    distanceCell.innerHTML = distanceArray[i].toFixed(
      2);
    heightCell.innerHTML = heightArray[i].toFixed(
      2);
  }
}
