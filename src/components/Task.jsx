import React from "react";
import '../css/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, text, completado, completarTarea, eliminarTarea }) {
    return (
        <div 
        className={completado ? 'task completado' : 'task'}>

            <p onClick={() => completarTarea(id)}>{text}</p>

            <div 
            className="icon-container">
                <AiOutlineCloseCircle onClick={() => eliminarTarea(id)}  className='taskIcon'/>
            </div>

        </div>
    );
};

export default Task;