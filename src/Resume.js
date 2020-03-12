import React from 'react';
import data from './data.json';
import icon from './avatar.svg';

let Resume=(props)=>{
    let info = Object.values(props.location.index.value);
    let person = data.profiles[info];
    console.log(person);
    return(
        <div className="parent">
            <div className="child1">
                <img src={icon} alt="profile"/>
                <h3>{person.basics.Name}</h3>
                <h3>{person.basics.Email}</h3>
                <h3>{person.basics.Mobile}</h3>
            </div>
            <div className="child2">
                <h3> Educational Qualifications</h3><hr/>
                {person.Education.map((i,j)=>(
                    <div key={j}>
                        <h4>{i.Degree}</h4>
                        <ul>
                            <li>{i.Percentage}</li>
                            <li>{i.Institution}</li>
                        </ul>
                    </div>
                ))}
                <hr/>
                <h3> Skills</h3>
                {person.Skills.map((x,y)=>
                    <div>
                        <h4>{x.Type}</h4>
                        {x.Values.map((k,l)=>
                            <div key={l} style={{display:"inline"}}>
                                <span className="skill">{k}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Resume;
