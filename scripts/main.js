// Switch image
var myImage = document.getElementById("myPic")

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/pic01.png') {
    myImage.style.width = "200px";
    myImage.style.height = "150px";
    myImage.setAttribute ('src','images/pic02.png');
  } else {
    myImage.setAttribute ('src','images/pic01.png');
    myImage.style.width = "100px";
    myImage.style.height = "150px";
  }
}

// Random Hello
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

setHeader() 

myButton.onclick = function() {
  setHeader() 
} 

function setHeader() {
  myHeading.textContent = randomHeaderMessage()
}

function randomHeaderMessage() {
  let messageArray = [
    'French: Bonjour',
    'Spanish: Hola',
    'German: Hallo',
    'Italian: Ciao',
    'Spanish: Ola',
    'Arabic: Marhabaan',
    'Indian: Namaste',
    'English: Hello',
    `Japanese: Kon'nichiwa`,
    'Irish: Dia dhuit', 
    'Bosnian: zdravo',
  ];

  return messageArray[Math.floor(Math.random() * (messageArray.length -1))];
}

