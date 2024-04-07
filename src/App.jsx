//ui helpers from lib
import { ThemeProvider } from "@mui/material";
import theme from "../components/MuiTheme";
//ui component
import ToDoMain from "../modules/ToDoMain";
//redux helpers
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./app/redux/store";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToDoMain />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
