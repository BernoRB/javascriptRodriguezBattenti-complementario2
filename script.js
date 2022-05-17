const listaNombres = []

// Pedimos nombres y los añadimos al array
function pidoDatos() {
    do {
        entrada = prompt("¡MEZCLADOR DE NOMBRES!\nIngrese los nombres que quiera, de a uno. ¡Mínimo dos!\nPara no agregar más nombres escriba FIN")
        listaNombres.push(entrada)
    } while (entrada.toUpperCase() != "FIN")
    listaNombres.pop() //Eliminamos el 'FIN' de la lista
    mezcladorNombres()
}

// Tomamos dos nombres al azar del array
function mezcladorNombres() {
    max = listaNombres.length-1
    i = random(0,max)
    do {
        j = random(0,max)
    } while (i == j)
    nuevoNombre(listaNombres[i],listaNombres[j])
}

// Generamos un nuevo nombre
function nuevoNombre(nombre1, nombre2){
    medio = nombre1.length/2
    s1 = nombre1.substr(0,medio)
    medio = nombre2.length/2
    s2 = nombre2.substr(medio,nombre2.length)
    nombreNuevo = s1+s2
    mostrarNombre(nombreNuevo)
}

// Lo mostramos y ofrecemos mostrar otro
function mostrarNombre(nombreNuevo) {
    ingreso = prompt(`Mezclando los nombres ${listaNombres[i]} y ${listaNombres[j]} obtenemos un hermoso nuevo nombre: ${nombreNuevo} \nSi queres otra combinacion, escribi NUEVO`)
    if(ingreso.toUpperCase() == 'NUEVO')
        mezcladorNombres()
}

// Generador de numeros al azar en el rango dado
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

pidoDatos()

