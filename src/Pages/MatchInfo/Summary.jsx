import React from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../App'
import Global from '../../Utils/Global'
import VS_IMG from '../../assets/VS.png'
import ScorecardSummary from './ScorecardSummary';
import '../MatchInfo/Summary.css'
import MatchSummary from './MatchSummary'

function Summary() {

    const { matchId } = useParams();
    const context = React.useContext(Context);
    let match;
    let winningTeam;
    if (context.match) {
        match = Global.matches[matchId];
        winningTeam = match.wonByTeam;
    }
    const makeString = (match) => {
        let string = `${winningTeam.name.toUpperCase()} won by `;
        if (winningTeam.sis_id === match.tossWonBy) {
            string += `${match.wonBy === match.team1Id ? match.team1Runs : match.team2Runs} runs`;
        } else {
            string += `${10 - winningTeam.wickets} wickets`;
        }
        return string;
    }

    return (
        <>
            {
                context.match &&
                <div className='sum1 h-full flex flex-row w-full'>
                    {/* <div className='sum2 flex w-1/2 items-center justify-center flex-col'>
                        <div className='flex flex-row gap-x-20 items-center mb-5'>
                            <div className=''>
                                <div className='flex text-3xl font-bold font-poppins'>
                                    {match.team1Runs}/{match.team1Wickets}
                                </div>
                                <div className='text-sm font-poppins font-extralight'>
                                    <p>{Global.ballsToOvers(match.team1Balls)} OVERS</p>
                                </div>
                                <div className='text-xl font-semibold'>
                                    {Global.matches[matchId].team1.name.toUpperCase()}
                                </div>
                            </div>
                            <div>
                                <img src={VS_IMG} alt='No' className='h-32 w-32' />
                            </div>
                            <div>
                                <div className='flex text-3xl font-bold font-poppins'>
                                    {match.team2Runs}/{match.team2Wickets}
                                </div>
                                <div className='text-sm font-extralight font-poppins'>
                                    <p>{Global.ballsToOvers(match.team2Balls)} OVERS</p>
                                </div>
                                <div className='text-xl font-semibold'>
                                    {Global.matches[matchId].team2.name.toUpperCase()}
                                </div>
                            </div>
                        </div>
                        <div className='bg-slate-800 h-[0.5px]  w-2/3 mt-6'></div>
                        <div className='mt-3 font-poppins font-semibold text-blue-800'>
                            {Global.matches[matchId].wonByTeam ? makeString(Global.matches[matchId]) : "Winner hasn't been declared yet."}
                        </div>
                    </div> */}
                    <MatchSummary match={match} />
                    <div className='sum3 flex h-[85vh] items-center w-[0.5px] bg-black m-2 mr-3'></div>
                    <ScorecardSummary match={match}/>
                </div>
            }
        </>

    )
}

export default Summary
