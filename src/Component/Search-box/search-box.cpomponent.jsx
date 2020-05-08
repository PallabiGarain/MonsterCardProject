import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholdernew,handleChange})=>(


    <input className='Card' type="search"
     placeholder={placeholdernew}
     onChange={handleChange}

     
     ></input>


);