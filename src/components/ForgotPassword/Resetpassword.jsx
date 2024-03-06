import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Resetpassword = () => {
    return (
        <div className='w-full h-[92vh] flex justify-center items-center '>
            <div className='w-[25%] h-[60%]  rounded-lg flex flex-col '>
                <h1 className='text-2xl font-Rubik' >Reset Your Password</h1>
                <p className='font-Rubik mb-5 mt-2'>Have no fear. we'll email you instruction to reset your password. if you dont have access to your email we can try account recovery </p>
                <div className='flex justify-center'>
                    <label htmlFor="email" ></label>
                    <input type="email" id='email' name='email' required placeholder='Your email address' className='outline-none text-white p-3 font-Rubik rounded-lg bg-slate-900 w-full ' />
                    <br />
                </div>
                <Link to='/checkotp'>
                    <div className='flex justify-center'>
                        <button className='flex items-center justify-center bg-primary-color font-semibold p-2 rounded-lg mt-2 text-white gap-x-2 w-full '  >
                            Reset Password
                        </button>
                    </div>
                </Link>
                <div>
                    <Link to='/login'>
                        <button className=' text-black mt-2 text-lg font-Outfit items-center flex gap-1 justify-center p-1 rounded-lg  flex-row'>
                            <FaArrowLeftLong />
                            Back to login
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Resetpassword
