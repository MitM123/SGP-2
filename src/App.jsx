import { createContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import './App.css';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Loader from './Components/Loader/Loader';
import Matches from './Components/Matches/Matches';
import UserLayout from './Components/UserLayout/UserLayout';
import AboutUs from './Pages/Aboutus/AboutUs';
import ApplyNow from './Pages/ApplyNow/ApplyNow';
import Contact from './Pages/ContactUs/Contact';
import Inbox from './Pages/ContactUs/Inbox';
import Ticket from './Pages/ContactUs/Ticket';
import Error404 from './Pages/Errors/Error404';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Commentary from './Pages/MatchInfo/Commentary';
import Matchinfo from './Pages/MatchInfo/Matchinfo';
import ScoreCard from './Pages/MatchInfo/ScoreCard';
import Squads from './Pages/MatchInfo/Squads';
import Summary from './Pages/MatchInfo/Summary';
import Selection from './Pages/Selection/Selection';
import SignUp from './Pages/SignUp';
import Team from './Pages/Teams/Team';
import TeamNavigation from './Pages/Teams/TeamNavigation';
import Teams from './Pages/Teams/Teams';
import Global from './Utils/Global';
import Addmatch from './Pages/AddMatch/Addmatch';
import LiveScore from './Pages/MatchInfo/LiveScore';

const cookies = new Cookies();

export const Context = createContext();

const App = () => {

  const navigate = useNavigate();
  let [loaded, setLoaded] = useState(false);
  const location = useLocation();

  const loginRequiredPaths = ["/addmatch", "/applynow"]

  const [team, setTeam] = useState(null);

  const [match, setMatch] = useState(null);

  const validateSession = async () => {
    if (!Global.user) {
      const token = Global.token || cookies.get("token");
      if (token) {
        try {
          Global.token = token;
          const user = await Global.getUser();
          console.log(user)
          Global.user = user;
          setLoaded(true);
        } catch (e) {
          setLoaded(true);
          if (loginRequiredPaths.includes(location.pathname)) {
            navigate("/login")
          }
        }
      }
      else {
        setLoaded(true);
        if (loginRequiredPaths.includes(location.pathname)) {
          navigate("/login")
        }
      }
    }
  }

  useEffect(() => {
    (async () => {
      validateSession();
    })()
  }, [])

  return (
    <>
      <Context.Provider value={{ team, setTeam, match, setMatch }}>
        {!loaded ?
          <Loader />
          :
          <Routes>
            <Route path='/' element={<UserLayout />}>
              <Route path="home" element={<Matches />} />
              <Route path="" element={<Matches />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path='contact' element={<Contact />} />
              <Route path='applynow' element={<ApplyNow />} />
              <Route path='selection' element={<Selection />} />
              <Route path='forgetpassword' element={<ForgotPassword />} />
              <Route path='teams' element={<Teams />} />
              <Route path='matches' element={<Matches />} />
              <Route path='addmatch' element={<Addmatch />} />
              <Route path='inbox' element={<Inbox />} />
              <Route path='inbox/:id' element={<Ticket />} />
            </Route>

            <Route path='/matches'>
              <Route path='addmatch' element={<>
                <UserLayout />
                <Addmatch />
              </>} />
              <Route path=':matchId' element={<Matchinfo />}>
                <Route path='' element={<Summary />} />
                <Route path='summary' element={<Summary />} />
                <Route path='scorecard' element={<ScoreCard />} />
                <Route path='commentary' element={<Commentary />} />
                <Route path='squads' element={<Squads />} />
                <Route path='livescore' element={<LiveScore />} />
              </Route>
            </Route>

            <Route path='/teams/:teamId' element={<TeamNavigation />} >
              <Route path='' element={<Team />} />
              <Route path='players' element={<Team />} />
              <Route path='matches' element={<Team />} />
              <Route path='manage' element={<Selection />} />
            </Route>


            <Route key="*" path='/error404' element={<>
              <UserLayout />
              <Error404 />
            </>} />

          </Routes>
        }
      </Context.Provider>
    </>
  );
}

export default App;
