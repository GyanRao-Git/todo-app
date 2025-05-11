  import { CircleCheckBig,Trash2 } from "lucide-react";

  const TaskLists = ({ task, setTask }) => {
    const handleDeleteTask = (taskToDelete) => {
      const updatedTaskArray = task.filter(
        (eachTask) => eachTask.id != taskToDelete.id
      );
      setTask(updatedTaskArray);
    };

    const handleCheck = (checkTask) => {
      const updatedTaskArray=task.map((currTask)=>{
        if(currTask.content===checkTask.content){
          return {...checkTask, isChecked: !currTask.isChecked}
        }
        else{
          return currTask;
        }
      })
      setTask(updatedTaskArray);
    };

    return (
      <section>
        <ul>
          {task.map((eachTask) => {
            return (
              <div key={eachTask.id} className="flex m-2 p-1  rounded-xl">
                <li className={`w-[200px] ${eachTask.isChecked?'bg-green-300':'bg-pink-400'} rounded-2xl text-center font-medium `}>
                  {eachTask.content}
                </li>
                <button
                  onClick={() => handleCheck(eachTask)}
                  className="rounded-2xl mx-1 p-0.5 bg-purple-300"
                >
                  <CircleCheckBig />
                </button>
                <button
                  onClick={() => handleDeleteTask(eachTask)}
                  className="rounded-2xl mx-1 p-0.5 bg-purple-300"
                >
                  <Trash2 />
                </button>
              </div>
            );
          })}
        </ul>
      </section>
    );
  };

export default TaskLists;


