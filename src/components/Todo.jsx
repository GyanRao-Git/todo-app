import { useState } from "react"
import DateAndTime from "./DateAndTime";
import AddTaskButton from "./AddTaskButton";
import ClearAllButton from "./ClearAllButton";
import InputBar from "./InputBar";
import TaskLists from "./TaskLists";

const localStorageString="reactTodo";

const Todo=()=>{
  const [inputValue, setInputValue] = useState({
    id: "",
    content: "",
    isChecked: false,
  }); 
  const [task, setTask] = useState(() => {
    const rawdata = localStorage.getItem(localStorageString);
    if (!rawdata) return [];
    return JSON.parse(rawdata);
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { id, content, isChecked } = inputValue;
    if (!content) return;

    const ifTodoObjectMatched = task.find(
      (currTask) => currTask.content === content
    );

    if (ifTodoObjectMatched) {
      setInputValue({ id: null, content: "", isChecked: false }); //{id,content,isChecked}
      return;
    }
    setTask((prevTask) => [...prevTask, { id, content, isChecked }]);
    setInputValue({ id: null, content: "", isChecked: false });
    return;
  };

  localStorage.setItem(localStorageString, JSON.stringify(task));

  return (
    <>
      <section className="m-5 flex items-center justify-start p-5 flex-col min-h-[400px] bg-purple-600 w-[400px] rounded-4xl border-5">
        <header>
          <h1 className="text-shadow-black font-bold text-4xl">Todo List</h1>
        </header>
        <section>
          <div className="timeInputADDButton flex flex-col justify-center items-center">
            <DateAndTime />
            <form action="">
              <div className="flex flex-col justify-center items-center m-2">
                <InputBar
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
                <div className="flex">
                  <AddTaskButton handleFormSubmit={handleFormSubmit} />
                  <ClearAllButton setTask={setTask} />
                </div>
              </div>
            </form>
          </div>
          <TaskLists
            task={task}
            setTask={setTask}
            setInputValue={setInputValue}
          />
        </section>
      </section>
    </>
  );
}

export default Todo
