import Navbar from '@/components/Navbar'
import React from 'react'
import { PublicReg } from '../PublicRegistry'

function System() {
  return (
    <div className='w-full'>
        <Navbar/>
        <div className='w-full flex'>
            <h2>SideNav</h2>
            <PublicReg/>

        </div>
    </div>
  )
}

export default System