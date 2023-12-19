import React from 'react'

const ContactForm = () => {
  return (
    <div className='container-fluid'>
      <form>

        <div class="mb-3">
            <label for="exampleInputName1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputName1"/>
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div class="mb-3">
            <label for="exampleInputMessage1" class="form-label">Message</label>
            <input type="text" class="form-control" id="exampleInputMessage1"/>
        </div>
        
        
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm
