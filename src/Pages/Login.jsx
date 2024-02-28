import React from 'react'
import Template from '../components/Template/Template'

const Login = ({setIsLogin}) => {
    return (
        <div>
            <Template
                Formtype="login"
                setIsLogin={setIsLogin}
            />

        </div>
    )
}

export default Login

