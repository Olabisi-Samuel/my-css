fetch("http://localhost:5050/User")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

let frm = document.getElementById("frm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phoneNum = document.getElementById("phoneNum");
let emailInput = document.getElementById("emailInput");
let passInput1 = document.getElementById("passInput1");
let passInput2 = document.getElementById("passInput2");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let emailError = document.querySelector(".email-error");
let phoneError = document.querySelector(".phone-error");
let passError = document.querySelector(".pass-error");

frm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (firstName.value === "") {
    firstName.classList.add("error");
    return;
  } else {
    firstName.classList.remove("error");
  }

  if (lastName.value === "") {
    lastName.classList.add("error");
    return;
  } else {
    lastName.classList.remove("error");
  }

  let phone = phoneNum.value;
  RegExp = /^\d{11}$/;
  if (!RegExp.test(phone)) {
    phoneNum.classList.add("error");
    phoneError.innerHTML = "Please add a valid phone number";
    return;
  } else {
    phoneNum.classList.remove("error");
    phoneError.innerHTML = "";
  }

  let mail = emailInput.value;
  RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!RegExp.test(mail)) {
    emailInput.classList.add("error");
    emailError.innerHTML = "Please enter a valid email address";
    return;
  } else {
    emailInput.classList.remove("error");
    emailError.innerHTML = " ";
  }

  let pass = passInput1.value;
  RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!RegExp.test(pass)) {
    passInput1.classList.add("error");
    return;
  } else {
    passInput1.classList.remove("error");
  }

  if (passInput2.value !== passInput1.value) {
    passInput2.classList.add("error");
    return;
  } else {
    passInput2.classList.remove("error");
  }

  fetch("http://localhost:5050/User", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phoneNum.value,
      email: emailInput.value,
      password: passInput1.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function (res) {
      console.log(res);
      if (res.statusText === "Created") {
        location.href = "./login.html";
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

phoneNum.addEventListener("blur", function () {
  let phone = phoneNum.value;
  RegExp = /^\d{11}$/;
  if (!RegExp.test(phone)) {
    phoneNum.classList.add("error");
    phoneError.innerHTML = "Please add a valid phone number";
  } else {
    phoneNum.classList.remove("error");
    phoneError.innerHTML = "";
  }
});

emailInput.addEventListener("blur", function () {
  let mail = emailInput.value;
  RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!RegExp.test(mail)) {
    emailInput.classList.add("error");
    emailError.innerHTML = "Please enter a valid email address";
  } else {
    emailInput.classList.remove("error");
    emailError.innerHTML = " ";
  }
});

passInput1.addEventListener("blur", function () {
  let pass = passInput1.value;
  RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!RegExp.test(pass)) {
    passInput1.classList.add("error");
  } else {
    passInput1.classList.remove("error");
  }
});

passInput2.addEventListener("blur", function () {
  if (passInput2.value !== passInput1.value) {
    passInput2.classList.add("error");
  } else {
    passInput2.classList.remove("error");
  }
});
