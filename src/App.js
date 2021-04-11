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

//import Chat from "./matching/Chat_Component/Chating"

const App = () => {
  //Write Javascript Here

  const [tomission, setgomission] = useState(false)
  const [toProfile, setgoProfile] = useState(false)
  const [toProfileForm, setgoProfileForm] = useState(false)

  const ProfileFormGet = () =>{
    setgoProfileForm((toProfileForm) => toProfileForm=true);
    setgomission((tomission) => tomission=false);
    setgoProfile((toProfile)=> toProfile=false);
    console.log("mission");
    
  };

  const MissionGet = () =>{
    setgoProfileForm((toProfileForm) => toProfileForm=false);
    setgomission((tomission) => tomission=true);
    setgoProfile((toProfile)=> toProfile=false);
    console.log("mission");
    
  };
  const ProfileGet = () =>{
    setgoProfileForm((toProfileForm) => toProfileForm=false);
    setgoProfile((toProfile)=> toProfile=true);
    setgomission((tomission)=>tomission=false)
    console.log("haha");
  }
  const users = { name: "Tom",
                  gender: "Male",
                  picture: "",
                  description: "Hi I am using react",
                  facalty: "Engineering",
                  university: "CUHK",
                  years: "3",
                  status: "A0",
                  interest: ["Dancing","Pop music","Classic music"] };

  return(
    <div className="app">
      <div>
        <Menu toProf={ProfileGet} tomission={MissionGet} toProfileForm={ProfileFormGet}/>
        
      </div>
      <div className="body">
        <div><TokenBlock  /></div>
        {toProfileForm ? <ProfileRegisterForm user={users}/>:''}
        {toProfile ? <Profile user={users}/>:''}

        {tomission ?  /*<ProfileRegisterForm user={users}*/ <Mission/> :''}
       
      </div>
      
      
        
      
    </div>
    
  );
}

export default App;