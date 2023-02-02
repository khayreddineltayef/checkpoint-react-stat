import React from "react";
import { TaskCard } from "../taskCard/TaskCard";

const TaskList = ({ tab, del, comp }) => {
  return (
    <div>
      {tab.map((el) => (
        <TaskCard key={el.id} el={el} del={del} comp={comp} />
      ))}
    </div>
  );
};

export default TaskList;
