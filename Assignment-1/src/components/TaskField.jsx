import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./TaskField.module.css";
import TaskDropDown from "./TaskDropDown";
import AddNewTask from "./AddNewTask";
import {
  filterTasksByAssignee,
  filterTasksByDateRange,
  filterTasksByPriority, // Import the filterTasksByPriority action
} from "../store/TaskSlice";

const TaskField = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("");
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  const [assigneeName, setAssigneeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleAddNewTask = () => {
    setShowAddNewTask(!showAddNewTask);
  };

  const handleAssigneeChange = (e) => {
    const name = e.target.value;
    setAssigneeName(name);
    dispatch(filterTasksByAssignee(name));
  };

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
    dispatch(filterTasksByDateRange({ startDate: date, endDate }));
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setEndDate(date);
    dispatch(filterTasksByDateRange({ startDate, endDate: date }));
  };

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority);
    dispatch(filterTasksByPriority(priority)); // Dispatch action to filter tasks by priority
  };

  return (
    <div className={style.wrapper}>
      <div className={style.task}>
        <div className={style.right}>
          <h3>Filter By :</h3>
          <input
            className={style.in}
            placeholder="Assignee Name"
            value={assigneeName}
            onChange={handleAssigneeChange}
          />
        </div>

        <div className={style.in1}>
          <input
            className={style.in1}
            placeholder="Priority"
            readOnly
            value={selectedPriority}
            onClick={toggleDropdown}
          />
          <div className={style.down} onClick={toggleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={style.arrowIcon}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          {showDropdown && (
            <TaskDropDown
              setShowDropdown={setShowDropdown}
              setSelectedPriority={handlePriorityChange} // Pass handlePriorityChange function
            />
          )}
        </div>

        <div className={style.dateIn}>
          <input
            className={style.leftin}
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <input
            className={style.rightin}
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>

        <button className={style.btn} onClick={toggleAddNewTask}>
          Add New Task
        </button>
      </div>

      <div className={style.rightl}>
        <h3>Sort By :</h3>
        <input className={style.inl} placeholder="Priority" />
      </div>

      {showAddNewTask && <AddNewTask />}
    </div>
  );
};

export default TaskField;
