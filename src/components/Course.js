import React from 'react';
import { NavLink } from "react-router-dom";


const Course = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '15px'}}>
        <div className="Kurs">
            <h5 className="Kurs-ID">Kurs-ID: {props.course.id}</h5>
            <h3 className="Kurs-Name">{props.course.name}</h3>
            <h4 className="Kurs-Kurz">{props.course.short}</h4>
            <NavLink to ="./Intranet2" className="Kurs-Link">Zur Veranstaltungs-Info ...</NavLink>
        </div>
    </div>
);

export default Course;
