import classes from './Card.module.css';
const Card = (props) =>{

   const onCloseHandler = () =>{
       
      window.alert('Emulamos que se cierra la card')
    }
    return (<div>
         <div className={classes.box}>
            <div className={classes['box-top']}>
            <img className={classes['box-image']} src={props.image} alt={props.name} />
            <div className={classes['title-flex']}>
               <h3 className={classes['box-title']}>{props.name}</h3>
               <p className={classes['user-follow-info']}>{props.gender}</p>
            </div>
            <p className={classes.description}>{props.species}</p>
            <p className={classes.description}>{props.origin}</p>
            <p className={classes.description}>{props.status}</p>
            </div>
            <div className={classes['button-box']}><button  onClick={onCloseHandler} className={classes.button} >X</button></div>
            
         </div>
          
    </div>)
}

export default Card;