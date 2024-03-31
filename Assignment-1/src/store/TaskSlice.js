import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    assigneeName: "",
    startDate: null,
    endDate: null,
    priority: "",
    filteredTasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);

      if (state.assigneeName) {
        if (state.assigneeName === action.payload.assignee) {
          state.filteredTasks.push(action.payload);
        }
      } else if (state.startDate && state.endDate) {
        const taskStartDate = new Date(action.payload.startDate);
        const taskEndDate = new Date(action.payload.endDate);
        const filterStartDate = new Date(state.startDate);
        const filterEndDate = new Date(state.endDate);

        if (taskStartDate >= filterStartDate && taskEndDate <= filterEndDate) {
          state.filteredTasks.push(action.payload);
        }
      } else {
        state.filteredTasks.push(action.payload);
      }
    },

    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.status = status;
      }
    },

    filterTasksByAssignee: (state, action) => {
      const assigneeName = action.payload;
      return {
        ...state,
        assigneeName: assigneeName,
        filteredTasks: assigneeName
          ? state.tasks.filter((task) => task.assignee === assigneeName)
          : state.tasks,
      };
    },

    filterTasksByDateRange: (state, action) => {
      const { startDate, endDate } = action.payload;
      const filteredTasks =
        startDate && endDate
          ? state.tasks.filter((task) => {
              const taskStartDate = new Date(task.startDate);
              const taskEndDate = new Date(task.endDate);
              const filterStartDate = new Date(startDate);
              const filterEndDate = new Date(endDate);
              return (
                taskStartDate >= filterStartDate && taskEndDate <= filterEndDate
              );
            })
          : state.tasks;

      return {
        ...state,
        startDate: startDate,
        endDate: endDate,
        filteredTasks: filteredTasks.length > 0 ? filteredTasks : [],
      };
    },

    filterTasksByPriority: (state, action) => {
      const priority = action.payload;
      return {
        ...state,
        priority: priority,
        filteredTasks: priority
          ? state.tasks.filter((task) => task.priority === priority)
          : state.tasks,
      };
    },
  },
});

export const {
  addTask,
  updateTaskStatus,
  filterTasksByAssignee,
  filterTasksByDateRange,
  filterTasksByPriority,
} = taskSlice.actions;
export default taskSlice.reducer;
