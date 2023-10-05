/*
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
*/



const tareas = JSON.parse( localStorage.getItem("tareas")) || []

const ingresarTarea = (id,fecha, tarea, fechaRealizacion, fechaLimite, tipoPriodidad, estado) => {
    const tarea ={
        id: Math.round(Math.random() * 1000000000000000),
        fecha: new Date().toLocaleString(),
        tarea,
        fechaRealizacion,
        fechaLimite,
        tipoPriodidad,
        estado:[]
    }
    tareas.push(tareas)
    localStorage.setItem("tareas",JSON.stringify(tareas))

}

const formIngresarTarea = document.getElementById("formIngresarTarea")
formIngresarTarea.addEventListener("submit",(e)=>{
    e.preventDefault();
    const datos = e.target.children
    ingresarTarea(datos["id"].value,datos["fecha"].value,datos["tarea"].value,datos["fechaRealizacion"].value,datos["fechaLimite"].value,)

})




