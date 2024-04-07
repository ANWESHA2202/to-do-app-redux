//style import
import "./toDoMain.scss";
//ui helpers import from lib
import useMediaQuery from "@mui/material/useMediaQuery";
//ui compoenets import
import AddTask from "./AddTask";
import ManageTasks from "./ManageTasks";

const ToDoMain = () => {
  //hook instances
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <section className="todoMain">
      {!matches ? <AddTask /> : null}
      <ManageTasks />
    </section>
  );
};

export default ToDoMain;
