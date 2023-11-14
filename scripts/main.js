var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/my-image.jpg") {
    myImage.setAttribute("src", "images/my-image2.jpg");
  } else {
    myImage.setAttribute("src", "images/my-image.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Пожалуйста введите свое имя.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Привет тебе, " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Привет тебе, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };