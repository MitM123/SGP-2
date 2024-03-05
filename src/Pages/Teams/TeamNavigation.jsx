import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import TeamInfoHeader from '../../Components/Header/TeamInfoHeader';
import './TeamNavigation.css'
import { getTeam } from '../../Helper/Helper';
import Global from '../../Utils/Global';
import { Context } from '../../App';
import Error404 from '../Errors/Error404';
import Loader from '../../Components/Loader/Loader';

const TeamNavigation = () => {

    const { teamId } = useParams();
    const [teamName, setTeamName] = useState(null);
    const context = React.useContext(Context);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (Global.teamMapWithIds[teamId]) {
            setTeamName(Global.teamMapWithIds[teamId].name.toUpperCase());
            setLoaded(true);
        }
        else {
            getTeam(teamId).then(team => {
                context.setTeam(team);
                setLoaded(true);
                setTeamName(team.name.toUpperCase());
            }).catch(err => {
                setLoaded(true);
                console.log(err);
            })
        }
    }, [teamId])

    return (
        <>
            {
                !loaded ?
                    <Loader />
                    :
                    teamName ? <div className='TeamNavigation'>
                        <TeamInfoHeader teamName={teamName} deptCC={Global.user?.roles.includes("DEPT_SPORTS_CC")} />
                        <Outlet />
                    </div>
                        :
                        <Error404 />
            }
        </>
    )
}

export default TeamNavigation