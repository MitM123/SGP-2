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
import { createContext, useEffect, useState } from 'react';
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
import Matches from './Components/Matches/Matches';
import Error404 from './Pages/Errors/Error404';

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
    validateSession();
  }, [])

  return (
    <>
      <Context.Provider value={{ team, setTeam, match, setMatch }}>
        {!loaded ?
          <Loader />
          :
          <Routes>

            <Route path='/' element={<UserLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path='contact' element={<Contact />} />
              <Route path='applynow' element={<ApplyNow />} />
              <Route path='selection' element={<Selection />} />
              <Route path='resetpassword' element={<Resetpassword />} />
              <Route path='checkotp' element={<Checkotp />} />
              <Route path='newpassword' element={<Newpassword />} />
              <Route path='resetcomplete' element={<Resetcomplete />} />
              <Route path='teams' element={<Teams />} />
              <Route path='matches' element={<Matches />} />
            </Route>

            <Route path='/matches/:matchId' element={<Matchinfo />}>
              <Route path='' element={<Summary />} />
              <Route path='summary' element={<Summary />} />
              <Route path='scorecard' element={<ScoreCard />} />
              <Route path='commentary' element={<Commentary />} />
              <Route path='squads' element={<Squads />} />
            </Route>

            <Route path='/teams/:teamId' element={<TeamNavigation />} >
              <Route path='' element={<Team />} />
              <Route path='players' element={<Team />} />
              <Route path='matches' element={<Team />} />
              <Route path='manage' element={<Selection />} />
            </Route>

            {
              ["*", "/error404"].map(path => {
                return <Route key={path} path='/error404' element={<>
                  <UserLayout />
                  <Error404 />
                </>} />
              })
            }

          </Routes>
        }
      </Context.Provider>
    </>
  );
}

export default App;
