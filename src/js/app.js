//Capturo los nombres con prompt (recuerden que prompt es una funcion propia de Javascript)
const nombre = prompt("Ingresa tu nombre:").charAt(0);
const apellido = prompt("Ingresa tu apellido:").charAt(0);
//console.log(nombre,apellido)


//creo una etiqueta h2 con JS Y LA GUARDO EN UNA CONSTANTE LLAMADA bienvenida
const bienvenida = document.createElement("h2");
//console.log(bienvenida)
//le inyecto al h2 el texto que quiero (que captur´con los prompt)
bienvenida.textContent = `Bienvenido: ${nombre} ${apellido}`


//capturar el div vacio que tengo para colocar el h2

const saludo = document.querySelector("#bienvenido")
//despues le incrusto el h2 que ya cree
saludo.appendChild(bienvenida)
//console.log(saludo)

//creo el array vacio
let listaP = [];

//creo la funcion que se ejecuta cada que de click
function guardar(){
    const code = document.querySelector("#codigo").value;
    const produc = document.querySelector("#producto").value;
    const price = document.querySelector("#valor").value;
   /*  console.log(code)
    console.log(produc)
    console.log(price) */
    const objeto = {
        codigo:code,
        producto:produc,
        valor:price,
    };
    const mensaje = document.createElement("h3");
    mensaje.textContent = ` Acabas de ingresar el producto: ${produc}`;
    const ingreso = document.querySelector("#ingreso");
    ingreso.appendChild(mensaje)
    //console.log(objeto)
    listaP = [...listaP,objeto]
    console.log(listaP)
}