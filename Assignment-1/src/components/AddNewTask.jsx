// import { useState } from "react";
import style from "./AddNewTask.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/TaskSlice.js";

const AddNewTask = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [team, setTeam] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState(null);
  const [status, setStatus] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      title,
      description,
      team,
      assignee,
      priority,
      status,
      startDate,
      endDate,
    };
    dispatch(addTask(task));
    resetForm();
    setShowForm(false);
  };

  const handleReset = () => {
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setTeam("");
    setAssignee("");
    setPriority(null);
    setStatus(null);
    setStartDate("");
    setEndDate("");
  };

  return (
    <>
      {showForm && (
        <div
          className="absolute top-2 left-1/3 right-1/3 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50"
          style={{ width: "400px", height: "670px" }}
        >
          <form
            className="bg-white p-2 rounded shadow-md"
            onSubmit={handleSubmit}
            onReset={handleReset}
            style={{ width: "300px", height: "600px" }}
          >
            <h3 className="text-2px  font-bold">Add New Task</h3>
            <div className="mb-1">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
            </div>
            <input
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />

            <div className="mb-1">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
            </div>
            <textarea
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            ></textarea>

            <div className="mb-1">
              <label
                htmlFor="team"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Team
              </label>
            </div>
            <input
              id="team"
              type="text"
              placeholder="Team"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />

            <div className="mb-1">
              <label
                htmlFor="assignee"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Assignee
              </label>
            </div>
            <input
              id="assignee"
              type="text"
              placeholder="Assignee"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400 mb-1"
              value={priority ?? ""}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Select Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
            <div className="mb-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status:
              </label>
            </div>
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              value={status ?? ""}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="in-progress">In Progress</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="deployed">Deployed</option>
              <option value="deferred">Deferred</option>
            </select>

            <div className="mb-1">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="flex justify-center ">
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 mt-1"
                style={{ width: "80px", height: "30px" }}
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md mt-1"
                style={{ width: "80px", height: "30px" }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddNewTask;
