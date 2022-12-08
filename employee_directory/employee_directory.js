//filters
const list1 = document.querySelector('.list1');
list1.addEventListener('click', handleClick);
const list2 = document.querySelector('.list2');
list2.addEventListener('click', handleClick);
const list3 = document.querySelector('.list3');
list3.addEventListener('click', handleClick);


function handleClick(e) {
  e.preventDefault();
  if (e.target.matches('a')) {
    const textContent = e.target.innerHTML;
    console.log(textContent);
    if (textContent == "IT department" || textContent == "HR department" || textContent == "MD" || textContent == "Sales department") {
      var a_employees = totalemployees.filter(employee => employee.department == textContent);
      create_cards(a_employees);
    }
    if (textContent == "Seattle" || textContent == "India") {
      var b_employees = totalemployees.filter(employee => employee.office == textContent);
      create_cards(b_employees);
    }
    if (textContent == "SharePoint practiseHead" || textContent == "dotNet Development Lead" || textContent == "Recruiting  Expert" || textContent == "BI Developer" || textContent == "OperationsManager" || textContent == "software engineer" || textContent == "UI designer" || textContent == "product manager" || textContent == "talent manager" || textContent == "network engineer" || textContent == "lead    engineer" || textContent == "BI Developer") {
      var c_employees = totalemployees.filter(employee => employee.jobtitle == textContent);
      create_cards(c_employees);
    }
  }
};



//display more jobtitles                                   
function append() {
  document.getElementById("viewmore").innerHTML = "";
  document.getElementById("hidden").style.display = "list-item";
};

//alphabet buttons
let btns = " ";
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letterArray = letters.split("");
for (var i = 0; i < 26; i++) {
  var letter = letterArray.shift();
  btns += '<button class="mybtns" onclick="alphabetsearch(\'' + letter + '\');">' + letter + '</button>';
}
function alphabetsearch(letter) {
  let result = totalemployees.filter(employee => employee.firstname.toUpperCase().charAt(0) == letter);
  create_cards(result);
};
document.querySelector(".flex").innerHTML = btns;



//clear button 
let btnClear = document.querySelector(".btn-success");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});



//  add-employee btn
document.getElementById("btn-right").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";

});

//close btn
document.querySelector(".close").addEventListener('click',function() {
  document.querySelector("#popupForEdit").style.display = "none";
  document.querySelector(".popup").style.display = "none";
});



let totalemployees = [], index;

function employee(employeeid, firstname, lastname, email, jobtitle, department, office, phonenumber, skypeid) {
  this.employeeid = employeeid;
  this.firstname = firstname;
  this.lastname = lastname,
    this.preferredname = firstname + " " + lastname;
  this.email = email;
  this.jobtitle = jobtitle;
  this.department = department;
  this.office = office;
  this.phonenumber = phonenumber;
  this.skypeid = skypeid;

};

function create_cards(totalemployees) {
  var dynamic = document.querySelector(".grid");
  document.querySelector(".grid").innerHTML = ""
  for (var i = 0; i < totalemployees.length; i++) {
    var fetch = document.querySelector(".grid").innerHTML;
    dynamic.innerHTML +=
      `<div id="cards${i}"  onclick="form(${i})" class="card" >
    <div class="card-img">
        <img id="cardimg" src="images/${totalemployees[i].preferredname}.jpg">
    </div>
    <div class="card-content">
        <p class="card-title"><b>${totalemployees[i].preferredname}</b></p>
        <p class="card-text">${totalemployees[i].jobtitle}</p>
        <p class="card-text">${totalemployees[i].department}</p>
        <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chat-fill" viewBox="0 0 16 16">
                <path
                    d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-star-fill" viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
        </div>
    </div>
</div>`;

  };
};







var emp1 = new employee("1", "anthony", "morris", "anthonymorris@gmail.com", "sharepoint practice head", "IT department", "India", 8745630218,"live:anthonymorris");

var emp2 = new employee("2", "helen", "zimmerman", "helenzimmerman@gmail.com", "operations manager", "IT department", "India", 985476893,"live:helenzemmerman");

var emp3 = new employee("3", "jonathon", "smith", "jonathonsmith@gmail.com", "product manager", "IT department", "India", 875634236,"live:jonathn");

var emp4 = new employee("4", "tami", "hopkins", "tamihopkins@gmail.com", "lead engineer", "IT department", "India", 9845096055,"live:tami876");

var emp5 = new employee("5", "franklin", "humark", "franklinhumark@gmail.com", "network engineer", "IT department", "Seattle", 8753432673,"live:franklin234");

var emp6 = new employee("6", "angela", "bailey", "angelabailey@gmail.com", "talent manager", "HR department", "Seattle", 9855545544,"live:angela345");

var emp7 = new employee("7", "robert", "mitchell", "anthonymorris@gmail.com", "software engineer", "IT department", "Seattle", 6755554344,"live:robert456");

var emp8 = new employee("8", "olivia", "watson", "oliviawatson@gmail.com", "UI designer", "UX department", "Seattle", 8977665544,"live:olivia234");

totalemployees.push(emp1);
totalemployees.push(emp2);
totalemployees.push(emp3);
totalemployees.push(emp4);
totalemployees.push(emp5);
totalemployees.push(emp6);
totalemployees.push(emp7);
totalemployees.push(emp8);

