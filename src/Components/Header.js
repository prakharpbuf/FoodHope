import React from "react"
import logo from "../images/logo.png"
import {Link} from "react-router-dom"

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            expanded: false
        }
    }
    toggleHeader(){
        this.setState(prevState =>{
            return {
                expanded: !prevState.expanded
            }
        })
    }
    render(){
        const changed = this.state.expanded?"change":"";
        return (
            <header>
                <img src={logo} alt="logo" className="logo" />
                <div className="container" onClick={this.toggleHeader.bind(this)}>
                    <div className={changed + " bar1"}></div>
                    <div className={changed + " bar2"}></div>
                    <div className={changed + " bar3"}></div>
                </div>
                <div style={{height: this.state.expanded?"":"0"}} className="links">
                    <Link to="#home">Home</Link>
                    <Link to="#about">About</Link>
                    <Link to="#contact">Contact</Link>
                </div>
            </header>
       )
   }
}

export default Header