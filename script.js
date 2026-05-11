const toppings = document.getElementsByClassName("topping")
//con una funcion normal
/*function mostrarClick(e){
    console.log(e.target.innerText);
}

for (const topping of toppings ){
    topping.addEventListener("click", mostrarClick)
}
*/
//con una funcion mas corta
for (const topping of toppings){
    topping.addEventListener("click", (e) => {
        console.log(e.target.innerText);
    })
}


//Event Listener: dos argumentos ,primero el nombre del evento que hay , en el segundo la funcion que va a manejar ese evento
//albahaca.addEventListener("click", mostrarClick) //en el nombre de la funcion cuando lo paso como argumento no pongo los ()



