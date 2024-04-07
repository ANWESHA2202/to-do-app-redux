//react import
import { Component } from "react";
//ui helpers import from lib
import { Button, Drawer, Typography } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
//utility functions import
import { availableTabs } from "../components/utils";
//ui components import
import AddTask from "./AddTask";
import TabContent from "../components/TabContent";

class ManageTasks extends Component {
  //constructor initializations
  constructor(props) {
    super(props);
    //defining states
    this.state = {
      activeTab: "All",
      isDrawerOpen: false,
    };

    //binding handler functions with class instance
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  //handler functions
  handleDrawerToggle() {
    this.setState((prevState) => ({ isDrawerOpen: !prevState.isDrawerOpen }));
  }
  handleTabClick(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    //access state
    const { activeTab } = this.state;

    return (
      <div className="manageTasksContainer">
        <div className="manageTasksContent">
          <div className="titleSection">
            {window?.innerWidth < 500 ? (
              <div onClick={this.handleDrawerToggle}>
                <MenuOpenIcon />
              </div>
            ) : null}
            <Typography variant="h5" color={"dark"}>
              To do tasks
            </Typography>
          </div>
          <div className="tabsSection">
            {availableTabs?.map((tab, idx) => (
              <Button
                key={idx}
                className={`tabButton ${
                  tab !== activeTab ? "inActiveTabButton" : ""
                }`}
                onClick={() => this.handleTabClick(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
          <div className="activeTabContainer">
            {availableTabs?.map((tab) => (
              <TabContent tab={tab} activeTab={activeTab} />
            ))}
          </div>
        </div>

        {/* drawer for mobile ui */}
        <Drawer
          open={this.state.isDrawerOpen}
          anchor="left"
          onClose={this.handleDrawerToggle}
        >
          <AddTask />
        </Drawer>
      </div>
    );
  }
}

export default ManageTasks;
