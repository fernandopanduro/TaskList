import React, { useState } from "react";
import Task from "./Task";
import FormTask from "./Form";
import '../css/ListTask.css'

function ListTask() {

    const [tasks, setTasks] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.text.trim()) {
            tarea.text = tarea.text.trim();
            const tareasActualizadas = [tarea, ...tasks];
            setTasks(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas =  tasks.filter(tarea => tarea.id !== id);
        setTasks(tareasActualizadas)
    };

    const completarTarea = id => {
        const tareasActualizadas = tasks.map(task => {
            if (task.id  === id) {
                task.completado = !task.completado;
            }
            return task;
        });
        setTasks(tareasActualizadas);
    };

    return (
        <>
            <FormTask onSubmit={agregarTarea}/>
            <div className="ListTask-container">
                {
                    tasks.map( (task) =>
                        <Task 
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completado={task.completado} 
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}/>
                    )
                }
            </div>

        </>
    );
}

export default ListTask;