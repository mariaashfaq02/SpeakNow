import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='container-fluid'>
      <form className='formContainer'>

        <div class="mb-3 formSubContainer">
            <label for="exampleInputName1" className="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputName1"/>
        </div>

        <div class="mb-3 formSubContainer">
            <label for="exampleInputEmail1" class="form-label">Email  address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div class="mb-3 formSubContainer">
            <label for="exampleInputMessage1" class="form-label">Message</label>
            <input type="text" class="form-control" id="exampleInputMessage1"/>
        </div>
        
        <div class="mb-3 formSubContainerButton">
          <button type="submit" class="btn btn-primary formButton">Submit</button>
        </div>
        </form>
    </div>
  )
}

export default ContactForm
