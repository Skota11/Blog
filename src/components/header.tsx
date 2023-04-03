import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='w-full border-b-black border-b-4 p-4 flex gap-8' >
        <div className='text-white'>
        <h1 className='text-xl'>SkotaBlog</h1>
        <div className='flex gap-4'>
            <span><Link href="/">Home</Link></span>
            <span><a href="https://skota11.com">Website</a></span>
        </div>
        </div>
        <div>
        </div>
    </div>
    </>
  )
}
