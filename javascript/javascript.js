var Tablehead = document.getElementsByClassName("table")[0];
var importantUl = document.getElementsByClassName("impoul")[0];
var feesUl = document.getElementsByClassName("feeul")[0];
var midTh = document.getElementById("midTh");
var postLine = document.getElementsByClassName("postlinecont")[0];
var vacaLine = document.getElementById("VacancyLine");
var AppplySec = document.getElementById("ApplySection");
var Container = document.getElementsByClassName("Paged")[0];

function Adder(id) {
  console.log(id);
  if (id == "important") {
    importantUl.innerHTML += `<li onclick="EditText(event)">item</li>`;
  } else if (id == "Fees") {
    feesUl.innerHTML += `<li onclick="EditText(event)">item</li>`;
  } else if (id == "Title") {
    Tablehead.tHead.innerHTML += `<tr class="jch"><th onclick="EditText(event)" colspan="16">Title</th></tr><br>`;
  } else if (id == "midThBtn") {
    midTh.innerHTML += `<tr class="jcmh"><th onclick="EditText(event)" colspan="16">Title</th></tr>`;
  } else if (id == "postLine") {
    postLine.innerHTML += `<tr>
    <td onclick="EditText(event)" colspan="5">Post Name</td>
    <td onclick="EditText(event)" colspan="3">Post</td>
    <td onclick="EditText(event)" colspan="9">Post Eligibility</td>
</tr>`;
  } else if (id == "VacancyLine") {
    vacaLine.innerHTML += `<tr>
    <td onclick="EditText(event)" colspan="3">Vacancy</td>
    <td onclick="EditText(event)" colspan="2">Cast</td>
    <td onclick="EditText(event)" colspan="2">Cast</td>
    <td onclick="EditText(event)" colspan="2">Cast</td>
    <td onclick="EditText(event)" colspan="2">Cast</td>
    <td onclick="EditText(event)" colspan="2">Cast</td>
    <td onclick="EditText(event)" colspan="2">Cast</td>
    <td onclick="EditText(event)" colspan="2">Cast</td>
</tr>`;
  } else if (id == "ApplyRow") {
    linkmaker();
  }
}

function linkmaker() {
  var link = window.prompt("Enter your link: ");
  AppplySec.innerHTML += `<tr>
  <td onclick="EditText(event)" colspan="10">Apply Now</td>
  <td onclick="EditText(event)" colspan="7"><button href="${link}" target="_balank">Click here </button></td>
  
</tr>`;
  window.alert("Link previwe is not available!!");
}

function addTh() {
  Tablehead.tHead.innerHTML += `<tr class="jch">
    <th onclick="EditText(event)" colspan="17">Title</th>
</tr>`;
}
function removeTh() {
  var jch = document.getElementsByClassName("jch");
  let i = jch.length;
  if (i > 0) {
    jch[i - 1].remove();
  }
}

function EditText(event) {
  let textarea = document.getElementById("textArea");

  var target = event.target;
  if (textarea == null) {
    target.innerHTML = `<textarea id="textArea">${target.innerHTML}</textarea>`;
  } else {
    console.log("Found!");
  }
  textarea = document.getElementById("textArea");
  textarea.addEventListener("blur", function () {
    target.innerHTML = textarea.value;
    var copytext = Container.innerHTML;
    localStorage.setItem("data", copytext);
  });
}

function EditLink(event) {
  var target = event.target;
  var link;
  if (target.getAttribute("href") == null) {
    link = window.prompt("Enter your link: ");
    target.setAttribute("href", link);
    console.log(link);
  } else {
    window.alert("pahle hi hai na ", link);

    window.open(link);
  }
}

function CopyMaker() {
  var copytext = Container.innerHTML;

  navigator.clipboard.writeText(copytext);
}

function restore() {
  // if (localStorage.getItem("userName") == null){
  //   var username = window.prompt("Enter Your name:");
  //   localStorage.setItem("userName", username);

  // }else{
  //   window.alert("Hello! ", username);
  // }

  if (localStorage.getItem("data") == null) {
    alert("Great! new Starting!");
  } else {
    Container.innerHTML = ``;
    Container.innerHTML = localStorage.getItem("data");
    window.alert("Last Table Restored!");
    Tablehead = document.getElementsByClassName("table")[0];
    importantUl = document.getElementsByClassName("impoul")[0];
    feesUl = document.getElementsByClassName("feeul")[0];
    midTh = document.getElementById("midTh");
    postLine = document.getElementsByClassName("postlinecont")[0];
    vacaLine = document.getElementById("VacancyLine");
    AppplySec = document.getElementById("ApplySection");
    Container = document.getElementsByClassName("Paged")[0];
  }
}

function delData() {
  localStorage.clear();
  location.reload();
}