
window.onload = function(){
  displayEntry();
}

//#1 first created a variable to store the user info per user.
var user = {
  id: 0,
  name: "",
  address: "",
  email: ""
}

//#2 Created a variable to store the element for the save button/input.
var save = document.getElementById("save");
//sanity check to see if save is grabbing the correct element.
//console.log(save);

//#4 Created event listener for click and passed in the saveEntry function to exectue on click.
save.addEventListener('click', saveEntry);

//#9 Stores the clear button/input element to a variable named clear.
var clear = document.getElementById("clear");

//#10 Adds eventlistenter and refrences and executes the clearEntry function.
clear.addEventListener('click', clearEntry);

//#13 stores the display_container element to the variable called display
var display = document.getElementById('display_container');

//#14 stores the clear_storage element to the variable called clear_storage
var clearStorage = document.getElementById('clear_storage');
//#15 adds eventlistener for click on clear local storage button/input.
clearStorage.addEventListener('click', clearLocalStorage);

//#3 Created a function to save each entry from the user.
function saveEntry(){
  //#5 Created a variable to target the class of all the inputs. Used class because it gathers all inputs and puts them in array.
  var inputs = document.querySelectorAll(".tcell");
  //logged inputs to see the output
  //console.log(inputs);
  //found value key in object and logged it.
  //console.log(inputs[0].value);

  //#6 Starts storing input values to user object by reassigning key value.
  user.id = inputs[0].value;
  user.name = inputs[1].value;
  user.address = inputs[2].value;
  user.email= inputs[3].value;
  //sanity check to see if value is changed.
  //console.log("new user id",user.id);
  //console.log("new user", user);

  //#7 stores user object to local storage in JSON form.
  localStorage.setItem("user_" + localStorage.length, JSON.stringify(user));

  //#8 clears inputs from fields.
  location.reload();
}

//#11 Creates a clearEntry function that loops over the inputs array and sets value to a empty string.
function clearEntry(){
  var inputs = document.querySelectorAll(".tcell");
    console.log(inputs);
  for(var i = 0; i < inputs.length; i++){
    inputs[i].value = "";
    console.log('I am clear', i);
  }
}

//#12 Creates a function to display all the user inputs.
function displayEntry(){
   if(localStorage.length > 0){
    var render = "<div>";
    render += "<div id= 'entry-container'>Entries:</div>";
    for(var i = 0; i < localStorage.length; i++){
      var key = localStorage.key(i);//gets the key from local storage.
      var entry = localStorage.getItem(key);
      var data = JSON.parse(entry);
      render += "<ul>";
      render += "<li>"+ data.id +"</li>";
      render += "<li>"+ data.name +"</li>";
      render += "<li>"+ data.address +"</li>";
      render += "<li>"+ data.email +"</li>";
      render += "</ul>";
    }
    render += "</div>"
    display.innerHTML = render;
  }
}

//#16 Creates a function that allows the user to click on a button and clear the local storage.
function clearLocalStorage(){
  window.localStorage.clear();
  location.reload();
}
