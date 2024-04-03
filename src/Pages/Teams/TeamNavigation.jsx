import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { AppContext } from '../../App';
import TeamInfoHeader from '../../Components/Header/TeamInfoHeader';
import Loader from '../../Components/Loader/Loader';
import { getTeam } from '../../Helper/Helper';
import Global from '../../Utils/Global';
import Error404 from '../Errors/Error404';
import './TeamNavigation.css';

const TeamNavigation = () => {

    const { teamId } = useParams();
    const [teamName, setTeamName] = useState(null);
    const context = React.useContext(AppContext);
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