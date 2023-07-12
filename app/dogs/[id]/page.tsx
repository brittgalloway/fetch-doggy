'use client';
import useSWR from 'swr';
import axios from 'axios';
import { Header } from '../../components/header';
import { Footer } from '@/app/components/footer';
import Image from 'next/image';

export default function DogsPage({params} : { params: {id:string}}) {
  const postOptions = {
    method: 'POST',
    url: 'https://frontend-take-home-service.fetch.com/dogs/',
    headers: {'content-type': 'application/json'},
    data: [params.id],
    withCredentials: true,
  }

  const fetcher = async () => axios.request(postOptions).then(res => res.data);
  const { data, error } = useSWR('/dogs', fetcher);
  let dog;
  if (data !== undefined){
    dog = data[0]
  }
  if (error) error.message;

    return dog !== undefined ? (
      <>
        <Header/>
        <main className='flex flex-col items-center'>
          <div className='wrapper rounded border-yellow-600 border-solid border-x-2 shadow-lg'>
            <h1 className='font-medium text-5xl text-yellow-600'>Meet {dog.name}! </h1>
            <div className='flex'>
              <Image 
                className='rounded shadow-lg'
                  src= {dog.img}
                  alt={`Photo of ${dog.name}`}
                  width={300}
                  height={300}
              />
              <p>They are a <span className='font-bold underline decoration-yellow-600 decoration-2 text-stone-700'>{dog.age}</span> year old <span className='font-bold underline decoration-yellow-600 decoration-2 text-stone-700'>{dog.breed}</span>. You can find them at zip-code <span className='font-bold underline decoration-yellow-600 decoration-2 text-stone-700'>{dog.zip_code}</span>.</p>
            </div>
              <h2 className='text-center'> Thanks for caring!</h2>
          </div>
        </main>
        <Footer/>
      </>
  ) : <p>Loading ...</p>
}
