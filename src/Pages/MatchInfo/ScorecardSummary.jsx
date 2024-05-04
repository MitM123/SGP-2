import React, { useContext, useEffect, useState } from 'react'
import { ballsToOvers } from '../../Helper/Helper';
import { AppContext } from '../../App';
import { LiveScoreContext } from './LiveScore';
import { getOver, getPlayerBattingScore } from '../../Helper/Helper';

const ScorecardSummary = () => {
    const appContext = useContext(AppContext);
    const liveScoreContext = useContext(LiveScoreContext);

    const [battingTeam, setBattingTeam] = useState();
    const [bowlingTeam, setBowlingTeam] = useState();

    console.log(liveScoreContext)

    useEffect(() => {
        getOver(appContext.match.currentOverId).then(over => {
            setBattingTeam(appContext.teamAScore.teamId === over.striker.teamId ? appContext.teamA : appContext.teamBScore);
            setBowlingTeam(appContext.teamAScore.teamId === over.striker.teamId ? appContext.teamBScore : appContext.teamA);
            appContext.setCurrentOver(over);

            getPlayerBattingScore(over.strikerId, appContext.match.sis_id).then(strikerScore => {
                liveScoreContext.setStrikerScore(strikerScore);
            })
            getPlayerBattingScore(over.nonStrikerId, appContext.match.sis_id).then(player => {
                liveScoreContext.setNonStrikerScore(player);
            })
        })
    }, [])

    return (
        <>
        {
            appContext.match && 
            <div className='sum4 w-full font-poppins font-semibold m-3 '>
            <div className='font-semibold text-2xl font-MateSC flex justify-center'>
                Scorecard summary
            </div>
            <div className='flex flex-row justify-between h-10 w-[98%]  items-center p-5 bg-blue-200 rounded-md font-poppins font-semibold'>
                <div>
                    {battingTeam?.name.toUpperCase()}
                </div>
                <div>
                    {appContext.match.team1Runs}/{appContext.match.team1Wickets} ({ballsToOvers(appContext.match.team1Balls)}vs)
                </div>
            </div>
            <div className='flex flex-row h-20 p-5'>
                <div className='w-[75%]'>
                    {appContext.strikerScore?.player.user.name}
                    <br />
                    {appContext.strikerScore?.runs}({appContext.strikerScore?.balls})
                </div>
                <div className='w-[25%]'>
                    {appContext.nonStrikerScore?.player.user.name}
                    <br />
                    {appContext.nonStrikerScore?.runs}({appContext.nonStrikerScore?.balls})
                </div>
            </div>
            <div className='h-[0.5px] bg-black w-[98%]'></div>
            <div className='flex flex-row h-20 p-5'>
                <div className='w-[75%]'>
                    {appContext.nonStrikerScore?.player.user.name}
                    <br />
                    {appContext.nonStrikerScore?.runs}({appContext.nonStrikerScore?.balls})
                </div>
                <div className='w-[25%]'>
                    B kumar
                    <br />
                    3/64(5)
                </div>
            </div>

            <div className='flex flex-row justify-between h-10 w-[98%] items-center p-5 bg-blue-200 rounded-md font-poppins font-semibold mt-5'>
                <div>
                    {appContext.teamBScore.name.toUpperCase()}
                </div>
                <div>
                    {appContext.match.team2Runs}/{appContext.match.team2Wickets} ({ballsToOvers(appContext.match.team2Balls)}vs)
                </div>
            </div>
            <div className='flex flex-row justify-between h-20 p-5'>
                <div className='w-[75%]'>
                    Mit Monpara
                    <br />
                    102(50)
                </div>
                <div className='w-[25%]'>
                    Shardul Thakur
                    <br />
                    4/60(9)
                </div>
            </div>
            <div className='h-[0.5px] bg-black w-[98%]'></div>
            <div className='flex flex-row justify-between h-20 p-5'>
                <div className='w-[75%]'>
                    Jalay Movaliya
                    <br />
                    100(51)
                </div>
                <div className='w-[25%]'>
                    B kumar
                    <br />
                    3/64(5)
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default ScorecardSummary