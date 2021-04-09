import React, {useState} from 'react';
import "./App.css";

//Import Component
import Menu from "./menu/Menu"
import Profile from "./profile/Profile"
import Mission from "./mission/Mission"
import Matching3 from "./matching/Matching3"
import ReportForm from "./ReportForm/ReportForm"
import TokenBlock from "./token/Token"
import ProfileRegisterForm from "./ProfileRegistrationForm/ProfileRegisterForm"
import Report_form from './ReportForm/ReportForm';
//import Chat from "./matching/Chat_Component/Chating"

const App = () => {
  //Write Javascript Here

  const [tomission, setgomission] = useState(false)
  const [toProfile, setgoProfile] = useState(false)

  const MissionGet = () =>{
    setgomission((tomission) => tomission=true);
    setgoProfile((toProfile)=> toProfile=false);
    console.log("mission");
    
  };
  const ProfileGet = () =>{
    setgoProfile((toProfile)=> toProfile=true);
    setgomission((tomission)=>tomission=false)
    console.log("haha");
  }

  return(
    <div className="app">
      <div>
        <Menu toProf={ProfileGet} tomission={MissionGet}/>
        
      </div>
      <div className="body">
        <div><TokenBlock /></div>
        
        {toProfile ? <Profile />:''}

        {tomission ?  <ProfileRegisterForm /> :''}
       
      </div>
      
      
        
      
    </div>
    
  );
}

export default App;