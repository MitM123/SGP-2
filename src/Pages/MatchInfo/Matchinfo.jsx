import React from 'react'
import { Outlet } from 'react-router-dom';
import MatchInfoHeader from '../../Components/Header/MatchInfoHeader';
import '../MatchInfo/Matchinfo.css'

const Matchinfo = () => {
    return (
        <>
            <div className='matchinfo'>
                <MatchInfoHeader/>
                <Outlet />
            </div>
        </>
    )
}

export default Matchinfo
