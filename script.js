function mostrarSeccion(id) {
  document.getElementById("menuPrincipal").style.display = "none";
  document.querySelectorAll("section").forEach(sec => {
    if (sec.id !== id && sec.id !== "menuPrincipal") sec.style.display = "none";
  });
  const seccion = document.getElementById(id);
  seccion.style.display = "block";
  seccion.classList.add("animar-entrada");
}

function volver() {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  document.getElementById("menuPrincipal").style.display = "block";
}
