const AddTaskButton = ({ handleFormSubmit }) => {
  return (
    <button
      type="submit"
      onClick={(e)=>handleFormSubmit(e)}
      className="rounded bg-purple-300 w-[80px] mx-2"
    >
      Add task
    </button>
  );
};

export default AddTaskButton;