import React from 'react'
import {Link} from 'react-router-dom'
const Button = (props) => {
  return (
    <button className='btn btn-outline-info btn-lg' >
    <Link to="/explore">{props.message}</Link>
    </button>
  )
}
export default Button
