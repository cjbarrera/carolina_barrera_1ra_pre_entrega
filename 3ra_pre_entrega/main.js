const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const elemento = document.querySelector('#elemento')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let LIST = []

let id



//fecha actualizada auto

const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})







// funcion de agregarTarea 

function agregarTarea(tarea, fecha, prioridad, id, realizado, eliminado) {
    if(eliminado) {return}

    const REALIZADO = realizado ? check : uncheck

    const LINE = realizado ? lineThrough : '' 
    const elemento = `
        <div class="white">
            <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
            <p class="text ${LINE}">${tarea}</p>
            <p class="fecha">${fecha}</p>
            <p class="prioridad">${prioridad}</p>
            <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
        </div>
    `
    lista.insertAdjacentHTML("beforeend", elemento);
}







// funcion de tareaRealizada 

function tareaRealizada(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true
}

function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true
    console.log(LIST)
}






// crear un evento para enter y habilitar el botón 

botonEnter.addEventListener('click', () => {
    const tarea = input.value;
    const fechaTarea = document.querySelector('#fechaTarea').value;
    const prioridad = document.querySelector('#prioridad').value;

    if (tarea) {
        agregarTarea(tarea, fechaTarea, prioridad, id, false, false)

        // localStorage para almacenar la tarea, fecha, prioridad, etc.
        LIST.push({
            nombre: tarea,
            fecha: fechaTarea,
            prioridad: prioridad,
            id: id,
            realizado: false,
            eliminado: false
        })

        localStorage.setItem('TODO', JSON.stringify(LIST))
        id++
        input.value = ''
        document.querySelector('#fechaTarea').value = ''
        document.querySelector('#prioridad').value = 'baja'
    }
})




document.addEventListener('keyup', function (event) {
    if (event.key=='Enter'){
        const tarea = input.value
        if(tarea) {
            agregarTarea(tarea,id,false,false)
        LIST.push({
            nombre : tarea,
            id : id,
            realizado : false,
            eliminado : false
        })
        localStorage.setItem('TODO',JSON.stringify(LIST))
     
        input.value = ''
        id++
        }
    }
    
})


lista.addEventListener('click',function(event){
    const element = event.target 
    const elementData = element.attributes.data.value
    console.log(elementData)
    
    if(elementData == 'realizado') {
        tareaRealizada(element)
    }
    else if(elementData == 'eliminado') {
        tareaEliminada(element)
        console.log("elimnado")
    }
    localStorage.setItem('TODO',JSON.stringify(LIST))
})




let data = localStorage.getItem('TODO')
if(data){
    LIST = JSON.parse(data)
    id = LIST.length
    cargarLista(LIST)
}else {
    LIST = []
    id = 0
}


function cargarLista(array) {
    array.forEach(function(item){
        agregarTarea(item.nombre, item.fecha, item.prioridad, item.id, item.realizado, item.eliminado)
    })
}
