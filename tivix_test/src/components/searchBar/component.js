import React from 'react';
import {TextField} from '@material-ui/core';
import styles from './style.css';

const SearchBar = ({zipCodeChange, error}) => {
    // Receives zipCodeChange function and error field as props

    // Show 'search for a zipcode' if textfield is empty or contains a valid zipcode
    // Show 'error' if zipcode is invalid
    // If any change is detected from the keyboard, call zipCodeChange
    return ( 
        !error ? 
        <div> 
            <TextField id= "standard-basic" label = "Search for a zip code" justify = "center"
                className="search"
            onChange={ (e) => zipCodeChange(e.target.value)}/> 
        </div>
        :
        <div> 
            <TextField id= "standard-basic" label= "Invalid Zipcode" 
                error id= "standard-error-helper-text"
                className="search"
            onChange={ (e) => zipCodeChange(e.target.value)}/> 
        </div>


    );
}

export default SearchBar;
