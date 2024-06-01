import React from "react";
import { useState } from "react";
import Option from "./Option";
const TaskListItem = ({ task }) => {
  const [isHovered, setIsHovered] = useState(false);
  const variant = task.state === "finished" ? "bg-[#00FFAB]" : "bg-[#CD32C8]";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`mt-8  transition-all duration-500 ease-in-out`}
    >
      <div className="-mb-[25px]">
        <span
          className={`${variant} -mt-[10px] ml-5 p-[2px] absolute rounded-xl ${
            isHovered ? "w-max" : "w-[30px] h-[30px] rounded-[25px]"
          }`}
        >
          {isHovered && task.state}
        </span>
        <div className="flex justify-end mr-5">
          <Option {...task} />
        </div>
      </div>
      <div className="bg-[#2B2C30] w-[42.75vw] h-max p-5 text-white  rounded-[15px]">
        {task.content}
      </div>
    </div>
  );
};

export default TaskListItem;
