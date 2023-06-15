function validateForm() {
    // Get the values of the input boxes
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var zipcode = document.getElementById("zipcode").value;
  
     // Check if the first name + last name is shorter than 2 characters
    if (firstname.length + lastname.length < 2) {
        alert("You must input your first and last name.");
        return false;
      }
    
    // Check if the first name + last name is longer than 20 characters
    if (firstname.length + lastname.length > 20) {
      alert("The first name and last name combined must be less than 20 characters.");
      return false;
    }
  
    // Check if the zip code is valid
    if (zipcode.length != 5) {
      alert("The zip code must be 5 digits.");
      return false;
    }
  
    // The inputs are valid, so show the secret message
    document.getElementById("message").innerHTML = "The secret message is: I love JavaScript!";
    return false;
  }
