'use client';
import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';

export const Search = () => {
    const [breed, setBreed] = useState([]);
    const getOptions= {
        url: `https://frontend-take-home-service.fetch.com/dogs/breeds`,
        headers: {'content-type': 'application/json'},
        withCredentials: true,
    }       
    const fetcher = async () => axios.request(getOptions).then(res => res.data);
    const { data, error } = useSWR('/breeds', fetcher);  
    
    if (error) error.message;

    const handleSearch = async (event:any) => {
        const searchValue = event.nativeEvent.srcElement.value;
        setBreed(searchValue);    
    }

    return data !== undefined ? (
        <div className='searchbar'>
            <input name='searchBar' className='rounded' id='searchbar' value={breed} type='search' list='breed-options' onChange={handleSearch} placeholder='Search Breeds...'/>
            <datalist id="breed-options">
                {data.map((breed:string) => (
                    <option key={breed} value={breed}></option>
                ))}   
            </datalist>
        </div>
    ) : <p>...</p>
}

  