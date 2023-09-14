const ingresarTarea = () =>{

let agregar = prompt("¿Quieres agregar una tarea para esta semana? (si, no)")
let diaTarea
let horaTarea
let accionTarea
let confirmacionTarea

while(agregar === "SI"){
    diaTarea = prompt("Ingresa que día quieres agendarlo")
    horaTarea = prompt("A que hora quieres agendarlo")
    accionTarea = prompt("Que tarea quieres agregar")
    confirmacionTarea = prompt("Confirmas tu información ingresada (aceptar, cancelar)")
    if (confirmacionTarea == "ACEPTAR"){
        alert( "Se agendo " + accionTarea + " el día " + diaTarea + " a la hora " + horaTarea)
    }
    else if (confirmacionTarea == "CANCELAR"){
        alert("No se ingresó ninguna tarea")
    }
    else {
        alert("Acción no válida")
    }

    agregar = prompt("¿Quieres agregar otra tarea para esta semana? (SI, NO)")
}

}

ingresarTarea()