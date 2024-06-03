import React, { useState } from "react";
import magnifyingglass from '../imgs/magnifying-glass.png';

export default function SearchBar({onSearch}){
    const [search , setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(search);
    };

    return(
        <div className="searchbar-container">
           <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="searchbar"
                    onChange={(e)=> setSearch(e.target.value)}
                />
                <button type="submit" className="search-button">
                    <img src={magnifyingglass} alt="search-icon" className="search-icon" />
                </button>
           </form>
        </div>
    )
}