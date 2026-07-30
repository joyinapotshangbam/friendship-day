console.log("JavaScript Loaded");

// Typing Effect
const text = "Friends Forever ❤️";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 120);
    }
}

typing();


// Floating Hearts
const emojis = ["💖","🌸","💐","❤️","✨","🌺","🌼"];

setInterval(function(){

const e = document.createElement("div");

e.className="float";

e.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

e.style.left = Math.random()*100 + "vw";

e.style.fontSize = (20+Math.random()*25)+"px";

e.style.animationDuration = (5+Math.random()*5)+"s";

document.body.appendChild(e);

setTimeout(function(){
e.remove();
},10000);

},300);


// Button
document.getElementById("btn").addEventListener("click", function(){

    document.getElementById("music").play();

    alert("🎉 Happy Friendship Day Lanthoi & Yaisana! ❤️");


});

for(let i=0;i<180;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*window.innerWidth+"px";

c.style.top="-20px";

c.style.backgroundColor=`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(c);

setTimeout(function(){

c.remove();

},3000);

}

;