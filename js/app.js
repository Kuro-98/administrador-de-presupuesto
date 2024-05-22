//variables y selectores.
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//eventos
eventListeners();
function eventListeners() {
	document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}
//clases

//funciones
function preguntarPresupuesto() {
	const presupuestoUsuario = Number(prompt('Cuanta lana tienes??'));
	console.log(presupuestoUsuario);
	if (
		presupuestoUsuario === '' ||
		presupuestoUsuario === null ||
		isNaN(presupuestoUsuario) ||
		presupuestoUsuario <= 0
	) {
		window.location.reload();
	}
}
