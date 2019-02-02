function validateForm() {
  var name = document.forms["contactUs"]["name"].value;
  if (name == "") {
    alert ("Please Enter Your Name");
    return false;
  }

  var email = document.forms["contactUs"]["email"].value;
  var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var isValid = regex.test(email) && email !== "";
  if (!isValid) {
    alert("Enter a valid email. ");
    return false;
  }
  alert("Thank you for contacting us!")
  return false;
}
