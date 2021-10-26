import React, {useState, useEffect} from 'react';

import './Films.css';

const Films = () => {
    const [films, setFilms]=useState();

  useEffect(()=>{
    async function fetchFilms(){
      let res= await fetch('https://swapi.dev/api/films/1/?format=json');
      let data = await res.json();
      setFilms(data.result);
    }
    fetchFilms();
  }, []);
  console.log('Data',films);
 const [peli, setPeli]=useState(-1);
  
  const handlerMostrarPelis=(e)=>{
      const option=e.target.value;
      setPeli(option);
  }
  return (
    <>
    <div className="container">
          
            <select name="films" >
               <option value={-1}>Seleccione una opcion:</option> 
                {
                   films.map((item,i) =>(
                    <option key={"peliculas" +i} value={i}>{item.title}</option> 
                ))
                }
            </select>
     
        <button onClick={handlerMostrarPelis}>
          BUSCAR
        </button>
    </div>
   <div className="col6">
       <h3>DESCRIPCION</h3>
       {
           peli>-1 && (films[peli].map((item,i)=>(
            <li key={item.title}>
            {item.title}
            {item.opening_crawl}
            {item.release_date}
          </li>
           )))
       }
   </div> 
   </>
  )
}
export default Films;
