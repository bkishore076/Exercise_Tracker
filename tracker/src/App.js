import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <Route path="/" Exact component = {ExercisesList}/>
      <Route path="/edit/:id" Exact component = {EditExercise}/>
      <Route path="/create" Exact component = {CreateExercise}/>
      <Route path="/user" Exact component = {CreateUser}/>
    
    </div>
    </Router>
    
  );
}

export default App;
