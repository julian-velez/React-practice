const personajes = ["goku", "vegeta", "trunks"];

const [, , p3] = personajes;

console.log(p3);

const  retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// tarea 
const usestate = ( valor ) => {
    return [ valor, ()=>{console.log('Hola Mundo')} ]
}

const [ nombre, setNombre ] = usestate('goku');

console.log( nombre );
setNombre();