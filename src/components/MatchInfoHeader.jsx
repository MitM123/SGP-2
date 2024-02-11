import React, { useState } from 'react'
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from "react-icons/md";
import Accountdetails from './AccountDetails/Accountdetails';


function MatchInfoHeader() {

    const menu = ["Summary", "Scorecard", "Commentary", "Squads"]


    return (
        <div>
            <div className='h-[9vh] bg-primary-color flex items-center justify-between w-full font-Outfit'>
                <div className='ml-3'>
                    <Link to='/user/home'>
                        <MdArrowBackIosNew color='white' size={23} />
                    </Link>
                </div>
                <div className='h-full w-1/2 text-white flex flex-row gap-x-10 items-center justify-center'>
                    <div className='text-xl'>
                        CSPIT-IT
                    </div>
                    <div>
                        VS
                    </div>
                    <div className='text-xl'>
                        IIIM-BBA
                    </div>
                </div>
                <div className='h-full w-1/2 text-white gap-x-7 font-Outfit justify-center flex items-center '>
                    {
                        menu.map((item) => (
                            <Link key={item} to={item.toLowerCase()} className='text-lg hover:text-slate-500' >{item}</Link>
                        ))
                    }
                </div>
                <div className='mr-4'>
                    <Accountdetails />  
                </div>
            </div>
        </div>
    )
}

export default MatchInfoHeader
