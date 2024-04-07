//hooks import
import { connect, useDispatch } from "react-redux";
//redux import
import { modifyTasks } from "../src/app/redux/slices/todoSlice";
//ui helpers from lib
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
//utility functions
import { findDataForTab, noDataMessage } from "./utils";

const TabContent = ({ activeTab, tab, tasks }) => {
  //hook instances
  const dispatch = useDispatch();

  //action handler function
  const handleTaskStatus = (e) => {
    let taskIndex = tasks?.findIndex(
      (task) => task?.createdAt == e.target.name
    );
    if (taskIndex !== -1) {
      let taskToModify = { ...tasks[taskIndex] };
      taskToModify.status = taskToModify?.status === "done" ? "todo" : "done";
      let modifiedTasks = structuredClone(tasks);
      modifiedTasks[taskIndex] = taskToModify;
      dispatch(modifyTasks(modifiedTasks));
    }
  };

  //ui renderer function
  const renderContent = () => {
    let data = findDataForTab(tasks, tab, activeTab);

    if (!data.length && tab === activeTab) {
      return <div className="noDataTab">{noDataMessage[activeTab]}</div>;
    }
    return data?.map((task) => (
      <Accordion key={task?.createdAt}>
        <AccordionSummary
          expandIcon={<ExpandMore color="dark" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div
            className="taskTitle"
            style={
              task?.status === "done"
                ? { color: "gray", textDecoration: "line-through" }
                : {}
            }
          >
            <input
              type="checkbox"
              name={task?.createdAt || ""}
              checked={task?.status === "done"}
              id={task?.title || ""}
              onChange={(e) => handleTaskStatus(e)}
            />
            <span>{task?.title} </span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          style={task?.status === "done" ? { color: "gray" } : {}}
        >
          {task?.description}
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <div
      className="tabContent"
      style={{
        width: activeTab === tab ? "100%" : 0,
      }}
    >
      {renderContent()}
    </div>
  );
};

export default connect(({ todo }) => ({ tasks: todo.tasks }))(TabContent);
