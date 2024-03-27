import React from 'react'
import Global from '../../Utils/Global'

const ScorecardSummary = ({ match }) => {
    return (
        <>
            <div className='sum4 w-1/2 font-poppins font-semibold m-3 '>
                <div className='font-semibold text-2xl font-MateSC flex justify-center'>
                    Scorecard summary
                </div>
                <div className='flex flex-row justify-between h-10 w-[98%]  items-center p-5 bg-blue-200 rounded-md font-poppins font-semibold'>
                    <div>
                        {match.team1.name.toUpperCase()}
                    </div>
                    <div>
                        {match.team1Runs}/{match.team1Wickets} ({Global.ballsToOvers(match.team1Balls)}vs)
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
                        {match.team2Runs}/{match.team2Wickets} ({Global.ballsToOvers(match.team2Balls)}vs)
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
        </>
    )
}

export default ScorecardSummary