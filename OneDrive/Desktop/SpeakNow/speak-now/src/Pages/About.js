import React from 'react'
import NavBar from '../Components/NavBar'
import { AboutSpeakNow } from './AboutData'

const About = () => {

    const paragraph=AboutSpeakNow.map(data => {
        return(
            <div className='container-fluid'>
                <p class="lead">{data.paragraph}</p>
            </div>
        )
    })
  return (
    <div className='container-fluid'>
        <NavBar/>
        <h1 className='display-1'>Get <span className='display-1'>Better </span> , Speak <span className='display-1'>Better </span></h1>
        {paragraph}
    </div>
  )
}

export default About
