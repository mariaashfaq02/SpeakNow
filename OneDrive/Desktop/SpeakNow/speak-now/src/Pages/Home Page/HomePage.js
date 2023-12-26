import React from 'react'
import Button from '../../Components/Button/Button'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import './HomePage.css'
const HomePage = () => {
  return (
    <div className="container-fluid">
      <NavBar/>
      <div className="container-fluid homePageContainer">
      <h1 className="display-1 homePageHeading">Speak Now</h1>
      <Button message={"Explore"} link={"features"} ></Button>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
