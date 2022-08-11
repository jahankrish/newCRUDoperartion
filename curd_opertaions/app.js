let selectedRow = null;
let formArray = [];
let rowIndex = 0;

function onFormSubmit() {
        let formData = readFormData();

        if (selectedRow == null) insertNewRecord();
          else  updateRecord();
          resetForm();
}

function readFormData() {
        let formData = {};
        formData["qualification"] = document.getElementById("qualification").value;
        formData["institution"] = document.getElementById("institution").value;
        formData["yearOfPassing"] = document.getElementById("yearOfPassing").value;
        formData["percentage"] = document.getElementById("percentage").value;
        formArray.push(formData);
        console.log(formArray);
        return formData;
}

function insertNewRecord() {

      //let table = document.getElementById("studentList");
      let tableDetails = "<thead>";
      tableDetails += "<tr><th>qualification</th><th>institution</th><th>yearOfPassing</th><th>percentage</th><th>Action</th></tr>";
      tableDetails +="</thead>";

      tableDetails += "<tbody>";
 
      for (let i = 0; i < formArray.length; i++) {
            let tableDet = formArray[i]; 
            tableDetails += "<tr>" + 
            "<td>"+tableDet.qualification+"</td>" + 
            "<td>"+tableDet.institution+"</td>" +
            "<td>"+tableDet.yearOfPassing+"</td>" + 
            "<td>"+tableDet.percentage+"</td>" + 
            "<td><button type='button' class='btn btn-success' data-bs-toggle='modal'data-bs-target='#editModal' onclick='onEdit(${newRow.rowIndex - 1})'>Edit</button><button type='button' class='btn btn-danger' onclick='onDelete(this)'>Delete</button> </td>" + 
        "</tr>" 
      }

      tableDetails += "</tbody>";
          document.getElementById("studentList").innerHTML = tableDetails;         
 }
 
function resetForm() {
      document.getElementById("qualification").value = "";
      document.getElementById("institution").value = "";
      document.getElementById("yearOfPassing").value = "";
      document.getElementById("percentage").value = "";
      selectedRow = null;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    var row = td.parentNode.parentNode;
    row.parentNode.removeChild(row);
    resetForm();
  }
}

function onEdit(rowIndex) {

  let data = formArray[rowIndex];
  document.getElementById("edit_qualification").value = data.qualification;
  document.getElementById("edit_institution").value =  data.institution;
  document.getElementById("edit_yearOfPassing").value = data.yearOfPassing;
  document.getElementById("edit_percentage").value =  data.percentage;
}

function updateRecord(rowIndex) {
  // data.cells[0].innerHTML = qualification;
  // data.cells[1].innerHTML = formData.institution;
  // data.cells[2].innerHTML = formData.yearOfPassing;
  // data.cells[3].innerHTML = formData.percentage;

  var data  = document.getElementById('#tbody:nth-child('+rowIndex+')');
  console.log('#tbody : nth-child('+rowIndex+')');

  data.cells[0].innerHTML = qualification;
  data.cells[1].innerHTML = institution;
  data.cells[2].innerHTML = yearOfPassing;
  data.cells[3].innerHTML = percentage;
}
       

function insertNewRecord() {

  let table = document.createElement('studentList');
  let tableRow = document.createElement('tr');
  let arrheader = ['qualification', 'institution', 'yearOfPassing', 'percentage', 'Action'];


for (var j = 0; j < arrheader.length; j++) {
var th = document.createElement('th'); //column
var text = document.createTextNode(arrheader[j]); //cell
th.appendChild(text);
tableRow.appendChild(th);
}
table.appendChild(tableRow);

for (var i = 0; i < formArray.length; i++) {
var tr = document.createElement('tr');

var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');

var text1 = document.createTextNode(formArray[i].qualification);
var text2 = document.createTextNode(formArray[i].institution);
var text3 = document.createTextNode(formArray[i].yearOfPassing);
var text4 = document.createTextNode(formArray[i].percentage);

td1.appendChild(text1);
td2.appendChild(text2);
td3.appendChild(text3);
td4.appendChild(text4);

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);

table.appendChild(tr);
}
document.body.appendChild(table);

}

function insertNewRecord(data) {
  let table = document
    .getElementById("studentList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.qualification;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.institution;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.yearOfPassing;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.percentage;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button type="button" class="btn btn-success" data-bs-toggle="modal"data-bs-target="#editModal" onclick="onEdit(${newRow.rowIndex - 1})">Edit</button>
                        <button type="button" class="btn btn-danger" onclick="onDelete(this)">Delete</button>`;
}






