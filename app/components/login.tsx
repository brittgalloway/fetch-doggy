'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
  

export const LoginForm = () => {
    
    const router = useRouter();
    const handleSubmit = async (event:any) => {
        event.preventDefault();
        type User = {
          name: string
          email: string
        }
        const user: User = {
          name: event.target.name.value,
          email: event.target.email.value,
        }
      
        const options = {
          method: 'POST',
          url: 'https://frontend-take-home-service.fetch.com/auth/login',
          headers: {'content-type': 'application/json'},
          data: user,
          withCredentials: true,
        };
        
        axios.request(options).then(function (res) {
          const userData = res.config.data;
          router.replace('/dogs');
          console.log(userData);
        }).catch(function (error) {
          console.error(error);
        });
      }
    return (
      <form className='shadow-2xl' onSubmit={handleSubmit}>
        <label className='text-stone-700' htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' required/>
        <label className='text-stone-700' htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' required/>
        <button className='bg-yellow-600 text-purple-50' type='submit'>Submit</button>
      </form>
    )
}