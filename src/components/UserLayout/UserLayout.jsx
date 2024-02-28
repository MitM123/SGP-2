import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import '../UserLayout/UserLayout.css'

function UserLayout(props) {
    let isLogin = props.isLogin;
    let setIsLogin = props.setIsLogin;
    return (
        <>
            {/* <div className='UserLayout'> */}
                <Header isLogin={isLogin} setIsLogin={setIsLogin} />
                <Outlet />
            {/* </div> */}
        </>
    )
}

export default UserLayout
