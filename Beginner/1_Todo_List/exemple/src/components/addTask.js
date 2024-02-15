import Button from "./button";
import {useState} from "react";
import TaskForm from "./taskForm";

function AddTask({pushTask}){
    const [isSelected, setIsSelected] = useState(false);
    const setSelectedButton = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSelected(true);
    }

    return (
        <li className="block flex justify-around px-4 py-4">
            {
                isSelected ?
                <TaskForm pushTask={pushTask}/> :
                <Button onClick={setSelectedButton}>Add Task !</Button>
            }
        </li>
        
    );
}

export default AddTask;