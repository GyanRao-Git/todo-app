import { useState } from "react";
const DateAndTime=()=>{

  const [now, setNow] = useState([]);

  const handleNow = () => {
    const now = new Date();
    const currDate = now.toLocaleDateString();
    const currTime = now.toLocaleTimeString();
    setNow([currDate, currTime]);
  };

  setInterval(handleNow, 1000);

  return (
    <div>
      <h3 className="font-medium text-l m-0.5">
        {now[0]}-{now[1]}
      </h3>
    </div>
  );
}

export default DateAndTime;