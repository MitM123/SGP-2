import SignupForm from '../Login & signup/SignupForm'
import LoginForm from '../Login & signup/LoginForm'
import './Template.css'
import Game from '../../assets/Game2.png'

const Template = ({ Formtype }) => {

    return (

        <div className='main flex  w-screen h-screen bg-primary-color'>
            <div className='sports flex flex-col w-[50%] justify-center items-center '>
                <div className='flex gap-2 font-MateSC py-5 '>
                    <h1 className='logo-text  text-white text-3xl first-letter:text-blue-500 first-letter:text-4xl '>Field</h1>
                    <h1 className='logo-text  text-white  text-3xl first-letter:text-blue-500 first-letter:text-4xl'>And</h1>
                    <h1 className='logo-text  text-white  text-3xl first-letter:text-blue-500 first-letter:text-4xl '>Play</h1>
                </div>
                <div className='flex  '>
                    <h2 className='text-white text-xl font-semibold font-poppins'>Raising the  bar for amateur sport</h2>
                </div>
                <div className='w-[100%] flex justify-center'>
                    <img src={Game} alt="Game Logo" className='object-cover w-[90%] drop-shadow-3xl' />
                </div>
            </div>


            <div className='form flex w-[50%] justify-around items-center '>
                {Formtype === "/login" ? (<LoginForm />) : (<SignupForm />)}
            </div>
        </div>

    )
}

export default Template
