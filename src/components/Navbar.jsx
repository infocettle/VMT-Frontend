import React from 'react'
import SmallLogo from "../assets/img/SmallLogo.svg"

function Navbar() {
  return (
    <div className='w-full'>
        <div className="w-full flex">
            <img src={SmallLogo} alt="image" className='img-fluid' />
        </div>
    </div>
  )
}

export default Navbar