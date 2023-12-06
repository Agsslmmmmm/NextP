import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Layout from '@/components/Layout'


export default function Home() {
  return (
   <main>
    <Head>
      <title>Agus Salim</title>
    </Head>
    <div className='bg-white'>
    <Navbar />
    <Main />
    <About />
    <Projects />
    <Contact />
    <Layout />
    </div>
   </main>
  )
}
