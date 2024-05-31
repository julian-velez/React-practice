const persona = {
  nombre: "tony",
  edad: 45,
  clave: "Ironman",
  
};

// extraer los datos en js
// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);



const usecontext = ({ clave, nombre, edad, rango = "capitan" }) => {

  // console.log(nombre, edad, rango);
  
  return {
    nombreClave: clave,
    anios:edad,
    latlng:{
      lat: 34.4567,
      lng: -234567
    }
  }
}

const { nombreClave, anios, latlng:{lat, lng} } = usecontext( persona );

console.log(nombreClave, anios);
console.log(lat, lng);


