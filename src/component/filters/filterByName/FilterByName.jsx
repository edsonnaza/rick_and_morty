import classes from './FilterByName.module.css';

 const FilterByName = (props) => {
    console.log(props);

    return (<div className={classes.form}>
                <label className={classes.label} htmlFor="search-input">
                Find a character! 
                </label>
                <input
                    className={classes.input}
                    id="search-input"
                    name="search-input"
                    type="text"
                    placeholder="Type a text. Example, 'Rick'"
                    onKeyUp={props.handleChange}
                    onKeyDown={props.handleKeyPress}
                    defaultValue={props.filterName}
                ></input>
           
        

    </div>
    );
}

export default FilterByName;