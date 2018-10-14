document.getElementById('form').addEventListener('submit',(e)=>{
    let name = document.getElementById("name").value;
    let place = document.getElementById("place").value;
    let date = document.getElementById("date").value;
    let number = document.getElementById("number").value;
    let information = document.getElementById("information").value;
    createEvento(name,place,date,number,information);
    e.preventDefault();
});
var eventos=[];

function createEvento(name,place,date,number, information){
    var evento={
        name:name,
        place:place,
        date: date,
        number: number,
        information: information
    }
    eventos.push(evento);
    readEvento();
    console.log(eventos);
    document.getElementById('form').reset();
}
function readEvento(){
    var eventohtml=document.getElementById('evento');
    eventohtml.innerHTML='';
    for(var i=0; i<eventos.length; i++){
        eventohtml.innerHTML+= `<div class="eventoCreado"><h2>Evento Creado</h2><p>Name: ${eventos[i].name}</p><br>
        <p>Lugar: ${eventos[i].place}</p><br>
        <p<Fecha: ${eventos[i].date}</p><br>
        <p>Participantes: ${eventos[i].number}</p><br>
        <p>Actividades: ${eventos[i].information}</p><br>
        <button class="edit" onClick="updateEventos('${i})">Edit</button>
        <button class="remove" onClick="remove('${i})">Delete</button> `
    }
}