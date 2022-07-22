import React from 'react'
import Navbar from './Header/Navbar'
import Footer from './Footer/Footer'

function Layout(props) {


  return (
    <div className='app__container'>
        <Navbar />
          <>{props.children}</>
        <Footer />
    </div>
  )
}

export default Layout