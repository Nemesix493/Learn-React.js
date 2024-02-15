import { useState } from "react";
import AddTask from "./addTask";
import Task from "./task";

const useTaskList = (taskListDefault) => {
    const [taskList, setTaskList] = useState(
        taskListDefault !== undefined ?
        taskListDefault :
        []
    );
    const pushTaskList = (task) => {
        setTaskList(taskList.concat([{...task, 'id': taskList.length, 'isSelected': false}]));
    };
    const updateTask = (task) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[task.id] = task;
        setTaskList(updatedTaskList);
    };
    const removeTask = (taskId) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(taskId, taskId+1);
        for(let i=0; i< updatedTaskList.length; i++){
            updatedTaskList[i] = {
                ...updatedTaskList[i],
                "id": i
            };
        }
        setTaskList(updatedTaskList);
    };
    const selectTask = (taskId) => {
        setTaskList(
            taskList.map(
                (task) => {
                    return (
                        (task.id !== taskId) ?
                        {...task, 'isSelected': false} :
                        {...task, 'isSelected': !task.isSelected}
                    ) 
                }
            )
        )
    };
    return {
        taskList,
        pushTaskList,
        updateTask,
        removeTask,
        selectTask
    };
};


function Todo(){
    const {taskList, pushTaskList, selectTask, removeTask, updateTask} = useTaskList([]);
    return (
        <div className="px-4 py-5 border-b rounded-t sm:px-6">
            <div className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {taskList.map((task) => {return <Task key={task.id} task={task} selectTask={selectTask} deleteTask={removeTask} updateTask={updateTask}/>})}
                    <AddTask pushTask={pushTaskList}/>
                </ul>
            </div>
        </div>
    );
}

export default Todo;