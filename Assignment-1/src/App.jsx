// App.js
import "./App.css";
import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskStatus from "./components/TaskStatus"; // Import TaskStatus after it's defined

function App() {
  return (
    <div className={`wrapper py-6 `}>
      <div className={`star py-10 px-4`}>
        <Header />
        <TaskField />
        <TaskStatus />
      </div>
    </div>
  );
}

export default App;
