import React from 'react'
import VS_IMG from '../../assets/VS.png'
import '../MatchInfo/Summary.css'

function Summary() {

    


    return (
            <div className='sum1 h-full flex flex-row w-full'>
                <div className='sum2 flex w-1/2 items-center justify-center flex-col'>
                    <div className='flex flex-row gap-x-20 items-center mb-5'>
                        <div className=''>
                            <div className='flex text-3xl font-bold font-poppins'>
                                156/7
                            </div>
                            <div className='text-sm font-poppins font-extralight'>
                                <p>42.2 OVERS</p>
                            </div>
                              <div className='text-xl font-semibold'>
                                CSPIT-CE
                            </div>
                        </div>
                        <div>
                            <img src={VS_IMG} alt='No' className='h-32 w-32' />
                        </div>
                        <div>
                            <div className='flex text-3xl font-bold font-poppins'>
                                200/7
                            </div>
                            <div className='text-sm font-extralight font-poppins'>
                                <p>50 OVERS</p>
                            </div>
                            <div className='text-xl font-semibold'>
                                iiim-bba
                            </div>
                        </div>
                    </div>
                    <div className='bg-slate-800 h-[0.5px]  w-2/3 mt-6'></div>
                    <div className='mt-3 font-poppins font-semibold text-blue-800'>
                        CSPIT-CE WON BY 27 RUNS
                    </div>
                </div>
                <div className='sum3 flex h-[85vh] items-center w-[0.5px] bg-black m-2 mr-3'></div>
                <div className='sum4 w-1/2 font-poppins font-semibold m-3 '>
                    <div className='font-semibold text-2xl font-MateSC flex justify-center'>
                        Scorecard summary
                    </div>
                    <div className='flex flex-row justify-between h-10 w-[98%]  items-center p-5 bg-blue-200 rounded-md font-poppins font-semibold'>
                        <div>
                            CSPIT-CE
                        </div>
                        <div>
                            156/7 (42.2Ovs)
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
                            CSPIT-CE
                        </div>
                        <div>
                            156/7 (42.2Ovs)
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
    )
}

export default Summary
