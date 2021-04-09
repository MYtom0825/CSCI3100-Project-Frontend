import React, {Component} from 'react';
import "./Matching.css";


//import Component
import Name_card from './Name_card'
import Chat from './Chat_Component/Chating'

class Matching3 extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="Name_card_column">
                        <Name_card />
                    </div>
                    <div className="column">
                    </div>
                    <div className="column">
                        <div className="Name_card_column">
                            <Name_card />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Matching3;