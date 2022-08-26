function verdadero(){
    return true
}

let promesaConTiempo = new Promise((resolve)=>{
    setTimeout (() => {
            resolve()
    },5000)
})

promesaConTiempo.then(()=>console.log("Hola soy una promesa"))

function* idPares(){
    let id = 0;
    while(true){
        yield id+=2
        
    }
}

var idGenerador = idPares()

console.log(idGenerador.next().value)
console.log(idGenerador.next().value)
console.log(idGenerador.next().value)
console.log(idGenerador.next().value)
console.log(idGenerador.next().value)