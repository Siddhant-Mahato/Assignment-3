import React from "react";
import style from "./TaskField.module.css"; // Import CSS file for styles

function TaskDropDown({ setShowDropdown, setSelectedPriority }) {
  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
    setShowDropdown(false); // Close the dropdown after selecting priority
  };

  return (
    <div
      className={`${style.dropdown} fixed left-1/3 right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `}
    >
      <div className="py-1" role="none">
        <div
          className={`${style.dropdownItem} text-gray-700 block px-4 py-2 text-sm`}
          onClick={() => handlePrioritySelect("PO")}
        >
          PO
        </div>
        <div
          className={`${style.dropdownItem} text-gray-700 block px-4 py-2 text-sm`}
          onClick={() => handlePrioritySelect("P1")}
        >
          P1
        </div>
        <div
          className={`${style.dropdownItem} text-gray-700 block px-4 py-2 text-sm`}
          onClick={() => handlePrioritySelect("P2")}
        >
          P2
        </div>
      </div>
    </div>
  );
}

export default TaskDropDown;
