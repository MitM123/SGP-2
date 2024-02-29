import React from 'react'
import { Outlet } from 'react-router-dom';
import MatchInfoHeader from '../../components/Header/MatchInfoHeader';
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
