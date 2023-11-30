

setInterval(function () {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  document.getElementById("hours").innerHTML = h;
  document.getElementById("mins").innerHTML = m;
  document.getElementById("secs").innerHTML = s;
}, 1000);
