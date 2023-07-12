import Link from 'next/link';

export const Footer = () => {

    return (
        <footer className='flex'>
            <Link href={'/'}>
                <span className='text-yellow-600 font-black'>Fetch Doggy</span>
            </Link>
            <Link href={'https://github.com/brittgalloway'}>
                <span className='font-black text-stone-700 text-center'>Brittney Galloway</span>
            </Link>
            <span className='text-stone-700 text-center'>2023</span>
            <span className='text-stone-700 text-right'>Made with Next.js</span>
        </footer>
    )
  }