function checkAnswers() {
  const input1 = document.getElementById("input1").value.toLowerCase();
  const input2 = document.getElementById("input2").value.toLowerCase();
  const input3 = document.getElementById("input3").value.toLowerCase();
  const input4 = document.getElementById("input4").value.toLowerCase();

  const correctAnswers = ["embelesado", "problemas", "escapar", "tiempo"];
  const inputs = [input1, input2, input3, input4];
  const blanks = [document.getElementById("blank1"), document.getElementById("blank2"), document.getElementById("blank3"), document.getElementById("blank4")];
  let allCorrect = true;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] === correctAnswers[i]) {
      blanks[i].innerText = inputs[i]; // Reemplaza el hueco por la palabra correcta
      document.getElementById("input" + (i + 1)).disabled = true; // Bloquea la caja de texto
    } else {
      allCorrect = false;
    }
  }

  if (allCorrect) {
    showSuccessPopup();
  } else {
    showErrorPopup();
  }
}

function showSuccessPopup() {
  document.getElementById("success-popup").style.display = "flex";
}

function showErrorPopup() {
  document.getElementById("error-popup").style.display = "flex";
}

function closeErrorPopup() {
  document.getElementById("error-popup").style.display = "none";
  resetInputs();
}

function resetInputs() {
  const inputs = document.querySelectorAll(".input");
  for (let input of inputs) {
    if (!input.disabled) {
      input.value = "";
    }
  }
}

function nextPage() {
  window.location.href = "prueba2.html";
}
