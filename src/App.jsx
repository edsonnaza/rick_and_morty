import { useEffect, useState } from 'react' ;
 

import Header from './component/layout/Header';
import Filters from './component/filters/Filters';
import CardItems from './component/ui/CardItems';
import './App.css'
import getDataFromApi from './back-end/getDataFromApi';

const  App = ()=> {
   const [characters, setCharacters] = useState([]);
   const [filterName, setFilterName] = useState('');

   useEffect(()=>{
    getDataFromApi().then((data)=>{
      setCharacters(data);
    })
   },[]);

   const handleFilter = (filterObject) => {
    if(filterObject.kind === 'name'){
      setFilterName(filterObject.value);
    }

    // get the filterd data
    setCharacters(filteredCharacters);

    if(filterName===''){
      getDataFromApi().then((data)=>{
        setCharacters(data);
      },[]);
    }
   }

   const filteredCharacters= characters.filter((character)=>{
    return character.name.toUpperCase().includes(filterName.toUpperCase());
   })

   

  return (
   
        <div className='App'>
           <Header name={'Edson Sanchez'} />
           <Filters 
             handleFilter={handleFilter}  
             filterName={filterName} 
           
           />
           <hr />
          <CardItems characters={characters} />
        </div>
      
       
    
  )
}

export default App
