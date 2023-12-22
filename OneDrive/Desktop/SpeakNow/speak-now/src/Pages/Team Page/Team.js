import React from 'react'
import NavBar from '../../Components/NavBar'
import { pictures } from './TeamData'

const Team = () => {

  const teamMembers=pictures.map(data=>{
    return(
      <div className="container-fluid">
        <img style={{  height: 500 }} src={data.image} className="img-fluid" alt={data.name} />
        <p className='h6'>{data.name}</p>
      </div>
    )
  })

  return (

    <div className='container-fluid'>
      <NavBar/>
      <div className="container-fluid">
        <h1 className='display-1'>Meet the Team</h1>
      </div>
      {teamMembers}
      
    </div>
  )
}

export default Team
