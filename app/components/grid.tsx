'use client';
import useSWR from 'swr';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Search } from './search';
 
interface Dog {
    id: string
    img: string
    name: string
    age: number
    zip_code: string
    breed: string
}

export const Grid = () => {
    const [dogIds, setDogIds] = useState<string[]>([]);
    const [nextPage, setNextPage] = useState<string>('');
    const [prevPage, setPrevPage] = useState<string>('');
    const [queryParams, setQueryParams] = useState<string>('/dogs/search');
    const [order, setOrder] = useState<string>('asc');
    useEffect(() => {
        const fetchIds = async () => {
            const $searchBar = document.querySelector('input[name=searchBar]')
            const breedResults:any=  $searchBar?.getAttribute('value') !== undefined ? $searchBar?.getAttribute('value') : '';
            const getOptions= {
                method: 'GET',
                url: `https://frontend-take-home-service.fetch.com${queryParams}`,
                headers: {'content-type': 'application/json'},
                params: {
                    size: 12,
                    breeds: [breedResults],
                    sort: `breed:${order}`,
                },
                withCredentials: true,
            }
            axios.request(getOptions).then(function (res) {
                const dogIdResults = res.data.resultIds;
                const nextPageResults = res.data.next;
                const previousPageResults = res.data.prev;
                setDogIds(dogIdResults);
                setNextPage(nextPageResults);
                setPrevPage(previousPageResults);
                }).catch(function (error) {
                    console.error(error);
                });
        }
        fetchIds();
    }, [queryParams, order])
    const search:string[] = dogIds;
    const postOptions = {
        method: 'POST',
        url: `https://frontend-take-home-service.fetch.com/dogs/`,
        headers: {'content-type': 'application/json'},
        data: search,
        withCredentials: true,
    }
    const fetcher = async () => axios.request(postOptions).then(res => res.data);
    const { data, error } = useSWR('dogs', fetcher);
    if (error) error.message;
    
    return data !== undefined ? ( 
        <>
            <div className='sortInputs flex'>
                <Search/>
                <div className='dropdown flex'>
                    <button className='dropdown-btn bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center'>
                        <span className="sort">Sort</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                    </button>
                    <ul className="dropdown-menu hidden absolute text-gray-700 pt-1">
                        <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            onClick={() => {
                            order === 'desc' ? setOrder('asc') : order}} 
                            >
                            Ascend
                        </li>
                        <li className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            onClick={() => {
                            order === 'asc' ? setOrder('desc') : order}}
                            >
                            Descend
                        </li>
                    </ul>
                </div>
            </div>
            <section className='flex flex-wrap gap-4'>
                {data.map((dog: Dog) => (
                    <div className='dog-container' key={dog.id}>
                        <Link href={`/dogs/${dog.id}`}>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg border-yellow-600 border-solid border-x-2">
                                <Image className="w-full" 
                                    width={300}
                                    height={300}
                                    src={dog.img} 
                                    alt={`Photo of ${dog.name}`}/>
                                <div className="px-6 py-4 bg-white">
                                    <div className="font-bold text-xl mb-2">{dog.name}</div>
                                    <ul className="text-gray-700 text-base">
                                        <li>{dog.breed}</li>
                                        <li>Age: {dog.age}</li>
                                        <li>Zipcode: {dog.zip_code}</li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                <div className="pagination flex">
                    <button name="previous" onClick={(event) => {
                        event.preventDefault();
                        prevPage !== undefined ? setQueryParams(`${prevPage}`) : queryParams;
                    }} className='bg-yellow-600 text-purple-50'>Previous</button>
                    <button name="next" onClick={(event) => {
                        event.preventDefault();
                        nextPage !== undefined ? setQueryParams(`${nextPage}`) : queryParams;
                    }} className='bg-yellow-600 text-purple-50'>Next</button>
                </div>
            </section>
        </>
    ) : <p>Loading</p>
  }