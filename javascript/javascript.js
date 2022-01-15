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

function EditLink(event) {
  var target = event.target;
  if (target.getAttribute("href") == null) {
    var link = window.prompt("Enter your link: ");
    target.setAttribute("href", link);
    console.log(link);
  } else {
    window.alert("pahle hi hai na ", link);

    window.open(link);
  }
}
