import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoPerson } from "react-icons/go";
import Accountdetails from './AccountDetails/Accountdetails';


const Header = () => {

    const menu = ["Home", "Teams", "AboutUs", "Contact"];


    return (
        <div className='h-[8vh] bg-primary-color flex items-center justify-between w-full'>
            <div className='flex gap-2 font-MateSC ml-3'>
                <h1 className='logo-text  text-white text-2xl first-letter:text-blue-500 first-letter:text-3xl '>Field</h1>
                <h1 className='logo-text  text-white  text-2xl first-letter:text-blue-500 first-letter:text-3xl'>And</h1>
                <h1 className='logo-text  text-white  text-2xl first-letter:text-blue-500 first-letter:text-3xl '>Play</h1>
            </div>
            <nav className=''>
                <ul className='text-white flex font-Outfit gap-6'>
                    {menu.map((item) => (
                        <Link key={item} to={item.toLowerCase()} className='text-lg hover:text-slate-500'>{item}</Link>
                    ))}
                </ul>
            </nav>
            <div className='mr-4'>
            <Accountdetails/>
            </div>
        </div>
    )
}

export default Header
