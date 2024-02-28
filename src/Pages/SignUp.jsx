import React from 'react'
import Template from '../components/Template/Template'

const SignUp = ({ setIsLogin }) => {
  return (
    <div>
      <Template
        formtype="/signup"
        setIsLogin={setIsLogin}
      />
    </div>
  )
}

export default SignUp
