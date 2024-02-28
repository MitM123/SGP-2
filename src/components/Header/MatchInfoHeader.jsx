import React, { useState } from 'react'
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from "react-icons/md";
import Accountdetails from '../AccountDetails/Accountdetails';
import { RiMenu3Fill } from "react-icons/ri";
import '../Header/MatchHeader.css'




function MatchInfoHeader({ setIsLogin, isLogin }) {

    const menu = ["Summary", "Scorecard", "Commentary", "Squads"]
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }


    return (
        <div className='matchheader1 h-[9vh] bg-primary-color flex items-center justify-between w-full font-Outfit'>
            <div className='ml-3'>
                <Link to='/home'>
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

            <div className='hidden md:flex  h-full w-1/2 text-white gap-x-7 font-Outfit justify-center  items-center '>
                {
                    menu.map((item) => (
                        <Link key={item} to={item.toLowerCase()} className='text-lg hover:text-slate-500' >{item}</Link>
                    ))
                }
            </div>
            {
                !isLogin &&
                <Link to='/login'>
                    <button className='text-white hidden md:flex bg-blue-500 p-2 rounded-lg w-24 font-semibold justify-center  hover:text-blue-500 hover:bg-slate-200 mr-4'>
                        Login
                    </button>
                </Link>
            }
            {
                isLogin &&
                <div className='hidden md:flex  mr-4'>
                    <Accountdetails setIsLogin={setIsLogin} />
                </div>
            }


            <div className='md:hidden  mr-4'>
                <button onClick={toggleDrawer} className='text-white cursor-pointer'>
                    <RiMenu3Fill size={30} />
                </button>
            </div>
            {
                drawerOpen &&
                <div className='matchheader1 md:hidden  absolute top-[9vh] inset-x-0  bg-primary-color text-white p-4'>
                    <ul className='flex flex-col gap-5 font-Outfit'>
                        {menu.map((item) => (
                            <Link key={item} to={item.toLowerCase()} onClick={toggleDrawer} className='text-lg flex justify-center hover:text-slate-500'>{item}</Link>
                        ))}
                        {/* Responsive Accountdetails */}
                        {
                            !isLogin &&
                            <Link to='/login'>
                                <div className='flex justify-center'>
                                    <button className='text-white flex justify-center bg-blue-500 p-2 rounded-lg w-24 font-semibold  hover:text-blue-500 hover:bg-slate-200 '
                                        onClick={toggleDrawer}>
                                        Login
                                    </button>
                                </div>
                            </Link>
                        }
                        {
                            isLogin &&
                            <div className='flex justify-center'>
                                <Accountdetails setIsLogin={setIsLogin} />
                            </div>
                        }
                    </ul>
                </div>

            }
        </div>
    )
}

export default MatchInfoHeader
