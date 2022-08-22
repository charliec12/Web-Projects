var newEntryButton = document.getElementById("newEntry");
var copyEntryButton = document.getElementById("copyEntry");
var exportEntryButton = document.getElementById("exportEntry");

var ticketForm = document.getElementById("acTicket");


function clearForm(){
  //1: TODO: copy and append entries to csv file

  //2: clear and reset the form. DONE 
  ticketForm.reset();
}

function displayMes(){
  alert("bui");
}

newEntryButton.addEventListener("click", clearForm);

copyEntryButton.addEventListener("click", displayMes);
exportEntryButton.addEventListener("click", displayMes);
