import React, { Component } from 'react';
import MealForm from './mealForm';

class MealList extends Component {
    state = {
        meal : this.mealFunction(),
        currentIndex: -1,
    }

    mealFunction(){
        if (localStorage.getItem('mealPlan') == null)
            localStorage.setItem('mealPlan', JSON.stringify([]));
            return JSON.parse(localStorage.getItem ('mealPlan'))
    }

    addEditDelete = (data) =>{
        let meal = this.mealFunction();
        if(this.state.currentIndex == -1)//nothing there, add data
        meal.push(data)
            else meal[this.state.currentIndex] = data//the current data remains the same
            localStorage.setItem('mealPlan', JSON.stringify(meal))
            this.setState({
                meal: meal, 
                currentIndex: -1
            })
    }

  render(){
  return (
      <div>
           <h1>MealList</h1>
        <MealForm addEditDelete={this.addEditDelete}/>

        <hr />
    
      </div>
     
  );
}
}

export default MealList;