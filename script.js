let totalFigus = 180;
let container = document.getElementById("figusContainer");
let contador = document.getElementById("contador");

let pegadas = JSON.parse(localStorage.getItem("pegadas")) || [];

function actualizarContador() {
  let restantes = totalFigus - pegadas.length;
  contador.textContent = "Te quedan " + restantes + " figuritas";
}

function guardarEstado() {
  localStorage.setItem("pegadas", JSON.stringify(pegadas));
}

function crearFiguritas() {
  for (let i = 1; i <= totalFigus; i++) {
    let figurita = document.createElement("div");
    figurita.className = "figurita";
    figurita.textContent = i;

    if (pegadas.includes(i)) {
      figurita.classList.add("desactivada");
    }

    figurita.addEventListener("click", function () {
      if (!pegadas.includes(i)) {
        pegadas.push(i);
        figurita.classList.add("desactivada");
        guardarEstado();
        actualizarContador();
      }
    });

    container.appendChild(figurita);
  }
}

crearFiguritas();
actualizarContador();

let reiniciarBtn = document.getElementById("reiniciarBtn");
let confirmarReinicio = false;

reiniciarBtn.addEventListener("click", function () {
  if (!confirmarReinicio) {
    reiniciarBtn.textContent = "Click otra vez para confirmar";
    confirmarReinicio = true;
  } else {
    localStorage.removeItem("pegadas");
    location.reload();
  }
});
