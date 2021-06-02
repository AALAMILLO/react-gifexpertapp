import React, { useState } from 'react';
import Proptypes from "prop-types";

export const AddCategory = ({setcategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e)=>{
       setinputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (inputValue.trim().length >2){
            setcategories(cats =>[ inputValue, ...cats]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = 'text'
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}


AddCategory.prototypes = {
    setcategories: Proptypes.func.isRequired
}