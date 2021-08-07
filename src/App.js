import React from "react";
import NavBar from "./Components/UI/NavBar/NavBar";
import Footer from "./Components/UI/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./Components/Screens/SearchPage/SearchPage";
import Home from "./Components/Screens/Home/Home";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/rooms" component={SearchPage} />
        <Route path="/home" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
