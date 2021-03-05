import { BrowserRouter, Route } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store"; //store -> index de reducer -> state del Reducer

import Login from "./components/layouts/Login";
import BusesOperation from "./components/layouts/BusesOperation";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route exact path="/" component={Login} />
        <Route exact path="/buses" component={BusesOperation} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;