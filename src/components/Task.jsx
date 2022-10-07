import React from "react";
import '../css/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, text, completado, completarTarea, eliminarTarea }) {
    return (
        <div 
        onClick={() => completarTarea(id)}
        className={completado ? 'task completado' : 'task'}>
            <p>{text}</p>
            <div 
            onClick={() => eliminarTarea(id)}
            className="icon-container">
                <AiOutlineCloseCircle  className='taskIcon'/>
            </div>
        </div>
    );
};

export default Task;