import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import TeamInfoHeader from '../../Components/Header/TeamInfoHeader';
import './TeamNavigation.css'
import { getTeam } from '../../Helper/Helper';
import Global from '../../Utils/Global';

const TeamNavigation = () => {

    const { teamId } = useParams();
    const [teamName, setTeamName] = useState(null);
    
    useEffect(() => {
        if (Global.teamMapWithIds[teamId]) {
            setTeamName(Global.teamMapWithIds[teamId].name.toUpperCase());
        }
        else {
            getTeam(teamId).then(team => {
                setTeamName(team.name.toUpperCase());
            }).catch(err => {
                console.log(err);
            })
        }
    }, [teamId])

    return (
        <>
            {
                teamName && <div className='TeamNavigation'>
                    <TeamInfoHeader teamName={teamName} deptCC={Global.user?.roles.includes("DEPT_SPORTS_CC")} />
                    <Outlet />
                </div>
            }
        </>
    )
}

export default TeamNavigation