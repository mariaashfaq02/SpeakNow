import React from 'react'
import NavBar from '../../Components/NavBar'
import { FeaturesData } from '../../Components/FeaturesData'
import Button from '../../Components/Button'
const Features = () => {
  const features=FeaturesData.map(data => {
    return(
        <div className='container-fluid'>
            <h1 className='h3'>{data.heading}</h1>
            <h1 className='h6'>{data.placeholder}</h1>
        </div>
    )})
  return (
    <div className='container-fluid'>
      <NavBar/>
      <div className="container-fluid">
        <h1 className='display-1'>What is Speak Now?</h1>
      </div>

      <div className="container-fluid">
        {features}
      </div>
      
      <div className="container-fluid">
      <Button message={"Start Recording"} link={"record"}></Button>
      <Button message={"Upload Video"} link={"record"}></Button>
      </div>
    </div>
  )
}

export default Features
