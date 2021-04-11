import React, {Component} from 'react';
import "./Profile.css";


class ProfileDetail extends React.Component{
    render(){
        return(
            <div>
            <div className="profile_row">
                <h1 className="profile_colm25">Name: </h1>
                <h1 className="profile_colm75"> {this.props.na}</h1>
            </div>
            <div className="profile_row">
                <h1 className="profile_colm25">Gender: </h1>
                <h1 className="profile_colm75"> {this.props.gen}</h1>
            </div>
            <div className="profile_row">
                <h1 className="profile_colm25">Description: </h1>
                <h1 className="profile_colm75"> {this.props.des}</h1>
            </div>
            <div className="profile_row">
                <h1 className="profile_colm25">Facalty: </h1>
                <h1 className="profile_colm75"> {this.props.fac}</h1>
            </div>
            <div className="profile_row">
                <h1 className="profile_colm25">University: </h1>
                <h1 className="profile_colm75"> {this.props.u}</h1>
            </div>
            <div className="profile_row">
                <h1 className="profile_colm25">Years: </h1>
                <h1 className="profile_colm75"> {this.props.yrs}</h1>
            </div>
            <div className="profile_row">
                <h1 className="profile_colm25">Status: </h1>
                <h1 className="profile_colm75"> {this.props.sts}</h1>
            </div>
            <div className="profile_row">
                <h1 className="profile_colm25">Interests: </h1>
                <h1 className="profile_colm75">
                    {this.props.int.map(function(interest){
                    return (<p> {interest} </p>)
                    })}
                </h1>
            </div>
            
            

            

        </div>
        )
    }
}
/*
const ProfileDetail = (props) => {
    return(

        <div>
            <h1>Name: </h1><br></br>
            
            <h1>Gender: </h1><br></br>
            <h1>Description: </h1><br></br>
            <h1>Major: </h1><br></br>
            <h1>University: </h1><br></br>
            <h1>Years: </h1><br></br>
            <h1>Status: </h1><br></br>
            <h1>Interest: </h1>
            <h1>{props.na}</h1><br></br>
            <h1>{props.gen}</h1><br></br>
            <h1>{props.mj}</h1><br></br>
            <h1>{props.u}</h1><br></br>
            <h1>{props.yrs}</h1><br></br>
            <h1>{props.sts}</h1><br></br>
            <h1>{props.int}</h1><br></br>
            <h1>{props.na}</h1><br></br>

            

        </div>
    )



}
*/

export default ProfileDetail