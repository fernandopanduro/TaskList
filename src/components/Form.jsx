import React, { useState } from "react";
import '../css/Form.css';
import { v4 as uuidv4 } from 'uuid';

function FormTask(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value)
    };

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            text: input,
            completado: false
        };

        props.onSubmit(tareaNueva);
    };

    return (
    <form  
    className="form-task" 
    onSubmit={manejarEnvio}>
        <input 
        type='text' 
        className="task-input" 
        placeholder='Ingrese La Tarea' 
        name="task" 
        onChange={manejarCambio}
        required/>
        <button>Agregar</button>
    </form>
    );
}

export default FormTask;