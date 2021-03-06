import React, {Component} from 'react';
import "./Menu.css";


class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
            <a className="menu_item" onClick={this.props.toProfileForm} width="300" height="300"><i class="fas fa-home fa-3x"></i></a>
            <a className="menu_item" onClick={this.props.toProf} width="300" height="300"><i class="fas fa-user fa-3x"></i></a>
            <a className="menu_item" onClick={this.props.tomission}width="300" height="300"><i class="fas fa-calendar-alt fa-3x"></i></a>
            
            </div>
        )
    }
}
/*
const Menu = (props) => {
 

    return(

        <div className="menu">
           <a className="menu_item" width="300" height="300"><i class="fas fa-home fa-3x"></i></a>
           <a className="menu_item" onClick={props.toProf} width="300" height="300"><i class="fas fa-user fa-3x"></i></a>
           <a className="menu_item" onClick={props.tomission}width="300" height="300"><i class="fas fa-calendar-alt fa-3x"></i></a>
           
        </div>
        
    );

};
*/

export default Menu;