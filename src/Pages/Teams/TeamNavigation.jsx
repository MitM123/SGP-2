import React from 'react'
import { Outlet } from 'react-router-dom';
import TeamInfoHeader from '../../Components/Header/TeamInfoHeader';
import './TeamNavigation.css'

const TeamNavigation = ({ teamName, deptCC }) => {
    return (
        <>
            <div className='TeamNavigation'>
                <TeamInfoHeader teamName={teamName} deptCC={deptCC} />
                <Outlet />
            </div>
        </>
    )
}

export default TeamNavigation