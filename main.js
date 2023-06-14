
// Dado un array de números, escribir una función que calcule la suma de todos los números del array.
let numeros = [2, 4, 6, 8];

function resultado(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

console.log(resultado(numeros))


// Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.

let nombre = ["Valen", " Carla", " Joaco", " Ivan", " Vicky"]

function concatenar (nombre){
    return nombre.join(",")
}

let saludo = `hola, ${nombre} como estan?`

console.log(saludo);

// Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.
let arraynumbers=[1,3,4,9,10,14,20,55,87,102]

function cont_numbers(arraynumbers){
  // defino una variable vacia para que contenga los valores mayores a 10
  let largernumber = []
    // defino el contador(for) y la sentencia if
  for (let i = 0; i < arraynumbers.length; i++) {
    if(arraynumbers[i]>10){
      largernumber.push(arraynumbers[i])
    }
  }
  return largernumber
}

console.log(cont_numbers(arraynumbers))

// Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.
let arraynumbers_2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

function return_value(arraynumbers_2){
  let add_pairs = 0;
  for(let i = 0;i < arraynumbers_2.length; i++){
    if(arraynumbers_2[i] % 2 === 0){
      add_pairs += arraynumbers_2[i];
    }
  }
return add_pairs
}

console.log(return_value(arraynumbers_2))

// Mediante el uso del método indexOf y splice, desarrollar una función que reciba un array de strings y un stringEliminar, la misma función nos devolverá un array sin el elemento que se eliminó. En caso de no tener el elemento a eliminar se deberá retornar null.

let fruits = ["melon", "pera", "manzana", "banana", "limon", "mandarina", "mango", "sandia", "ciruela"]

function stringEliminar(a, b){
  let fruit_deleted = fruits.indexOf(b);

  if(fruit_deleted !== -1){
    fruits.splice(fruit_deleted,1)
    return fruits;

  }else{
    return null;
  };
  
};

// pasarle a la consola el elemento del array fruits que quieres eliminar
let fruitDelete = "manzana";

console.log(stringEliminar(fruits, fruitDelete));

// Dado un array de nombres y un nombreDeLista, se deberá crear una función llamada crearLista que retorne un string con el siguiente formato.
// Lista de (nombreDeLista):
// juan
// pepe
// maria

let names = ["juan","pepe","maria"]
let name_of_list = "(nombres)"
function crearLista(names,name_of_list){
  let array_names = `lista de ${name_of_list}:\n`
  for(let i = 0; i < names.length; i++){
    array_names += names[i] + "\n";
  }

  return array_names;
}

console.log(crearLista(names,name_of_list))

// Dado un array de strings y un stringBuscado, elaborar una función que retorne la cantidad de veces que apareció en el array el stringBuscado

let miarray_str = ["blanco","blanco","rojo","azul","amarillo","verde"]
let str_buscado = "rojo"

function iterations(miarray_str,str_buscado){
  let veces_que_aparecio = 0;
  for(let i = 0;i < miarray_str.length; i++){
    if(miarray_str[i] === str_buscado){
      veces_que_aparecio++;
    }
  }

  return veces_que_aparecio;
};

let veces = iterations(miarray_str,str_buscado)

function contador_de_veces(veces){
  resultado_de_contador = []
  if(veces > 1){
    resultado_de_contador += "veces";
  }
  else if(veces === 1){
    resultado_de_contador += "vez";
  };

  return resultado_de_contador;
};

let vez_o_veces = contador_de_veces(veces)

let apariciones = `el string "${str_buscado}" aparecio ${veces} ${vez_o_veces}`;

console.log(apariciones);

// function addUserOfLS(LS, userAdd){
//   localStorage.setItem(LS, userAdd);
//   userLS = localStorage.getItem(LS);
// };

// addUserOfLS("user024","joaquin");
// localStorage.setItem("number", 230); 

// function searcrhNumberLS(searchNumber){
//   return localStorage.getItem(searchNumber); 
// };

// let number = searcrhNumberLS("number");

// operadores

/*
VALORES FALSY
0, null, undefined, NaN, false, string vacío

VALORES NULLISH
null, undefined
*/


// operador ternario

function validatePassword(password){
  let passwordRespalded = 204356;

  console.log(password === passwordRespalded ? "la contraseña es correta" : "la contraseña es incorrecta");

};

validatePassword(204356);


const cart = [];

console.log(cart.length > 0 ? cart : "el carrito esta vacio");


// operador && 

const fruits02 = [];

console.log(fruits02.length === 0 && "el array de frutas esta vacio");


// operador || VALORES FALSY NULLISH


const users = "joaquin";

console.log(users || "el usuario no se encuentra en la red");


// operador ?? VALORES NULLISH


let number = null;

console.log(number ?? "el numero no existe");


// acceso condicional a objetos

const products = [
  {
    id: 1,
    title: 'Camiseta',
    price: 20.99,
    description: 'Una camiseta de algodón suave y cómoda.',
  },
  {
    id: 2,
    title: 'Pantalones',
    price: 39.99,
    description: 'Un par de pantalones vaqueros de corte ajustado.',
  },
  {
    id: 3,
    title: 'Zapatos',
    price: 59.99,
    description: 'Un par de zapatos deportivos para correr.',
  },
];

products.forEach(product => {
  console.log(product?.type?.price || "la propiedad no existe");
});

// desestructuracion de objetos

let product2 = products.find((product) => product.id === 2);

let { title: titleProduct2, description, id, price: priceProduct2 } = product2;

console.log(`${titleProduct2} ${priceProduct2}USD`);


// desestructuracion de arrays

let numbers = [1,2,4,5,6,7,8,9,10,12,13,55,78,5,83,3];

let [a,b,c] = numbers;

console.log(c);

// crear una copia del siguiente array y agregar un color en el tercer valor pero que no se modifique en el array original

const colors = ['rojo', 'azul', 'verde', 'amarillo', 'naranja'];

let copyColors = [...colors];

copyColors.splice(2,0,"violeta");

// array original
console.log(colors);
// array copia
console.log(copyColors);

// usando librerias (sweetalert2)
// hacer un formulario que al enviar nos salte un mensaje que se ha enviado con exito

const formActions = document.querySelector("#formActions");

formActions.addEventListener("submit", (e) =>{
  e.preventDefault();

  let inputForm = document.querySelector("#inputForm").value;

  if (inputForm === "") {
    Swal.fire({
      title: 'los campos estan vacios!',
      icon: 'error',
      iconColor:"#d62946",
      confirmButtonText: 'ok'
    });
  }else{
    Swal.fire({
      title: 'se ha enviado con exito!',
      icon: 'success',
      iconColor:"#cdffcb",
      confirmButtonText: 'ok'
  });
  };

});
