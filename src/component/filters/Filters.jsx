 
import FilterByName from './filterByName/FilterByName';
import classes from '../filters/Filters.module.css';

const Filters= (props)=>{
    const handleChange = (ev) => {
        props.handleFilter({
            kind: 'name',
            value: ev.target.value,
        });
    };

    const handleKeyPress = (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
        }
    };

    return (
        <form className={classes.form}>
                <FilterByName 
                    handleChange={handleChange}
                    handleKeyPress = {handleKeyPress}
                    FilterName = {props.filterName}

                />
        </form>
    )
}

export default Filters;