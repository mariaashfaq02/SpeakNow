import React from 'react'
import Button from '../Components/Button'
import NavBar from '../Components/NavBar'
const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <h1 className="display-1">Speak Now</h1>
      <Button message={"Explore"}></Button>
    </div>
  )
}

export default HomePage
