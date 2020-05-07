import React, { Component } from 'react';
import './Style.css'
 
export default class CoverImg extends Component {
    render() {

        const MENUBAR = MenuBar

        return(
            <div>
               <MENUBAR />
            </div>
        )
    }

}

class MenuBar extends Component{
    render() {

        return(
            <div className="menuBar-Component">
            </div>
        )
    }
}

class MenuBody extends Component{
    render() {

        return(
            <div>

            </div>
        )
    }
}