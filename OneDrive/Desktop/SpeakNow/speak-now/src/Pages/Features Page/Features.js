import React from 'react'
import NavBar from '../../Components/NavBar'
import { FeaturesData } from '../../Components/FeaturesData'
import Button from '../../Components/Button'
import './Features.css'

const Features = () => {
  const features=FeaturesData.map(data => {
    return(
        <div className={`container-fluid featuresCard Card${data.id}`}>
          <div className="container-fluid cardHeadingContainer"><h1 className='h3 cardHeading'>{data.heading}</h1></div>
          <div className="container-fluid cardDescriptionContainer"><h1 className='h6 cardDescription'>{data.placeholder}</h1></div>
        </div>
    )})
  return (
    <div className='container-fluid'>
      <NavBar/>

      <div className='container-fluid featuresContainer'>

        <div className="container-fluid ">
          <h1 className='display-1 featuresPageHeading'>What is Speak Now ?</h1>
        </div>
        
        <div className="container-fluid cardContainer">
          {features}
        </div>
        
        <div className="container-fluid featuresPageButtons">
          <div className="container-fluid featureButton"> <Button message={"Start Recording"} link={"record"}></Button></div>
          <div className="container-fluid featureButton"><Button message={"Upload Video"} link={"record"}></Button></div>
        </div>
      </div>

    </div>
  )
}

export default Features
