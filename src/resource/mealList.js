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
        if(this.state.currentIndex === -1)//nothing there, add data
        meal.push(data)
            else meal[this.state.currentIndex] = data//the current data remains the same
            localStorage.setItem('mealPlan', JSON.stringify(meal))
            this.setState({
                meal: meal, 
                currentIndex: -1
            })
    }

    editItem = (a) =>{
        this.setState({
            currentIndex: a
        })
    }

    deleteItem = (a) =>{
        let meal = this.mealFunction()
        meal.splice(a, 1)
        {localStorage.setItem('mealPlan', JSON.stringify(meal))
        this.setState({
            meal: meal,
            currentIndex: -1
        })
    }
}

  render(){
  return (
      <div>
           <h1>Weekly Meal List</h1>
           <hr />
        <MealForm addEditDelete={this.addEditDelete} 
            meal={this.state.meal}
            currentIndex={this.state.currentIndex}
        />

        

        {/* map & to table added */}
        <table id="table">
            <tbody>
                {this.state.meal.map((myItems, a)=>{
                    return(
                    <tr key={a} id="tr">
                        <td id="td1">{myItems.weeklyMeal}</td>
                         <td id="td">{myItems.breakfast}</td>
                        <td id="td">{myItems.lunch}</td>
                        <td id="td">{myItems.dinner}</td>
                        <td><button id="edit" onClick={()=>this.editItem(a)}>Edit</button>
                        <button id="delete" onClick={()=>this.deleteItem(a)}>Delete</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    
      </div>
     
  );
}
}

export default MealList;