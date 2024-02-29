import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import '../UserLayout/UserLayout.css'

function UserLayout() {
    return (
        <>
            {/* <div className='UserLayout'> */}
            <Header />
            <Outlet />
            {/* </div> */}
        </>
    )
}

export default UserLayout
