import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../App';
import MatchInfoHeader from '../../Components/Header/MatchInfoHeader';
import Loader from '../../Components/Loader/Loader';
import { getMatch } from '../../Helper/Helper';
import Error404 from '../Errors/Error404';
import '../MatchInfo/Matchinfo.css';

const Matchinfo = () => {
    const context = React.useContext(Context);
    const { matchId } = useParams();
    const [teamNames, setTeamNames] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getMatch(matchId).then(match => {
            context.setMatch(match);
            setLoaded(true);
            setTeamNames([match.team1.name, match.team2.name]);
        }).catch((e) => {
            setLoaded(true);
            console.log(e);
        })
    }, [])
    
    return (
        <>
            {
                !loaded ?
                    <Loader />
                    :
                    teamNames.length > 0 ?
                        <div className='matchinfo'>
                            <MatchInfoHeader teamNames={teamNames} />
                            <Outlet />
                        </div>
                        :
                        <>
                            <Error404 />
                        </>
            }
        </>
    )
}

export default Matchinfo
