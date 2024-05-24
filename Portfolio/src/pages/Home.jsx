import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

const Home = (props) => {
  return (
    <div className='text-center'>
    <Header />
    <Main {...props}/>
    <Footer />
    
    </div>
  )
}

export default Home
