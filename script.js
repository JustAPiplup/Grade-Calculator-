// Grade Calculator

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //  INPUT
  let CSS1 = +document.getElementById("input1").value;
  let SP1 = +document.getElementById("input2").value;
  let SP2 = +document.getElementById("input3").value;
  let CSS2 = +document.getElementById("input4").value;
  let PA = +document.getElementById("input5").value;
  // PROCESS
  let grade = (CSS1 + SP1 + SP2 + CSS2 + PA) / 5;

  // OUTPUT
  document.getElementById("output").innerHTML = grade;
}
