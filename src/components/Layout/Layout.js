import React, {useState} from 'react'

import Navbar from './Header/Navbar'
import Footer from './Footer/Footer'

function Layout(props) {
  const [checkout, setCheckout] = useState(false)


  return (
    <div className='layout__container'>
        <Navbar 
        checkout={checkout}
        setCheckout={setCheckout}/>
          <div onClick={()=> setCheckout(false)}>
            {props.children}
            </div>
        <Footer />
    </div>
  )
}

export default Layout