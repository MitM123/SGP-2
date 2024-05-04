import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Global from '../../Utils/Global';
import VS_IMG from '../../assets/VS.png';
import { ballsToOvers } from '../../Helper/Helper';

const MatchSummary = () => {
    const appContext = useContext(AppContext);

    const makeString = (match) => {
        let string = `${match.wonByTeam.name.toUpperCase()} won by `;
        if (match.wonByTeam.sis_id === match.tossWonByTeamId) {
            string += `${match.wonBy === match.teamAId ? match.team1Runs : match.team2Runs} runs`;
        } else {
            string += `${10 - match.wonByTeam.wickets} wickets`;
        }
        return string;
    }

    return (
        <>
            {
                appContext.match &&
                <div className='sum2 flex w-full items-center justify-center flex-col'>
                    <div className='flex flex-row gap-x-20 items-center mb-5'>
                        <div className=''>
                            <div className='flex text-3xl font-bold font-poppins'>
                                {appContext.teamAScore.runs}/{appContext.teamAScore.wickets}
                            </div>
                            <div className='text-sm font-poppins font-extralight'>
                                <p>{ballsToOvers(appContext.teamAScore.balls)} OVERS</p>
                            </div>
                            <div className='text-xl font-semibold'>
                                {appContext.teamAScore.name.toUpperCase()}
                            </div>
                        </div>
                        <div>
                            <img src={VS_IMG} alt='No' className='h-32 w-32' />
                        </div>
                        <div>
                            <div className='flex text-3xl font-bold font-poppins'>
                                {appContext.teamBScore.runs}/{appContext.teamBScore.wickets}
                            </div>
                            <div className='text-sm font-extralight font-poppins'>
                                <p>{ballsToOvers(appContext.teamBScore.balls)} OVERS</p>
                            </div>
                            <div className='text-xl font-semibold'>
                                {appContext.teamBScore.name.toUpperCase()}
                            </div>
                        </div>
                    </div>
                    <div className='bg-slate-800 h-[0.5px]  w-2/3 mt-6'></div>
                    <div className='mt-3 font-poppins font-semibold text-blue-800'>
                        {appContext.match.wonByTeam ? makeString(appContext.match) : "Winner hasn't been declared yet."}
                    </div>
                </div>
            }
        </>
    )
}

export default MatchSummary