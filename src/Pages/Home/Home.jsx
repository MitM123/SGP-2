import React, { useEffect } from 'react';
// import Header from '../../Components/Header/Header'

import io from 'socket.io-client';

const socket = io("http://localhost:3000")
socket.connect();


const Home = ({msg, setMsg}) => {
  socket.on("recieve", e=>{
    console.log(e)
  })
  useEffect(() => {

  }, [])
  return (
    <div>
      {/* <Matches /> */}
      <input type="text" />
      
      Spoural Home Page
    </div>
  )
}

export default Home
