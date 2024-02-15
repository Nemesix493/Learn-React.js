import { useState } from "react";

function TaskForm({task, pushTask}){
    const isTask = !(task === undefined || task === null);
    const getCurrentTaskDefault = () => {
        return (
            isTask ?
            task :
            {
                "name": null,
                "details": null
            }
        );
    };
    const [currentTask, setCurrentTask] = useState(
        getCurrentTaskDefault()
    );
    const updateCurrentTaskProp = (propName, propValue) => {
        const updatedCurrentTask = {...currentTask};
        updatedCurrentTask[propName] = propValue;
        setCurrentTask(updatedCurrentTask);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        pushTask(currentTask);
        setCurrentTask(getCurrentTaskDefault());
    };
    return (
        <form className="px-4 py-4 sm:px-6 w-full flex items-center justify-around flex-col" onSubmit={submitHandler}>
                <input 
                    type="text"
                    className="rounded-lg px-2 py-2 w-1/4"
                    placeholder={(currentTask.name === null) ? "New Task !" : null}
                    value={!(currentTask.name === null) ? currentTask.name : ""}
                    onChange={(e) => {updateCurrentTaskProp("name", e.target.value)}}
                />
                <textarea
                    className="rounded-lg px-2 py-2 w-1/4 mt-4"
                    placeholder={(currentTask.details === null) ? "New Task !" : null}
                    value={!(currentTask.details === null) ? currentTask.details : ""}
                    onChange={(e) => {updateCurrentTaskProp("details", e.target.value)}}
                />
                <input
                    type="submit"
                    value={"Submit"}
                    className="py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    disabled={!(currentTask.details !== null && currentTask.name !== null)}
                />
        </form>
    );
}

export default TaskForm;