
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
function validateForm() {
  let x = document.forms["user"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validatePassword(fld) {
  var error = "";
  var illegalChars = /[\W_]/; 

  if (fld.value == "") {
      fld.style.background = 'Yellow';
      error = "You didn't enter a password.\n";
      alert(error);
      return false;

  } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
      error = "The password is the wrong length. \n";
      fld.style.background = 'Yellow';
      alert(error);
      return false;

  } else if (illegalChars.test(fld.value)) {
      error = "The password contains illegal characters.\n";
      fld.style.background = 'Yellow';
      alert(error);
      return false;

  } else if ( (fld.value.search(/[a-zA-Z]+/)==-1) || (fld.value.search(/[0-9]+/)==-1) ) {
      error = "The password must contain at least one numeral.\n";
      fld.style.background = 'Yellow';
      alert(error);
      return false;

  } else {
      fld.style.background = 'White';
  }
 return true;
}