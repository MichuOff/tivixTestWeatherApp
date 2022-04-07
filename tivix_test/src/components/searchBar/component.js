import React from 'react';
import {TextField} from '@material-ui/core';
import styles from './style.css';

const SearchBar = ({CityChange, error}) => {
    return ( 
        !error ? 
        <div> 
            <TextField id= "standard-basic" label = "Search for a city" justify = "center"
                className="search"
            onChange={ (e) => CityChange(e.target.value)}/> 
        </div>
        :
        <div> 
            <TextField id= "standard-basic" label= "Invalid Zipcode" 
                error id= "standard-error-helper-text"
                className="search"
            onChange={ (e) => CityChange(e.target.value)}/> 
        </div>
    );
}

export default SearchBar;
