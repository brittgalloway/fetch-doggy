'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();
    const handleSubmit = async (event:any) => {
        event.preventDefault();
        
        const options = {
          method: 'POST',
          url: 'https://frontend-take-home-service.fetch.com/auth/logout',
          headers: {'content-type': 'application/json'},
          withCredentials: true,
        };
        
        axios.request(options).then(function () {
            console.log('You are logged out');
            router.replace('/');
        }).catch(function (error) {
          console.error(error);
        });
      }
    return (
        <header className='shadow-md bg-gray-50'>
            <Link href={'/'}>
            <span>
              <h1 className='text-yellow-600 font-black'>Fetch Doggy</h1>
            </span>
            </Link>
            <button type='button' className='bg-yellow-600 text-purple-50 rounded' onClick={handleSubmit}>
              Log out
            </button>
        </header>
    )
  }