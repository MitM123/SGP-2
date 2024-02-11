import React from 'react'
import { Outlet } from 'react-router-dom';
import MatchInfoHeader from '../../components/MatchInfoHeader';

const Matchinfo = () => {
    return (
        <>
            <MatchInfoHeader />
            <Outlet />
        </>
    )
}

export default Matchinfo
