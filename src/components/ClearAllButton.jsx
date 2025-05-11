const ClearAllButton=({setTask})=>{

  const handleClearAll = () => {
    setTask([]);
  };

  return (
    <button
      className="rounded bg-purple-300 w-[80px] mx-2"
      onClick={handleClearAll}
    >
      Clear all
    </button>
  );
}

export default ClearAllButton