function calculate() {
  let r = document.getElementById("radiusInput").value;
  let C = 2 * 3.142 * r;
  let D = 2 * r;
  let A = 3.142 * r ** 2;

  document.getElementById("C").innerHTML = "Circumference " + C.toFixed(2);
  document.getElementById("D").innerHTML = "Diameter " + D.toFixed(2);
  document.getElementById("A").innerHTML = "Area " + A.toFixed(2);

  document.getElementById("ans").style.display = "block";

  if (isNaN(r) || r <= 0){
    alert("Enter a valid radius");
    return;
  }
}

function reset() {
  document.getElementById("radiusInput").value = "";
  document.getElementById("ans").style.display = "none";
}
