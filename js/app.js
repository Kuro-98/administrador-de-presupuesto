//variables y selectores.
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//eventos
eventListeners();
function eventListeners() {
	document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
	formulario.addEventListener('submit', agregarGasto);
}
//clases

class Presupuesto {
	constructor(presupuesto) {
		this.presupuesto = Number(presupuesto);
		this.restante = Number(presupuesto);
		this.gastos = [];
	}

	nuevoGasto(gasto) {
		this.gastos = [...this.gastos, gasto];
		console.log(this.gastos);
	}
}

class UI {
	insertarPresupuesto(cantidad) {
		const { presupuesto, restante } = cantidad;
		document.querySelector('#total').textContent = presupuesto;
		document.querySelector('#restante').textContent = restante;
	}

	imprimirAlerta(mensaje, tipo) {
		const div = document.createElement('div');
		div.textContent = mensaje;
		div.classList.add('text-center', 'alert');

		if (tipo === 'error') {
			div.classList.add('alert-danger');
		} else {
			div.classList.add('alert-success');
		}
		formulario.insertAdjacentElement('beforebegin', div);
		setTimeout(() => {
			div.remove();
		}, 3000);
	}

	agregarGastoListado(gastos) {
		gastos.forEach((gasto) => {
			console.log(gasto);
		});
	}
}
const ui = new UI();
let presupuesto;
//funciones
function preguntarPresupuesto() {
	const presupuestoUsuario = prompt('Cuanta lana tienes??');

	if (
		presupuestoUsuario === '' ||
		presupuestoUsuario === null ||
		isNaN(presupuestoUsuario) ||
		presupuestoUsuario <= 0
	) {
		window.location.reload();
	}

	//presupuesto valido
	presupuesto = new Presupuesto(presupuestoUsuario);
	ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
	e.preventDefault();
	const nombre = document.querySelector('#gasto').value;
	const cantidad = Number(document.querySelector('#cantidad').value);

	if (nombre === '' || cantidad === '') {
		ui.imprimirAlerta('ambos campos son obligatorios', 'error');
		return;
	} else if (cantidad <= 0 || isNaN(cantidad)) {
		ui.imprimirAlerta('cantidad no valida', 'error');
		return;
	}

	const gasto = { nombre, cantidad, id: Date.now() };
	presupuesto.nuevoGasto(gasto);
	ui.imprimirAlerta('Gasto agregado correctamente');
	const { gastos } = presupuesto;
	ui.agregarGastoListado(gastos);
	formulario.reset();
}
