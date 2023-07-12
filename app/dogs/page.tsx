'use client'
import { Header } from '../components/header';
import { Grid } from '../components/grid';
import { Footer } from '../components/footer';

export default function DogsPage() {
  return (
    <>
      <Header/>
      <main className='flex flex-col items-center justify-center'>
          <h1 className='font-medium text-stone-700'>Find your best friend</h1>
          <Grid/>
      </main>
      <Footer/>
    </>
  )
}
