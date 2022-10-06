import React from "react";
import '../css/Form.css';

function FormTask() {
    return (
    <form  className="form-task">
        <input type='text' className="task-input" placeholder='Ingrese La Tarea' name="task" required/>
        <button>Agregar</button>
    </form>
    );
}

export default FormTask;