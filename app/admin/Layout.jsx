import React from 'react'
import SideBar from '../componenets/Admin components/SideBar'

export default function Layout({children}) {
  return (
    <>
    <div className='flex'>
      <SideBar />
    </div>
    {children}
    </>
  )
}
