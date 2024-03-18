import React from "react";
import "./style.css";
import Home from "../components/pages/Home";
import carDetails from "../components/pages/carDetails";
import {Link} from 'react-router-dom';
import CarList from "./CarList";

export default function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={CarList} />
          <Route path="/car/:name" component={carDetails} />

      </Switch>
    </Router>
    
  );
};

