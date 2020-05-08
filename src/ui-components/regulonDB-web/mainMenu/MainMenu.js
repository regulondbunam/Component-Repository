import React, { Component } from 'react';
import Button, {IconButton} from '../../basicInput/Buttons'
import './Style.css'
 
export default class MainMenu extends Component {
    render() {
        const{
            dataMenu
        } = this.props

        const MENUBAR = MenuBar

        return(
            <div>
               <MENUBAR menus={dataMenu}/>
            </div>
        )
    }

}

class MenuBar extends Component{
    render() {
        const {
            menus
        } = this.props

        console.log(menus)

        return(
            <div className="menuBar-Component">
                {
                    menus.map(function(menu){
                        console.log(menu.type)
                        switch(menu.type){
                            case "HOME":
                                return HOME_BUTTON()
                            default:
                                return MENU_BUTTON(menu.title)
                        }
                        
                    }

                    )
                }
                
            </div>
        )
    }
}
const buttonHomeStyle = {width:"60px",height:"60px", border: "solid 3px #ffffff"}
const iconStyle = {fontSize: "50px"}
function HOME_BUTTON(){
    return(
        <div className="menuBar-Home">
                    <IconButton icon={"home"} style={buttonHomeStyle} iconStyle={iconStyle}/>
                </div>
    )
}
const buttonMenuStyle = {fontSize: "18px", height: "80px"}
function MENU_BUTTON(title){
    return(
        <div className="menuBar-Menu">
            <Button label={title} style={buttonMenuStyle}/>
        </div>
    )
}

class MenuBody extends Component{
    render() {

        return(
            <div>

            </div>
        )
    }
}