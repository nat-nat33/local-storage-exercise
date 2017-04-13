//creates a function that generates a empty object that will be saved to localStorage
(function(){
  var user = {
    id: 0,
    name: "",
    address:"",
    email: "",
    mobile: "",
    gender: "",
  }

  //creates object that contains methods for localStorage handling
  var handler = {
    //saves user inputs as one entry to local storage
    saveEntry: function (){
      var inputs = document.querySelectorAll(".tcell");
        user.id = inputs[0].value;
        user.name = inputs[1].value;
        user.address = inputs[2].value;
        user.email = inputs[3].value;
        //converts object into JSON and store in localStorage
        localStorage.setItem("user_" + localStorage.length, JSON.stringify(user));
        //reloads the page
        location.reload();
    },

    //clears user input fields on the page
    clearEntry: function(){
      var inputs = document.querySelectorAll(".tcell");
      for(i = 0; i< inputs.length; i++){
        inputs[i].value = "";
      };
    },

    //displays user entries
    displayEntry: function(){
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
  };

  //Save Button Function
  var save = document.getElementById('save');
    save.addEventListener('click', handler.saveEntry);

  //Clear User Input Function
  var clear = document.getElementById('clear');
    clear.addEventListener('click', handler.clearEntry);

  window.onload = function () {
    handler.displayEntry();
  };
})();