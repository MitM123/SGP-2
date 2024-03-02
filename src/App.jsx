import './App.css';
import SignUp from './Pages/SignUp'
import Home from './Pages/Home/Home';
import Login from './Pages/Login'
import Addmatch from './Pages/AddMatch/Addmatch';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Matchinfo from './Pages/MatchInfo/Matchinfo';
import UserLayout from './Components/UserLayout/UserLayout'
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
import ApplyNow from './Pages/ApplyNow/ApplyNow'
import Resetpassword from './Components/ForgotPassword/Resetpassword';
import Checkotp from './Components/ForgotPassword/Checkotp';
import Newpassword from './Components/ForgotPassword/Newpassword';
import Resetcomplete from './Components/ForgotPassword/Resetcomplete';
import Team from './Pages/Teams/Team';
import Loader from './Components/Loader/Loader';
import TeamNavigation from './Pages/Teams/TeamNavigation';

const cookies = new Cookies();


const App = () => {

  const navigate = useNavigate();
  let [loaded, setLoaded] = useState(false);
  const location = useLocation();

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
      <Loader />
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

        <Route path='/teams/:teamId' element={<TeamNavigation />} >
          <Route path='' element={<Team />} />
          <Route path='players' element={<Team />} />
          <Route path='Matches' element={<Team />} />
          <Route path='manage' element={<Selection />} />
        </Route>
      </Routes>
  );
}

export default App;
