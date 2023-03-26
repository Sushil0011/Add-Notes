import React from 'react'
import { NavLink } from 'react-router-dom'
import './error.scss'
const Error = () => {
  return (
    <div className='wrapper'>

      <img src='' alt=''/>
<h1>404 Page Not Found</h1>
<h3> I think you are lost </h3>
<p>
The page you are looking for does not exist.How you got there is a mystery
.But you can click below button to go home page. 
</p>

<NavLink to='/'>
<button>   Home</button>
</NavLink>
    </div>
  )
}

export default Error