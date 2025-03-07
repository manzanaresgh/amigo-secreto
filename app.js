// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*********** VARIABLES ****************/
let listaAmigos = [];
const resultado = document.getElementById("resultado");
const lista = document.getElementById("listaAmigos");
let amigoSecreto = '';
/*********** FUNCIONES ****************/
//Función para agregar amigo secreto
function agregarAmigo(nombre){
    nombre = document.querySelector('#amigo').value;
    if(nombre == ''){
        alert('Ingrese un nombre válido');
    }else{
        listaAmigos.push(nombre);
        limpiarCaja();
        agregarElemento(nombre);
        return;
    }
}
// Función para agregar un nuevo elemento LI a la lista
function agregarElemento(texto) {
    // Crea un nuevo elemento LI
    const nuevoLi = document.createElement("li");
    // Agrega el texto al LI
    nuevoLi.textContent = texto;
    nuevoLi.id = 'test';
    // Agrega el LI a la lista UL
    lista.appendChild(nuevoLi);
    return;
}
//Función para asignar texto a un elemeto HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Función para limpiar el input 
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}
//Función para seleccionar el amigo secreto
function sortearAmigo(lista){
    console.log(lista.length);
    let num = lista.appendChild.length
    //console.log(num);
    limpiarLi('secret_id');
    let listaSortedos = [];
    listaSortedos = listaAmigos;
    let numAmigos = Math.floor(Math.random()*listaSortedos.length-1)+1;
    //console.log(listaSortedos[numAmigos]);
    amigoSecreto = listaSortedos[numAmigos];
    limpiarLi('listaAmigos');
    mostrarAmigoSecreto(amigoSecreto);
}
//Función para eliminar LI de amigos registrados.
function limpiarLi(id){
    const elemento = document.getElementById(id);
    if(elemento != null){
        elemento.remove();
    }
    return;
}
//Función para mostrar el amigo secreto
function mostrarAmigoSecreto(texto){
    const nuevoLi = document.createElement('li');
    nuevoLi.id = 'secret_id';
    nuevoLi.textContent = `Tu amigo secreto es: ${texto}`;
    resultado.appendChild(nuevoLi);
    return;
}




