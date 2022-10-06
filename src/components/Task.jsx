import React from "react";
import '../css/Task.css';

function Task({ text, completado }) {
    return (
        <div className={completado ? 'task completado' : 'task'}>
            <p>{text}</p>
            <div className="icon-container">icon</div>
        </div>
    );
};

export default Task;