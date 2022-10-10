let frm = document.getElementById("frm");
let emailInput = document.getElementById("email-input");
let password = document.getElementById("pass-input");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let emailError = document.querySelector(".email-error");
let passError = document.querySelector(".pass-error");

frm.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch("http://localhost:5050/User")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let user = [];
      let pass = [];
      for (let item of data) {
        user.push(item.emailInput);
        pass.push(item.passInput1);
        console.log(item);
      }
      if (!user.includes(emailInput.value)) {
        emailInput.classList.add("error");
        emailError.innerHTML = "Wrong email address";
      } else {
        emailInput.classList.remove("error");
        emailError.innerHTML = "";
      }

      if (!pass.includes(password.value)) {
        password.classList.add("error");
        passError.innerHTML = "Incorrect password";
      } else {
        password.classList.remove("error");
        passError.innerHTML = "";
      }

      //   let con = confirm("You are logged in");
      //   if (con) {
      //     location.assign("./dashboard.html");
      //   }
      if (emailInput.value === "") {
        emailInput.classList.add("error");
        emailError.innerHTML = "Input a valid email address";
      } else if (password.value === "") {
        password.classList.add("error");
        passError.innerHTML = "Input a valid password";
      } else if (
        user.includes(emailInput.value) &&
        pass.includes(password.value)
      ) {
        location.href = "./index.html";
      }
    });
});
