/*var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dasun.jpg') {
      myImage.setAttribute ('src','images/dasun1.jpg');
    } else {
      myImage.setAttribute ('src','images/dasun2.jpg');
    }
}*/

(function () {
    var rotator = document.getElementById('rotator'); // change to match image ID
    var imagesrc = 'images/dasun.jpg';
    var imageDir = 'images/';
    var delayInSeconds = 5;
    // set number of seconds delay
    // list image names
    var images = ['dasun1.jpg', 'dasun2.jpg'];
    var num = 0;
    var changeImage = function () {
        var len = images.length;
        rotator.src = imageDir + images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);
})();

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my site, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my site, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
