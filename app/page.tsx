import { LoginForm } from './components/login'
import { Header } from './components/header'
import { Footer } from './components/footer'

export default function HomePage() {
  return (
    <>
      <Header/>
      <main className='flex flex-col items-center justify-center p-24'>
        <h2 className='font-medium text-stone-700'>Find your best friend</h2>
        <div className='circular header shadow-md'>
          <h1 className='title text-yellow-600 font-black'>Fetch Doggy</h1>
        </div>
          <LoginForm/>
      </main>
    <Footer/>
  </>
  )
}