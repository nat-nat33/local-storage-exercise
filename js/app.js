window.onload = function () {
  displayEntry();
};

var user = {
  id: 0,
  name: "",
  address:"",
  email: ""
}

//Save Button Function
var save = document.getElementById('save');
save.addEventListener('click', saveEntry);

//Clear User Input Function
var clear = document.getElementById('clear');
clear.addEventListener('click', clearEntry);

//Clear Local Storage
var clearStorage = document.getElementById('clear_storage');
clearStorage.addEventListener('click', clearLocalStorage)

//Function that clears local storage
function clearLocalStorage() {
  window.localStorage.clear();
  location.reload();
}

//Function that saves user inputs as one entry to local storage
function saveEntry() {

  if(user.id || user.name || user.address || user.email === "") {
    alert("Please fill in all fields");
  }

  var inputs = document.querySelectorAll(".tcell");
  user.id = inputs[0].value;
  user.name = inputs[1].value;
  user.address = inputs[2].value;
  user.email = inputs[3].value;
  //converts object into JSON and store in localStorage
  localStorage.setItem("user_" + localStorage.length, JSON.stringify(user));
  //reloads the page
  location.reload();
}

//Function to clear user input fields on the page
function clearEntry() {
  var inputs = document.querySelectorAll(".tcell");
  for(i = 0; i < inputs.length; i++){
    inputs[i].value = "";
  };
}

//Function to display user entries
function displayEntry(){
  if (localStorage.length > 0){
    var render = "<div>";
    render += "<div id='entry_containter'>Entries:</div>";
    for(i = 0; i < localStorage.length; i++){
      var key = localStorage.key(i); //gets the key
      var entry = localStorage.getItem(key); //gets data from key
      var data = JSON.parse(entry); //parses data back into object
      render += "<ul>";
      render += "<li>" + data.id + "</li>";
      render += "<li>" + data.name + "</li>";
      render += "<li>" + data.address + "</li>";
      render += "<li>" + data.email + "</li>";
      render += "</ul>"
    }
  render += "</div>"
  display_container.innerHTML = render;
  }
}
