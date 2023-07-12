import Link from 'next/link';
import { Header } from './components/header';
import { Footer } from './components/footer';
 
export default function NotFound() {
  return (
        <>
        <Header/>
        <main className='flex flex-col items-center justify-center p-24'>
          <h2 className='font-medium'>Not Found</h2>
          <p>Could not find requested resource</p>
          <p>
            View <Link href="/dogs">all dogs</Link>
          </p>
        </main>
      <Footer/>
    </>
  )
}