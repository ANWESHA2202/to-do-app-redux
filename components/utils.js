//utils sorted in alphabetical order
export const availableTabs = ["All", "Done", "To Do"];

export const isTaskExisting = (tasks, title) => {
  let isExisting = false;
  isExisting = tasks?.find(
    (task) =>
      task?.title?.toLowerCase() === title?.toLowerCase() &&
      task?.status === "todo"
  );
  return isExisting;
};

export const findDataForTab = (tasks = [], tab = "", activeTab = "") => {
  if (!tasks?.length || tab !== activeTab || !tab.length || !activeTab.length)
    return [];

  if (tasks?.length) {
    let tabData = [];
    let activeStatus = statusEnum[activeTab];
    if (!activeStatus.length) {
      tabData = tasks;
    } else {
      tabData = tasks?.filter((task) => task?.status === activeStatus);
    }
    if (tabData.length) {
      tabData = sortTasks(tabData);
    }
    return tabData;
  }

  return [];
};

export const noDataMessage = {
  All: "Add a task first to manage.",
  Done: "Completed tasks will show up here.",
  "To Do": "Tasks yet to be completed will be shown here.",
};

function sortTasks(tasks) {
  const tasksCopy = [...tasks];
  return tasksCopy.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}

export const statusEnum = {
  All: "",
  Done: "done",
  "To Do": "todo",
};
