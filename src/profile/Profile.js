import React, {Component, useState} from 'react';
import "./Profile.css";

import ProfileDetail from './profileDetail';


class profile extends React.Component{

    
    render(){

        
       var user=[]
       user[0]=this.props.user;
        return(
            <nav>
            <div style={{padding:"5px 0 0 45%"}}>
                <img className="profile_img" src="https://placeimg.com/400/400/tech" alt="test" width="300" height="300"></img>
            </div>
            <div className="profile_detail">
                {user.map((user) => (
                    <ProfileDetail  na={user.name} 
                                    gen={user.gender} 
                                    pic={user.picture} 
                                    des={user.description} 
                                    fac={user.facalty} 
                                    u={user.university}
                                    yrs={user.years} 
                                    sts={user.status} 
                                    int={user.interest} />
                ))}
            </div>
            <input type="submit" value="Edit" id="Submit" ></input>
        </nav>
        )
    }
}
/*
const profile = () => {
    const this.props.user = [{ name: "Tom",
                    gender: "Male",
                    picture: "",
                    description: "Hi I am use react",
                    major: "BEng",
                    university: "CU",
                    years: "3",
                    status: "A0",
                    interest: "nothing"}];


    return(
        <nav>
            
            <img className="profile_img" src="https://placeimg.com/400/400/tech" alt="test" width="300" height="300"></img>
            
            <div className="profile_detail">
                {this.props.user.map((this.props.user) => (
                    <ProfileDetail  na={this.props.user.name} 
                                    gen={this.props.user.gender} 
                                    pic={this.props.user.picture} 
                                    des={this.props.user.description} 
                                    mj={this.props.user.major} 
                                    u={this.props.user.university}
                                    yrs={this.props.user.years} 
                                    sts={this.props.user.status} 
                                    int={this.props.user.interest} />
                ))}
                

            </div>
        
        </nav>
    )



}
*/

export default profile