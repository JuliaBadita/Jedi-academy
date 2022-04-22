import React from "react"
import { TextField } from "@mui/material";
import { FaSearch } from 'react-icons/fa';

export default function SearchBar(props){

    const handleFilterTextChange = (e) => {
        props.onFilterTextChange(e.target.value);
    }

    // Avoid key enter press - don't reload the entire page
    const handleEnterPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }
    
    return (
        <form>
            <TextField
                className="searchBar"
                label="Recherche..."
                variant="outlined" 
                value={props.filterText}
                onChange={handleFilterTextChange}
                onKeyPress={handleEnterPress}
                InputProps={{
                    endAdornment: <FaSearch className="searchIcon"/>
                }}
            />  
        </form>
    );
}