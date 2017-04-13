//create a self-invoked function that generates a empty contructor object used to store data in localStorage
(function(){
  var user = {
    id: 0,
    name: "",
    address:"",
    city: "",
    email: "",
    age: 0,
    occupation:"",
    mobile: "",
    gender: "",
  }
})

//create object that contains methods for localStorage handling
var handler = {
  //clears user input fields on the page
  clearInputs: function(){
    var inputs = document.querySelectorAll(".tcell");
    for(i = 0; i< inputs.length; i++){
      inputs[i].value = "";
    };
  },
  //saves user inputs as one entry to local storage
  saveEntry: function (){
    var inputs = document.querySelectorAll(".tcell");
    user.id = inputs[0].value;
    user.name = inputs[1].value;
    user.address = inputs[2].value;
    console.log("user", user);
  }

};
//Save object into localstorage
var save = document.getElementById('save');
  save.addEventListener('click', handler.saveEntry, false);
