import {getHeroeById} from './bases/08-imp-exp';


// const promesa = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     // console.log('2 segundos despues')
//     const heroe = getHeroeById(2);
//     resolve(heroe)
//   }, 2000)
// });


// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err));


const getHeroeByIdAsyn = (id) => {

  return  new Promise( (resolve, reject) => {
    setTimeout( () => {
      // console.log('2 segundos despues')
      const heroe = getHeroeById(id);
      if(heroe) {
         resolve(heroe)
      } else {
        reject('no se pudo encontrar el heroe')
      }
      
    }, 2000)
  });
  
}


getHeroeByIdAsyn(10)
.then( console.log)
.catch(err => console.warn(err));