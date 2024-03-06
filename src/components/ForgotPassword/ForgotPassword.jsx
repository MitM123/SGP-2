import React, { useState } from 'react'
import ResetPassword from './ResetPassword';
import CheckOTP from './CheckOTP';
import NewPassword from './NewPassword';
import ResetComplete from './ResetComplete';

const ForgotPassword = () => {
  const [component, setComponent] = useState("resetPassword");
  const [email, setEmail] = useState("");
  const components = {
    "resetPassword": <ResetPassword email={"okoko"} setEmail={setEmail} setComponent={setComponent} />,
    "checkOTP": <CheckOTP setComponent={setComponent} />,
    "newPassword": <NewPassword email={email} setComponent={setComponent}/>,
    "resetComplete": <ResetComplete />  
  }
  
  console.log(components[component])
  return (
    <>
      {
        components[component]
      }
    </>
  )
}

export default ForgotPassword
