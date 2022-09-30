var newEntryButton = document.getElementById("newEntry");
var copyEntryButton = document.getElementById("copyEntry");
var exportEntryButton = document.getElementById("exportEntry");
var ticketForm = document.getElementById("acTicket");

function clearForm() {
  //1: TODO: copy and append entries to csv file

  //2: clear and reset the form. DONE
  ticketForm.reset();
}

function copyToClipBoard() {
  var contactName = $("#contact-name").val();
  var contactMethod = $("#contact-method").val();
  var issueSummary = $("#issue-summary").val();
  var deviceType = $("#device-type option:selected").text();
  var deviceName = $("#device-name").val();
  var deviceOs = $("#device-os").val();
  var deviceIp = $("#device-ip").val();
  var relatedDeviceType1 = $("#related-device-type-1 option:selected").text();
  var relatedDeviceType2 = $("#related-device-type-2 option:selected").text();
  var relatedDeviceName1 = $("#related-device-name-1").val();
  var relatedDeviceName2 = $("#related-device-name-2").val();
  var relatedDeviceOs1 = $("#related-device-os-1").val();
  var relatedDeviceOs2 = $("#related-device-os-2").val();
  var relatedDeviceIp1 = $("#related-device-ip-1").val();
  var relatedDeviceIp2 = $("#related-device-ip-2").val();
  var stepsTaken = $("#steps-taken").val();

  navigator.clipboard.writeText(
    "Contact Details" +
    "\n\n" +
    "Contact Name : " + contactName + "\n" +
    "Contact Method : " + contactMethod + "\n" +
    "Issue Summary : " + issueSummary + "\n" +
    "\n\n" +
    "Client Device Info" +
    "\n\n" +
    "Device Type : " + deviceType + "\n" +
    "Device Name : " + deviceName + "\n" +
    "Device OS : " + deviceOs + "\n" +
    "Device IP : " + deviceIp + "\n" +
    "\n\n" +
    "Related Device" +
    "\n\n" +
    "Device Type : " + relatedDeviceType1 + "\n" +
    "Device Name : " + relatedDeviceName1 + "\n" +
    "Device OS : " + relatedDeviceOs1 + "\n" +
    "Device IP : " + relatedDeviceIp1 + "\n" +
    "\n\n" +
    "Related Device" +
    "\n\n" +
    "Device Type : " + relatedDeviceType2 + "\n" +
    "Device Name : " + relatedDeviceName2 + "\n" +
    "Device OS : " + relatedDeviceOs2 + "\n" +
    "Device IP : " + relatedDeviceIp2 + "\n" +
    "\n\n" +
    "Troubleshooting Steps" +
    "\n" +
    stepsTaken + "\n"

  );
}

function displayMes() {
  alert("iextract");
}

newEntryButton.addEventListener("click", clearForm);
copyEntryButton.addEventListener("click", copyToClipBoard);
// exportEntryButton.addEventListener("click", displayMes);
