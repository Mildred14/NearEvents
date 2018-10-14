document.getElementById('form').addEventListener('submit',(e)=>{
    let name = document.getElementById("name").value;
    let place = document.getElementById("place").value;
    let date = document.getElementById("date").value;
    let number = document.getElementById("number").value;
    let information = document.getElementById("information").value;
    createUser(name,place,date,number,information);
    e.preventDefault();
});
var users=[];

function createUser(name,place,date,number, information){
    var user={
        name:name,
        place:place,
        date: date,
        number: number,
        information: information
    }
    users.push(user);
    readUser();
    console.log(users);
    document.getElementById('form').reset();
}
function readUser(){
    var userhtml=document.getElementById('user');
    userhtml.innerHTML='';
    for(var i=0; i<users.length; i++){
        userhtml.innerHTML+= `<div class="eventoCreado"><h2>Evento Creado</h2><p>Name: ${users[i].name}</p><br>
        <p>Lugar: ${users[i].place}</p><br>
        <p>Fecha: ${users[i].date}</p><br>
        <p>Participantes: ${users[i].number}</p><br>
        <p>Actividades: ${users[i].information}</p><br>
        <button class="edit" onClick="updateUsers('${i})">Edit</button>
        <button class="remove" onClick="remove('${i})">Delete</button> `
    }
}