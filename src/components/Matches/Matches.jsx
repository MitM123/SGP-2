import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Matches = () => {
    const [displaydata, setDisplaydata] = useState(null);


    useEffect(() => {
        const savedData = localStorage.getItem('data');
        console.log("Saveddata->", savedData)

        if (savedData) {
            // Parse the saved data from JSON string to object
            const parsedData = JSON.parse(savedData);
            console.log(parsedData)
            setDisplaydata(parsedData);
        }
    }, []);








    return (
        displaydata === null ? (
            <Link to="/user/addmatch">
                <button className='text-white bg-blue-950 p-3 rounded-lg w-30 font-poppins font-semibold  hover:text-black hover:bg-slate-200 flex flex-row items-center gap-1 justify-center'>
                    <IoMdAdd size={20} />
                    AddMatch
                </button >
            </Link>
        ) : (
            <div className='flex flex-col'>
                <div className='flex justify-end mr-4 items-center h-[10vh]  '>
                    <Link to="/user/addmatch">
                        <button className='text-white bg-blue-950 p-3 rounded-md w-30 font-poppins font-semibold  flex flex-row items-center gap-1'>
                            <IoMdAdd size={20} />
                            AddMatch
                        </button >
                    </Link>
                </div >
                <div className='grid grid-cols-3 gap-4 mt-4 w-full h-[79vh] '>
                    <Link to='/matchinfo/summary'>
                        <div className=' bg-primary-color h-32 ml-4 mr-4 rounded-xl'>
                            <div className='text-white flex flex-row justify-between w-full h-9 items-center text-xs font-poppins font-semibold'>
                                <div className='ml-5'>
                                    Spoural 2K24
                                </div>
                                <div className='mr-5'>
                                    {displaydata.time}
                                </div>
                            </div>
                            <div className='h-px ml-4 mr-4 bg-black'></div>
                            <div className='h-12 flex flex-row justify-around items-center font-poppins'>
                                <div className='text-white font-semibold '>
                                    {displaydata.team1}
                                </div>
                                <div className=' text-blue-600 text-xl'>
                                    vs
                                </div>
                                <div className='text-white font-semibold '>
                                    {displaydata.team2}
                                </div>

                            </div>
                            <div className='h-px ml-4 mr-4 bg-black'></div>
                            <div className='text-white flex flex-row justify-between w-full h-9 items-center text-xs font-poppins font-semibold'>
                                <div className='ml-5'>
                                    {displaydata.date}
                                </div>
                                <div className='mr-5'>
                                    CHARUSAT
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
        )

    )
}

export default Matches
