import { alert } from './alerts';

function validateEmail(emailAdress) {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

export default function validation(username, password, repeatPassword, email) {
  if (!username || !password || !repeatPassword || !email) {
    alert('One of fields is empty!');
    return false;
  }
  if (password.length < 8 || repeatPassword.length < 8) {
    alert('The password need to be at least 8 characters long!');
    return false;
  }
  if (password !== repeatPassword) {
    alert('Passwords are not matching !');
    return false;
  }
  if (!validateEmail(email)) {
    alert('Invalid email !');
    return false;
  }
  return true;
}
