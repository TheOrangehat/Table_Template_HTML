var TableDiv = document.getElementsByClassName("tables")[0];
var Table = document.getElementById("Table");
var Heading1 = document.getElementById("Th1");
var Heading2 = document.getElementById("Th2");
var Heading3 = document.getElementById("Th3");

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
  });
}
