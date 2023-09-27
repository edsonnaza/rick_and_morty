import classes from './Header.module.css';
import imageBackground from '../../assets/rickymortyWallPaper.png';

const Header = ()=>{
 
    return (
        <div>
            <header className={classes.header}>
                <h1>Rick and Morty {name}</h1>
            </header>
            <div>
                <div className={classes['main-image']}>
                    <img src ={imageBackground} alt='Rick Sanchez Image' />
                </div>
            </div>
        </div>
    )
}

export default Header;