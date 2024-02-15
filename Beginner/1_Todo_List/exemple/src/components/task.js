import { useState } from "react";
import Button from "./button";
import TaskForm from "./taskForm";

function Task({task, selectTask, deleteTask, updateTask}){
    const [isEditionMode, setIsEditionMode] = useState(false);
    const handleSelected = (e) => {
        e.preventDefault();
        e.stopPropagation();
        selectTask(task.id);
    };
    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteTask(task.id);
    };
    const handleEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsEditionMode(true);
    };
    const handleSubmit = (submitedTask) => {
        updateTask(submitedTask);
        setIsEditionMode(false);
    }
    return (
        isEditionMode ?
        <TaskForm task={task} pushTask={handleSubmit}/> :
        <li className="block hover:bg-gray-50 dark:hover:bg-gray-900" onClick={handleSelected}>
            <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                    <p className="text-gray-700 text-md dark:text-white md:truncate">
                        {task.name}
                    </p>
                </div>
                <div className="mt-2 flex justify-between">
                    <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                        {task.details}
                    </p>
                </div>
                {
                    task.isSelected &&
                    <div className="mt-2 flex justify-around">
                        <Button onClick={handleEdit}>Change</Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    </div>
                }
            </div>
        </li>
    );
}

export default Task;