import { User } from "../models/user.model.js";
import { setInputComment } from "../Comment/CommentComponent.js";
import { LoginService } from "../services/login.services.js";

const getLoginInputs = () => {
  return {
    username: document.getElementById("username"),
    password: document.getElementById("password"),
  };
};

const handleShowHide = () => {
  const newCommentTag = document.getElementById("form-comentario");
  const loginTag = document.getElementById("login-form");
  if (newCommentTag.classList.contains("disabled")) {
    newCommentTag.classList.remove("disabled");
    loginTag.classList.add("disabled");
  } else {
    newCommentTag.classList.add("disabled");
    loginTag.classList.remove("disabled");
  }
};

const handleLogin = (event) => {
  event.preventDefault();
  const { username, password } = getLoginInputs();
  const user = new User(null, username.value, password.value);

  LoginService.apiAuthUser(user)
    .then((result) => {
      console.log(result);
      user.setId(result.id);
      user.setPassword(null);
      user.setFirstname(result.firstname);
      user.setLastname(result.lastname);
      handleShowHide();

      const setInputComment = document.getElementById("inputAuthor");
      inputAuthor.value = result.firstname + " " + result.lastname;
      inputAuthor.disabled = true;
      inputAuthor.style.backgroundColor = "#faebd7";
      inputAuthor.style.color = "#444";
      console.log(user);
    })
    .catch((error) => {
      alert(`Login inválido. Erro:${error.message}`);
    });

  console.log(user);
};

const LoginComponent = {
  run: () => {
    const formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit", handleLogin);
  },
};

export { LoginComponent };