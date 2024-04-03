import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { AppContext } from '../../App';
import MatchInfoHeader from '../../Components/Header/MatchInfoHeader';
import Loader from '../../Components/Loader/Loader';
import { getMatch } from '../../Helper/Helper';
import Global from '../../Utils/Global';
import Error404 from '../Errors/Error404';
import '../MatchInfo/MatchInfo.css';


const Matchinfo = () => {
    const appContext = React.useContext(AppContext);
    const { matchId } = useParams();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getMatch(matchId)
            .then(match => {
                appContext.setBattingTeamScore(match.teamAId === match.currentOver?.strikerScore?.teamId ? match.teamAScore : match.teamBScore);
                appContext.setBowlingTeamScore(match.teamAId === match.currentOver?.bowlerScore?.teamId ? match.teamAScore : match.teamBScore);

                appContext.setTeamAScore(match.teamAScore);
                appContext.setTeamBScore(match.teamBScore);

                appContext.setStrikerScore(match.currentOver?.strikerScore);
                appContext.setNonStrikerScore(match.currentOver?.nonStrikerScore);
                appContext.setBowlerScore(match.currentOver?.bowlerScore);

                appContext.setTeamA(match.teamAScore?.team);
                appContext.setTeamB(match.teamBScore?.team);

                appContext.setCurrentOver(match.currentOver);

                appContext.setMatch(match);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoaded(true);
            });
    }, [matchId]);

    return (
        <>
            {!loaded ? (
                <Loader />
            ) : appContext.match ? (
                <div className='matchinfo'>
                    <MatchInfoHeader
                        teamA={appContext.teamA}
                        teamB={appContext.teamB}
                        deptCC={Global.user?.roles.includes('DEPT_SPORTS_CC')}
                    />
                    <Outlet />
                </div>
            ) : (
                <Error404 />
            )}
        </>
    );
};

export default Matchinfo;
