const ingresos = [
    new Ingreso('Salario', 2800),
    new Ingreso('Comisiones', 500),
    new Ingreso('Donativos', 2000),
    new Ingreso('Otros ingresos', 300)
]

const egresos = [
    new Egreso('Gasto de transporte', 500),
    new Egreso('Gasto de combustible', 200),
    new Egreso('Gasto de alimentacion', 300),
    new Egreso('Gasto de entretenimiento', 100)
]

let cargarApp =() => {
    console.log("entrando app funcion cargar app")
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos =() => {
    let totalIngresos = 0;
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }
    console.log("total ingreso: ", totalIngresos);
    return totalIngresos;
}

let totalEgresos =() => {
    let totalEgresos = 0;
    for (let egreso of egresos) {
        totalEgresos += egreso.valor;
    }
    console.log("total egreso: ",totalEgresos);
    return totalEgresos;
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda =(valor) =>{
    return valor.toLocaleString('en-US', {style: 'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje =(valor) =>{
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2})
}

const cargarIngresos =()=>{
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn" title="eliminar">
                                <ion-icon name="trash-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;
                return ingresoHTML;
}

const cargarEgresos =()=>{
    let egresosHTML = '';
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn" title="eliminar">
                                <ion-icon name="trash-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;
                return egresoHTML;
}

const eliminarIngreso = (id) => {
    let elim = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(elim, 1);
    cargarCabecero();
    cargarIngresos();
}

const eliminarEgreso = (id) => {
    let elim = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(elim, 1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    //let valor = parseFloat(forma['valor'].value);
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        } else{
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}