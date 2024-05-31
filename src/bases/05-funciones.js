
// funciones en js 

// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
//  }

//  const saludar2 = ( nombre ) => {
//     return `Hola, ${ nombre }`;
//  }

 

//  console.log(saludar2('julian'));


 const getUser = () => 
     ({
        uid: 'ABC123',
        username:'julian_velez1564'
    });
 

 console.log(getUser());

const getUsuarioActivo = ( nombre ) => 
     ({
        uid: 'ABC765',
        username: nombre
    })



const UsuarioActivo = getUsuarioActivo('julian'); 


console.log(UsuarioActivo);
 