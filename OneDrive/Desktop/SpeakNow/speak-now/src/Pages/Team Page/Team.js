import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { pictures } from './TeamData'
import Footer from '../../Components/Footer/Footer'
import './Team.css'

const Team = () => {

  const teamMembers=pictures.map(data=>{
    return(
      <div className="container-fluid teamCard">
        <img  src={data.image} className="img-fluid teamMemberPic" alt={data.name} />
        <p className='h6 teamMemberName'>{data.name}</p>
      </div>
    )
  })

  return (

    <div className='container-fluid'>
      <NavBar/>
      <div className="container-fluid">
        <h1 className='display-1 teamHeading'>Meet the Team</h1>
      </div>

      <div className="container-fluid teamCardsContainer">
      {teamMembers}
      </div>   
      <Footer/>   
    </div>
  )
}

export default Team