localStorage.setItem("totalemployees", JSON.stringify(totalemployees));
create_cards(totalemployees);

let newEmployee = employee(
  document.getElementById("firstnameInput").value,
  document.getElementById("lastnameInput").value,
  document.getElementById("emailInput").value,
  document.getElementById("jobtitleInput").value,
  document.getElementById("officeInput").value,
  document.getElementById("departmentInput").value,
  document.getElementById("phonenumberInput").value,
  document.getElementById("skypeidInput").value,
);



function submitForm() {
  var newEmployee = new employee("", document.getElementById("firstnameInput").value,
    document.getElementById("lastnameInput").value,
    document.getElementById("emailInput").value,
    document.getElementById("jobtitleInput").value,
    document.getElementById("officeInput").value,
    document.getElementById("departmentInput").value,
    document.getElementById("phonenumberInput").value,
    document.getElementById("skypeidInput").value
  );
  totalemployees.push(newEmployee);

  localStorage.setItem("totalemployees", JSON.stringify(totalemployees));
  json = localStorage.getItem("totalemployees");
  myobj = JSON.parse(json);
  create_cards(myobj);
  document.querySelector("form").reset();
  document.querySelector(".popup").style.display = "none";
};




function filterByKeyword() {
  var filtertype = document.getElementById("selectoption").value;
  var searchitem = document.getElementById("searchbar").value.toUpperCase();
  if (filtertype == "department") {
    var resultant_employees = totalemployees.filter(employee => employee.department.toUpperCase() == searchitem);
    create_cards(resultant_employees);
  }
  else if (filtertype == "firstname") {
    var resultant_employees = totalemployees.filter(employee => employee.firstname.toUpperCase() == searchitem);
    create_cards(resultant_employees);
  } else if (filtertype == "lastname") {
    var resultant_employees = totalemployees.filter(employee => employee.lastname.toUpperCase() == searchitem);
    create_cards(resultant_employees);
  } else if (filtertype == "jobtitle") {
    var resultant_employees = totalemployees.filter(employee => employee.jobtitle.toUpperCase() == searchitem);
    create_cards(resultant_employees);
  } else if (filtertype == "office") {
    var resultant_employees = totalemployees.filter(employee => employee.office.toUpperCase() == searchitem);
    create_cards(resultant_employees);
  } else if (filtertype == "email") {
    var resultant_employees = totalemployees.filter(employee => employee.email.toUpperCase() == searchitem);
    create_cards(resultant_employees);
  } else if (filtertype == "skypeid") {
    var resultant_employees = totalemployees.filter(employee => employee.skypeid.toUpperCase() == searchitem);
    create_cards(resultant_employees);
  }

  if (searchitem == "") {
    create_cards(totalemployees);
  }
}


function form(k){
  document.querySelector("#popupForEdit").style.display = "flex";
  document.getElementById("editDetailsForm").innerHTML = `
  firstname:<input type="text" placeholder="firstname" value=${totalemployees[k].firstname}  id="firstname" contenteditable="true" required />
  lastname:<input type="text" placeholder="lastname"  value=${totalemployees[k].lastname}  id="lastname" contenteditable="true" required />
  <!--preferredname:<input type="text" value=${totalemployees[k].preferredname} placeholder="preferredname"  name="prefferedname" id="preferredname" required/> -->
  email:<input type="email"  value=${totalemployees[k].email} placeholder="email" id="email" contenteditable="true" required />
  jobtitle:<input type="text"  value=${totalemployees[k].jobtitle} placeholder="Job Title" id="jobtitle" contenteditable="true" required />
  office:<input type="text"  value=${totalemployees[k].office} placeholder="Office" id="office" contenteditable="true" required />
  department:<input type="text"  value=${totalemployees[k].department} placeholder="Department"  id="department" contenteditable="true" required />
  phonenumber:<input type="number" value=${totalemployees[k].phonenumber}  placeholder="Phone Number" name="phonenumber" id="phonenumber" required/> 
  skypeid:<input type="text" value=${totalemployees[k].skypeid} placeholder="Skype ID"  id="skypeid" contenteditable="true"   required />
  <input  name="submit" type="button" id="edit" onclick="editForm(${k})" value="save" class="btn-primary" /></input>`;

};


function editForm(k) {


  let firstname=document.getElementById("firstname").value;
  let lastname=document.getElementById("lastname").value;
  // let preferredname=document.getElementById("preferredname").value;
  let email=document.getElementById("email").value;
  let jobtitle=document.getElementById("jobtitle").value;
  let office =document.getElementById("office").value;
  let department=document.getElementById("department").value;
  let phonenumber = document.getElementById("phonenumber").value;
  let skypeid=document.getElementById("skypeid").value;

  console.log(firstname);


  totalemployees[k].firstname = firstname;
  totalemployees[k].lastname = lastname;
  // totalemployees[k].preferredname = preferredname;
  totalemployees[k].email = email;
  totalemployees[k].jobtitle = jobtitle;
  totalemployees[k].office = office;
  totalemployees[k].department = department;
  totalemployees[k].phonenumber = phonenumber;
  totalemployees[k].skypeid = skypeid;
  

  create_cards(totalemployees);


  document.querySelector("#popupForEdit").style.display = "none";
  
};








































