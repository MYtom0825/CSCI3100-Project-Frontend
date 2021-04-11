import React, {Component} from 'react';
import "./Matching.css";
/*<div className="row">
                    <div className="Name_card_column">
                        <Name_card />
                    </div>

                </div>*/

//import Component
import Name_card from './Name_card'


class Matching3 extends React.Component{
    render(){
        return(
            <div className='chating_container'>
                <div className='namecard_container'>
                    <Name_card />
                </div>
                <div className='chatbox_container'>
           
                </div>
            </div>
        )
    }
}

export default Matching3;