import React from "react"
import { TextField } from "@mui/material";
import { FaSearch } from 'react-icons/fa';

export default function SearchBar(props){

    function handleFilterTextChange(e){
        props.onFilterTextChange(e.target.value);
    }
    
    return (
        <form>
            <TextField
                label="Search..."
                variant="outlined" 
                value={props.filterText}
                onChange={handleFilterTextChange}
                InputProps={{
                    endAdornment: <FaSearch/>
                }}
            />  
        </form>
    );
}