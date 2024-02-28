import React from 'react'
import { Outlet } from 'react-router-dom';
import MatchInfoHeader from '../../components/Header/MatchInfoHeader';
import '../MatchInfo/Matchinfo.css'

const Matchinfo = ({setIsLogin,isLogin}) => {
    return (
        <>
            <div className='matchinfo'>
                <MatchInfoHeader setIsLogin={setIsLogin} isLogin={isLogin}/>
                <Outlet />
            </div>
        </>
    )
}

export default Matchinfo
