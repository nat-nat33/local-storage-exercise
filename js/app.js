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
    //clears user input fields on the page
    clearEntry: function(){
      var inputs = document.querySelectorAll(".tcell");
      for(i = 0; i< inputs.length; i++){
        inputs[i].value = "";
      };
    },
    //saves user inputs as one entry to local storage
    saveEntry: function (){
      var storageCount = localStorage.length;
      // console.log('count', storageCount);
      // console.log('user', user);
      var inputs = document.querySelectorAll(".tcell");
        user.id = inputs[0].value;
        user.name = inputs[1].value;
        user.address = inputs[2].value;
        user.email = inputs[3].value;
        //converts object into JSON and store in localStorage
        localStorage.setItem("user_" + storageCount, JSON.stringify(user));
    },

    displayEntry: function(){
      var dataCount = localStorage.length;
        console.log('dataCount LENGTH', dataCount);
        if (dataCount > 0){
          console.log('frooooooogggyyy');
          var render = "<div border= '1'>";
          render += "<div>id</div>";
          for(i = 0; i < dataCount.length; i++){
            console.log('ppoooooooppp');
            var key = localStorage.key(i); //Get  the Key
            var entry = localStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(user); //Parse the Data back into the object
            console.log(data, "data here");
            console.log('poop parse', data);
            render += "<li>" + data.id + "</li>";
          }
          render += "</div>"
          display_container.innerHTML = render;
        }
    }
  };

  //Save Button Function
  var save = document.getElementById('save');
    save.addEventListener('click', handler.saveEntry);
    handler.displayEntry();

  //Clear User Input Function
  var clear = document.getElementById('clear');
    clear.addEventListener('click', handler.clearEntry);

  // window.onload = function () {
  //   handler.displayEntry();
  // };
})();