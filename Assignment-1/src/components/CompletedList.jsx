import React, { useState } from "react";
import style from "./CompletedList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskStatus } from "../store/TaskSlice";

const CompletedList = () => {
  const dispatch = useDispatch();
  const completedTasks = useSelector((state) =>
    state.tasks.filteredTasks.filter(
      (task) => task.status === "completed" && !task.isHidden
    )
  );

  const [editableTask, setEditableTask] = useState(null);
  const [editedStatus, setEditedStatus] = useState("");
  const [editedPriority, setEditedPriority] = useState("");

  const handleStatusChange = (taskId, status) => {
    dispatch(updateTaskStatus({ id: taskId, status }));
  };

  const handleEdit = (task) => {
    setEditableTask(task.id);
    setEditedStatus(task.status);
    setEditedPriority(task.priority);
  };

  const handleSave = () => {
    dispatch(updateTaskStatus({ id: editableTask, status: editedStatus }));
    // Update priority logic here
    setEditableTask(null);
    setEditedStatus("");
    setEditedPriority("");
  };

  const handleCancel = () => {
    setEditableTask(null);
    setEditedStatus("");
    setEditedPriority("");
  };

  const isEditable = (taskId) => {
    return taskId === editableTask;
  };

  return (
    <div className={style.com}>
      <div
        className={`${style.head} py-2 px-4 text-white font-semibold rounded-t-lg`}
      >
        Completed
      </div>
      <div className={`${style.completedList} overflow-y-auto mt-2`}>
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white rounded p-1 shadow-md flex justify-between mb-2 ${style.card}`}
          >
            <div className={`${style.part1} mb-2`}>
              <h3 className={`font-semibold ml-2`}>{task.title}</h3>
              <p className="text-white bg-blue-500 px-2 ">{task.priority}</p>
            </div>

            <hr />

            <div>
              <p
                className={`text-gray-600 ml-2 ${
                  isEditable(task.id) ? "hidden" : ""
                }`}
              >
                {task.description}
              </p>
              <input
                type="text"
                className={`border rounded-md px-2 py-1 w-full focus:outline-none focus:ring focus:ring-blue-400 ${
                  isEditable(task.id) ? "" : "hidden"
                }`}
                value={task.description}
                onChange={(e) => {
                  /* Implement logic to update task description */
                }}
              />
            </div>

            <div>
              <p
                className={`text-gray-600 ml-2 ${
                  isEditable(task.id) ? "hidden" : ""
                }`}
              >
                @{task.assignee}
              </p>
              <input
                type="text"
                className={`border rounded-md px-2 py-1 w-full focus:outline-none focus:ring focus:ring-blue-400 ${
                  isEditable(task.id) ? "" : "hidden"
                }`}
                value={task.assignee}
                onChange={(e) => {
                  /* Implement logic to update task assignee */
                }}
              />
            </div>

            <div className={`${style.btn} ml-2`}>
              {isEditable(task.id) ? (
                <>
                  <select
                    value={editedStatus}
                    onChange={(e) => setEditedStatus(e.target.value)}
                  >
                    <option value="in-progress">In Progress</option>
                    <option value="deferred">Deferred</option>
                    <option value="assign">Assign</option>
                    <option value="completed">Completed</option>
                    <option value="deployed">Deployed</option>
                    <option value="deferred">Deferred</option>
                  </select>
                  <select
                    value={editedPriority}
                    onChange={(e) => setEditedPriority(e.target.value)}
                  >
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                  </select>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleStatusChange(task.id, "in-progress")}
                    className="bg-blue-500 text-white px-1  rounded-md mr-2"
                  >
                    {task.status}
                  </button>
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-blue-500 text-white px-1 rounded-md"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedList;


