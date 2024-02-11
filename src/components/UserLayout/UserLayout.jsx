import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

function UserLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default UserLayout
