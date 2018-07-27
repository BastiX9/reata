import React from 'react';

const SingleCourse = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="Kurs-Single">
            <h6 className="Kurs-ID">ID: {props.course.id}</h6>
            <h4 className="Kurs-Name">{props.course.name}</h4>
            <p className="Kurs-Kurz">{props.course.short}</p>
            <p className="Kurs-Info">{props.course.vinfo}</p>
            <p className="Kurs-Block">{props.course.block}</p>
        </div>
    </div>
);

export default SingleCourse;
