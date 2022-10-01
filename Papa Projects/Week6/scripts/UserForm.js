$("#btnUserClear").click(function () {
  clearUserForm();
});

$("#frmUserForm").submit(function () { //Event : submitting the form
  saveUserForm();
  return true;
});

function checkUserForm() { //Check for empty fields in the form
  //for finding current date
  var d = new Date();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  var year = d.getFullYear();
  var currentDate = year + '/' +
    (('' + month).length < 2 ? '0' : '') +
    month + '/' +
    (('' + date).length < 2 ? '0' : '') + date;

  if (($("#txtFirstName").val() != "") &&
    ($("#txtLastName").val() != "") &&
    ($("#txtHealthCardNumber").val() != "") &&
    ($("#datBirthdate").val() != "") && ($(
      "#datBirthdate").val() <= currentDate) &&
    ($("#txtLB option:selected").val() !=
      "Select Cancer Type") &&
    ($("#txtHeight option:selected").val() !=
      "Select Cancer Stage") &&
    ($("#txtBMI option:selected").val() !=
      "Select TSH Range")) {
    return true;
  } else {
    return false;
  }
}

function saveUserForm() {
  if (checkUserForm()) {
    var user = {
      "FirstName": $("#txtFirstName").val(),
      "LastName": $("#txtLastName").val(),
      "HealthCardNumber": $(
        "#txtHealthCardNumber").val(),
      "NewPassword": $("#changePassword").val(),
      "DOB": $("#datBirthdate").val(),
      "Weight": $(
        "#txtLB option:selected").val(),
      "Height": $(
        "#txtHeight option:selected").val(),
      "BMI": $(
        "#txtBMI option:selected").val()
    };

    try {
      localStorage.setItem("user", JSON.stringify(
        user));
      alert("Saving Information");

      $.mobile.changePage("#pageMenu");
      window.location.reload();
    } catch (e) {
      /* Google browsers use different error
       * constant
       */
      if (window.navigator.vendor ===
        "Google Inc.") {
        if (e == DOMException.QUOTA_EXCEEDED_ERR) {
          alert(
            "Error: Local Storage limit exceeds."
          );
        }
      } else if (e == QUOTA_EXCEEDED_ERR) {
        alert("Error: Saving to local storage.");
      }

      console.log(e);
    }
  } else {
    alert("Please complete the form properly.");
  }

}

function clearUserForm() {
  localStorage.removeItem("user");
  alert("The stored data have been removed");
  $("#txtHeight").val(
    "Select Cancer Stage");
  $('#txtHeight').selectmenu('refresh',
    true);
  $("#txtLB").val("Select Cancer Type");
  $('#txtLB').selectmenu('refresh',
    true);
  $("#txtBMI").val("Select TSH Range");
  $('#txtBMI').selectmenu('refresh', true);
}

function showUserForm() { //Load the stored values in the form
  try {
    var user = JSON.parse(localStorage.getItem(
      "user"));
  } catch (e) {
    /* Google browsers use different error
     * constant
     */
    if (window.navigator.vendor ===
      "Google Inc.") {
      if (e == DOMException.QUOTA_EXCEEDED_ERR) {
        alert(
          "Error: Local Storage limit exceeds."
        );
      }
    } else if (e == QUOTA_EXCEEDED_ERR) {
      alert("Error: Saving to local storage.");
    }

    console.log(e);
  }

  if (user != null) {
    $("#txtFirstName").val(user.FirstName);
    $("#txtLastName").val(user.LastName);
    $("#txtHealthCardNumber").val(user.HealthCardNumber);
    $("#changePassword").val(user.NewPassword);
    $("#datBirthdate").val(user.DOB);
    $('#txtLB option[value=' + user.Weight +
      ']').attr('selected', 'selected');
    $("#txtLB option:selected").val(
      user.Weight);
    $('#txtLB').selectmenu('refresh',
      true);
    $('#txtHeight option[value=' + user.Height +
      ']').attr('selected', 'selected');
    $("#txtHeight option:selected").val(
      user.Height);
    $('#txtHeight').selectmenu('refresh',
      true);
    $('#txtBMI option[value=' + user.BMI +
      ']').attr('selected', 'selected');
    $("#txtBMI option:selected").val(user.BMI);
    $('#txtBMI').selectmenu('refresh',
      true);
  }
}
