//Capturo los nombres con prompt
const nombre = prompt("Ingresa tu Nombre").charAt(0).toUpperCase();
const apellido = prompt("Ingresa tu Apellido").charAt(0).toUpperCase();

/* console.log(`Bienvenido ${nombre}${apellido}`); */

//Creo una etiqueta h2
const bienvevenido = document.createElement("h2");
//le inyecto a la etiqueta h2 el texto que quiero
bienvevenido.textContent = `Bienvenido ${nombre}${apellido}`;

//capturo el div que tengo vacio
const mensaje = document.querySelector("#bienvenido");
//y le incrusto el h2 que cree
mensaje.appendChild(bienvevenido);
/* console.log(mensaje); */

let listaP = [];
function miObjeto() {

  //........2
  document.querySelector("#aviso").innerHTML=""
  //........2

  //parseInt(texto a convertir)

  const code = document.querySelector("#codigo").value;
  const pdt = document.querySelector("#producto").value;
  const price = parseInt(document.querySelector("#valor").value);//3.........adicionamos parseInt para convertir en numero


  const objeto = {
    codigo: code,
    producto: pdt,
    valor: price,
    iva:price*0.19,
    total:price+(price*0.19)
  };
  listaP = [...listaP, objeto];
  console.table(listaP);

  //.........0
  //creamos una etiqueta h3
  const produAviso =  document.createElement("h3")
  //le inyectamos texto a la etiqueta
  produAviso.textContent = `Acabas de Ingresar el producto: ${objeto.producto}`
  //seleccionar el contenedor padre (en este caso el div con id=aviso)
  const aviso = document.querySelector("#aviso")
  aviso.appendChild(produAviso)
  //..........0

  //.............1
  //borrado de formulario
  document.querySelector("#codigo").value=""
  document.querySelector("#producto").value=""
  document.querySelector("#valor").value=""
  //.............1



 
}

//Falta:
//0.Cambiar el mensaje que aparece cuando ingresamos un producto......solucionado
//1. Borrar el formulario cada que le demos guardar....solucionado
//2. Que cada que ingresemos un producto, solo nos muestre...."acabas de ingresar el producto: {solo el ultimo}"
//3.Convertir los valores de precio en numeros para hacer calculos
//4. con esos valores en numero vamos a calcular el IVA y guardarlo tambien el objeto
//5.Asegurse que las iniciales queden en Mayusc
//6. Incluir mas CSS esto esta HORRIBLE !!!