import React from 'react'
import NavBar from '../Components/NavBar'
import Accordion from '../Components/Accordion/Accordion'

const Contact = () => {
  return (
    <div className='container-fluid'>
      <NavBar/>
      

      <div className="container-fluid">
        <h1 className='display-1'>We don't bite</h1>
        <h1 className='display-6'>Let's have a chat</h1>
      </div>

      <div className="container-fluid">
        <Accordion/>
      </div>

      <div className="container-fluid">
      </div>
    </div>

    

    

    
  )
}

export default Contact
