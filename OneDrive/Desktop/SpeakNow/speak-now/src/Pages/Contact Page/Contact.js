import React from 'react'
import NavBar from '../../Components/NavBar'
import Accordion from '../../Components/Accordion/Accordion'
import ContactForm from '../../Components/ContactForm'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container-fluid contactPageContainer'>
      <NavBar/>
      
      <div className="container-fluid contactPageMainContainer">
        
        <div className="container-fluid contactPageSubContainer">
          <div className="container-fluid contactPageHeading">
            <h1 className='display-1 contactMainHeading'>We don't bite</h1>
            <h1 className='display-6 contactSubHeading'>Let's have a chat</h1>
          </div>

          <div className="container-fluid contactFAQ">
            <Accordion/>
          </div>

        </div>

        <div className="container-fluid contactPageSubContainer">
          <div className="container-fluid contactForm">
            <ContactForm/>
          </div>
        </div>
        
      </div>

    </div>
  
  )
}

export default Contact
