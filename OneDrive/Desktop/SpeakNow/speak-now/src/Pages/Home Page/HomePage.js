import React from 'react'
import Button from '../../Components/Button'
import NavBar from '../../Components/NavBar'
import './HomePage.css'
const HomePage = () => {
  return (
    <div className="container-fluid">
      <NavBar/>
      <div className="container-fluid homePageContainer">
      <h1 className="display-1 homePageHeading">Speak Now</h1>
      <Button message={"Explore"} link={"features"} ></Button>
      </div>
    </div>
  )
}

export default HomePage
