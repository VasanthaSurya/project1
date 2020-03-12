import React from 'react';
import data from "./data.json";
import icon from './avatar.svg';
import R from './Resume';
import { BrowserRouter,Route,Link } from 'react-router-dom';

let Profile=(Name)=>{
    const profiles = data.profiles;
    return (
        <div className="parent">
            <BrowserRouter>
                <Route exact path="/resume" component={R}/>
            </BrowserRouter>
            {profiles.map((i,j)=>(
                <div className="child" key={j}>
                    <img src={icon} alt="profile" />
                    <h2>{i.basics.Name}</h2>
                    <hr/>
                    <a href="mailto:" className="link">{i.basics.Email}</a>
                    <br/><br/>
                    <a href="tel:" className="link">{i.basics.Mobile}</a>
                    <hr/>
                    <Link to={{pathname:"/resume", index:{value:{j}}}} className="btn">View Profile</Link>
                </div>
            ))}
        </div>
    )
}
export default Profile;