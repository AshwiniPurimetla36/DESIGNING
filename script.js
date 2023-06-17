function validateContactform() {
  var name = document.forms ["form"]["Name"].value;
  var email = document.forms["form"]["Email id"].value;
  var password = document.forms["form"]["password"].value;

  // Perform form validation checks
  if (name == "") {
    alert("Please enter your name.");
    return false;
  }

  if (email == "") {
    alert("Please enter your email address.");
    return false;
  }

  if (password == "") {
    alert("Please enter a password.");
    return false;
  }
  return true;
}