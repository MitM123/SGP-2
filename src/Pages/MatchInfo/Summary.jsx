import React from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../App'
import Global from '../../Utils/Global'
import VS_IMG from '../../assets/VS.png'
import '../MatchInfo/Summary.css'

function Summary() {

    const { matchId } = useParams();
    const context = React.useContext(Context);
    console.log(context);
    let match;
    let winningTeam;
    if (context.match) {
        match = Global.matches[matchId];
        winningTeam = match.wonByTeam;
    }
    const ballsToOvers = (balls) => {
        return `${Math.floor(balls / 6)}.${balls % 6}`;
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
                    <div className='sum2 flex w-1/2 items-center justify-center flex-col'>
                        <div className='flex flex-row gap-x-20 items-center mb-5'>
                            <div className=''>
                                <div className='flex text-3xl font-bold font-poppins'>
                                    {match.team1Runs}/{match.team1Wickets}
                                </div>
                                <div className='text-sm font-poppins font-extralight'>
                                    <p>{ballsToOvers(match.team1Balls)} OVERS</p>
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
                                    <p>{ballsToOvers(match.team2Balls)} OVERS</p>
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
                    </div>
                    <div className='sum3 flex h-[85vh] items-center w-[0.5px] bg-black m-2 mr-3'></div>
                    <div className='sum4 w-1/2 font-poppins font-semibold m-3 '>
                        <div className='font-semibold text-2xl font-MateSC flex justify-center'>
                            Scorecard summary
                        </div>
                        <div className='flex flex-row justify-between h-10 w-[98%]  items-center p-5 bg-blue-200 rounded-md font-poppins font-semibold'>
                            <div>
                                {match.team1.name.toUpperCase()}
                            </div>
                            <div>
                                {match.team1Runs}/{match.team1Wickets} ({ballsToOvers(match.team1Balls)}vs)
                            </div>
                        </div>
                        <div className='flex flex-row h-20 p-5'>
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
                        <div className='flex flex-row h-20 p-5'>
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

                        <div className='flex flex-row justify-between h-10 w-[98%] items-center p-5 bg-blue-200 rounded-md font-poppins font-semibold mt-5'>
                            <div>
                                {match.team2.name.toUpperCase()}
                            </div>
                            <div>
                                {match.team2Runs}/{match.team2Wickets} ({ballsToOvers(match.team2Balls)}vs)
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
                </div>
            }
        </>

    )
}

export default Summary
