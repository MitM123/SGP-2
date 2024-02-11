import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { loginUser } from '../../Helper/Helper';
import { FcGoogle } from 'react-icons/fc'
import { auth, provider } from './SignupwithGoogle'
import { signInWithPopup } from 'firebase/auth';
import '../Template/Template.css'
import Cookies from 'universal-cookie';
import Global from '../../Utils/Global'

const cookies = new Cookies();




const LoginForm = () => {
    const navigate = useNavigate();


    function signupwithgooglehandler() {
        signInWithPopup(auth, provider).then(() => {
            console.log(auth);
            console.log(provider);
            toast.success("Account created successfully");
            navigate("/user/home")
        }).catch((error) => {
            console.log(error)
            toast.error("Error Generated")
        })
    }


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async values => {
            values = await Object.assign(values);
            console.log(values)
            let loginuserPromise = loginUser(values);
            toast.promise(loginuserPromise, {
                loading: "Logging in...",
                success: 'Logged in Successfully',
                error: "Error generated"
            })
            loginuserPromise.then(data => {
                const {token} = data;
                cookies.set("token", token);
                navigate("/user/home");
            })
        }
    })



    return (
        <>
            <Toaster></Toaster>
            <form action="" className='mainlogin flex flex-col w-3/6 gap-y-8 font-poppins ' onSubmit={formik.handleSubmit}>
                <h1 className='text-white font-bold text-2xl flex justify-center font-poppins '>Login</h1>
                <div className='flex flex-col gap-y-1 '>
                    <label htmlFor="email" ></label>
                    <input type="email" id='email' name='email' required {...formik.getFieldProps('email')} placeholder='Your email address' className='outline-none text-white p-3 rounded-lg bg-slate-900' />
                    <br />
                    <label htmlFor="password"></label>
                    <input type="password" id='password' name='password' required {...formik.getFieldProps('password')} placeholder='Password' className='outline-none text-white p-3 rounded-lg bg-slate-900' />
                </div>
                <div className='flex justify-between '>
                    <p className='flex justify-center items-center'>
                        <span className='text-white cursor-pointer' >Forgot Password?</span>
                    </p>
                    <button className='text-white bg-blue-500 p-2 rounded-lg w-28 font-semibold  hover:text-blue-500 hover:bg-slate-200 '>
                        Login
                    </button>
                </div>
                <div className='flex w-full items-center my-0 gap-x-2'>
                    <div className='h-[1px] w-full bg-slate-600'></div>
                    <p className='text-slate-700 font-medium leading-[1.375rem]'
                    >OR</p>
                    <div className='h-[1px] w-full bg-slate-600'></div>
                </div>
                <div className='flex flex-row items-center justify-center gap-3 cursor-pointer' onClick={signupwithgooglehandler}>
                    <div className='' >
                        <FcGoogle size="30px" />
                    </div>
                    <div className='text-white font-poppins text-xl ' >
                        <p>Continue With Google</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center text-blue-500 font-semibold'>
                    <p className=''> Don't have an Account?</p>
                    <Link to="/signup">
                        <span className='cursor-pointer underline'>Signup</span>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default LoginForm;



