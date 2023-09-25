var a = document.getElementById("male");
var b = document.getElementById("female");
var c = document.getElementById("btn");
var d = document.getElementById("head");
var e = document.getElementById("para");

var val = Math.floor(Math.random() * 100);
function clickMe() {
  if ((d.innerHTML = val >= 55)) {
    d.innerHTML = val + "%";
    e.innerHTML =a.value +" and "+b.value+" the strength of your love is extreme👫🏽💑😱!!!, You can also try calculating your friends love strength.";
  }
   else {
    d.innerHTML = val + "%";
    e.innerHTML =a.value+" and "+b.value+" the strength of your love is a little low 🥀😥💔!!!, You can also try calculating your friends love strength.";
  }
}
