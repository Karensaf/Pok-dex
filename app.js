let personajes = JSON.parse(poke_file).result
let nombreInput = document.getElementById("nombreInput")
let container = document.getElementById("container")
let pokemones = document.getElementById("pokemones")
let daniel = document.getElementById("daniel")
console.log(personajes[0].name)
console.log(personajes[0].id)





function buscarBtn() {
    let personaje = buscar(nombreInput.value)

    container.innerHTML = `
        <div class="card" style="width: 15rem;">
            <img src="${personaje.ThumbnailImage}" class="card-img-top" alt="Pokemon">
            <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">
                <span>Número de Pokemón: ${personaje.id}</span><br>
                <span>Tipo: ${personaje.type}</span><br>
                <span>Hábilidades: ${personaje.abilities}</span>
            </p>
            </div>
        </div>
        `
}

function buscar(nombre) {        
    for(let i = 0; i < personajes.length; i++) {
        if(nombre === personajes[i].name) {
        return personajes[i]
        }
    }
}

function imprimir() {
        let pokemon = mostrar(pokemones.value)
    
        pokemones.innerHTML = `
    <div class="card" style="width: 15rem;">
        <img src="${pokemon.ThumbnailImage}" class="card-img-top" alt="Pokemon">
        <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
        <p class="card-text">
            <span>Número de Pokemón: ${pokemon.id}</span><br>
            <span>Tipo: ${pokemon.type}</span><br>
            <span>Hábilidades: ${pokemon.abilities}</span>
        </p>
        
        </div>
    </div>
    `
}
function mostrar() {  
    

    for(let i = 2; i <= 32; i++){
        console.log("si entre " + i)

        return personajes[i]
    }    
    // return personajes[2] //aparece en orden de lista
}
console.log(imprimir())

//  Intento de imprimer varias cards
function imprimirPersonajes(){
    for(let j = 0; j < personajes.length; j++){
        const pokemon = personajes[j]
        daniel.innerHTML = `
        <div class="card" style="width: 15rem;">
        <img src="${pokemon.ThumbnailImage}" class="card-img-top" alt="Pokemon">
        <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
        <p class="card-text">
            <span>Número de Pokemón: ${pokemon.id}</span><br>
            <span>Tipo: ${pokemon.type}</span><br>
            <span>Hábilidades: ${pokemon.abilities}</span>
        </p>
        
        </div>
    </div>
    `
    }
}

/*function imprimir_personajes(){
    for(recorres_arreglo){
        pokemones_cadena+=`div, img, h5` } 
        pokemones.innerHTML = pokemones_cadena} */ 