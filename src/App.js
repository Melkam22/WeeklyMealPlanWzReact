import React, { Component } from 'react';
import './App.css';
import MealList from './resource/mealList';
 

class App extends Component {

  render(){
  return (
    <div className="App">
     <h1>Weekly Meal Plan with React</h1>
      <MealList />
    </div>
  );
}
}

export default App;
