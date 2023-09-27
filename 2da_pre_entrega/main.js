const tareas =[]

const ingresarTarea = () => {

let agregar = confirm("¿Quieres agregar una tarea para esta semana?")

while(agregar){
    const accionTarea = prompt("Que tarea quieres agregar")
    const fechaRealizacion = prompt("Fecha de realizacion (formato:dd/mm/aa hh:mm)")
    const fechaLimite = prompt("Fecha de limite (formato:dd/mm/aa hh:mm)")
    const tipoPriodidad = prompt ("Que prioridad tiene (alta, media o baja)")
    const confirmacionTarea = confirm("Confirmas tu tarea agendada: " + accionTarea + " el día " + fechaRealizacion + " a más tardar " + fechaLimite + " con prioridad " + tipoPriodidad)
    if (confirmacionTarea){
        alert( "Se agendo " + accionTarea + " en la fecha: " + fechaRealizacion)
        const tarea ={
            id: Math.round(Math.random() * 1000000000000000),
            fecha: new Date().toLocaleString(),
            accion:accionTarea,
            fechaRealizacion:fechaRealizacion,
            fechaLimite:fechaLimite,
            tipoPriodidad:tipoPriodidad,
            estado:"pendiente"
        }
        tareas.push(tarea)
        console.log(tareas)
    }
    else {
        alert("No se guardo la tarea")
    }

    agregar = confirm("¿Quieres agregar otra tarea para esta semana?")
}

}

ingresarTarea()