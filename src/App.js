import "./App.css";
import Router from "./router/Router";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
