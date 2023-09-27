 
import classes from './Cards.module.css';

import Card from './uiCard';
 

const  CardItems = (props)=> {
 const characters=props.characters;
   return <div  className={classes.wrap}>
      
     
      {characters.map((item) =>(
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          species={item.species}
          origin={item.origin.name}
          status={item.status}
          gender={item.gender}
          image={item.image}
          
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
        ))}
 
   </div>;
}
export default CardItems;