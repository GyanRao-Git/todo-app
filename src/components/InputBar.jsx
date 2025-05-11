const InputBar=({inputValue,setInputValue})=>{
  const handleInputChange = (value) => {
    setInputValue({id:value,content:value,isChecked:false});
  };
  return(
    <input
      type="text"
      name="currTodo"
      autoComplete="off"
      value={inputValue.content}
      onChange={(event) => handleInputChange(event.target.value)}
      className="border-3 rounded-xl mb-2 px-3 font-medium"
    />
  );
}

export default InputBar;

