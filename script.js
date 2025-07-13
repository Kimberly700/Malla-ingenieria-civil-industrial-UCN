const grid = document.getElementById("grid");

// Crear una malla de 10x10
for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  // Alternar clase al hacer clic
  cell.addEventListener("click", () => {
    cell.classList.toggle("active");
  });

  grid.appendChild(cell);
}
