document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.getElementById("gender").value;

  var foodList = [];
  var checkboxes = document.getElementsByName("food");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      foodList.push(checkboxes[i].value);
    }
  }
  var food = foodList.join(", ");

  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  var table = document
    .getElementById("recordsTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow();

  var cell1 = newRow.insertCell();
  cell1.appendChild(document.createTextNode(firstName));

  var cell2 = newRow.insertCell();
  cell2.appendChild(document.createTextNode(lastName));

  var cell3 = newRow.insertCell();
  cell3.appendChild(document.createTextNode(address));

  var cell4 = newRow.insertCell();
  cell4.appendChild(document.createTextNode(pincode));

  var cell5 = newRow.insertCell();
  cell5.appendChild(document.createTextNode(gender));

  var cell6 = newRow.insertCell();
  cell6.appendChild(document.createTextNode(food));

  var cell7 = newRow.insertCell();
  cell7.appendChild(document.createTextNode(state));

  var cell8 = newRow.insertCell();
  cell8.appendChild(document.createTextNode(country));

  document.getElementById("myForm").reset();
});
