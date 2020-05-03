import React, { Component } from 'react';
import './App.css';
import MealForm from './resource/mealForm';

class MealList extends Component {

  render(){
  return (
      <div>
           <h1>MealList</h1>
        <MealForm />
      </div>
     
  );
}
}

export default MealList;