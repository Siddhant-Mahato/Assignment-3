// TaskStatus.js
import style from "./TaskStatus.module.css";
import PendingList from "./PendingList";
import InProgressList from "./InProgressList";
import CompletedList from "./CompletedList";
import DeployedList from "./DeployedList";
import DefferedList from "./DefferedList";

const TaskStatus = () => {
  return (
    <div className={style.task}>
      <PendingList />
      <InProgressList />
      <CompletedList />
      <DeployedList />
      <DefferedList />
    </div>
  );
};

export default TaskStatus;
