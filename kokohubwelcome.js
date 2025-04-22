const text = "Welcome To KOKEMERCE";
const typingText = document.getElementById("typingText");
const cursor = document.getElementById("cursor");
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 300);
  } else {
    cursor.style.display = "none";
    setTimeout(() => {
      cursor.style.display = "inline-block"; 
      setTimeout(clearText, 1500);
    }, 1000);
  }
}

function clearText() {
  typingText.textContent = ""; 
  index = 0; 
  type(); 
}

document.addEventListener("DOMContentLoaded", () => {
  type(); 
});

for(var i = 0; i < 10; i++) {
    var bulb = document.createElement("div");
    bulb.className = "bulb";
    var rand = Math.floor(Math.random() * 180) +1;
    bulb.style.transform = "rotate("+rand+"deg)";
    document.getElementById('lights').appendChild(bulb);
  }
