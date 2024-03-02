import './App.css';
import SignUp from './Pages/SignUp'
import Home from './Pages/Home/Home';
import Login from './Pages/Login'
import Addmatch from './Pages/AddMatch/Addmatch';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Matchinfo from './Pages/MatchInfo/Matchinfo';
import UserLayout from './components/UserLayout/UserLayout'
import Summary from './Pages/MatchInfo/Summary'
import ScoreCard from './Pages/MatchInfo/ScoreCard';
import Commentary from './Pages/MatchInfo/Commentary';
import Squads from './Pages/MatchInfo/Squads';
import Teams from './Pages/Teams/Teams';
import AboutUs from './Pages/Aboutus/AboutUs'
import Contact from './Pages/ContactUs/Contact';
import { useEffect, useState } from 'react';
import Global from './Utils/Global';
import Cookies from "universal-cookie";
import Selection from './Pages/Selection/Selection';
import ApplyNow from './Pages/Applynow/ApplyNow'
import Resetpassword from './components/ForgotPassword/Resetpassword';
import Checkotp from './components/ForgotPassword/Checkotp';
import Newpassword from './components/ForgotPassword/Newpassword';
import Resetcomplete from './components/ForgotPassword/Resetcomplete';
import Loader from './components/Loader/Loader';

const cookies = new Cookies();


const App = () => {

  const navigate = useNavigate();
  let [loaded, setLoaded] = useState(false);

  const validateSession = async () => {
    if (!Global.user) {
      const token = Global.token || cookies.get("token");
      if (token) {
        try {
          Global.token = token;
          const user = await Global.getUser();
          Global.user = user;
          setLoaded(true);
        } catch (e) {
          setLoaded(true);
          navigate("/login")
        }
      }
      else {
        setLoaded(true);
        navigate("/login")
      }
    }
  }

  useEffect(() => {
    validateSession();
  }, [])

  return (
    !loaded ?
      <>
        {/* Loading.... */}
        <div className='w-full h-[92vh] flex justify-center items-center'>
          <Loader />
        </div>
      </>
      :
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path='addmatch' element={<Addmatch />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='applynow' element={<ApplyNow />} />
          <Route path='teams' element={<Teams />} />
          <Route path='selection' element={<Selection />} />
          <Route path='resetpassword' element={<Resetpassword />} />
          <Route path='checkotp' element={<Checkotp />} />
          <Route path='newpassword' element={<Newpassword />} />
          <Route path='resetcomplete' element={<Resetcomplete />} />
        </Route>

        <Route path='/matchinfo' element={<Matchinfo />}>
          <Route path='summary' element={<Summary />} />
          <Route path='scorecard' element={<ScoreCard />} />
          <Route path="commentary" element={<Commentary />} />
          <Route path="squads" element={<Squads />} />
        </Route>




      </Routes>
  );
}

export default App;
