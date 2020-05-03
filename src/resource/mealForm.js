import React, { Component } from 'react';


class MealForm extends Component {

     /* state = {
                weeklyMeal: '',
                breakfast: '',
                lunch: '',
                dinner: ''
    }   */

state = {
        ... this.mealFormFunction()
}

mealFormFunction(){
        if(this.props.currentIndex == -1)
            return{
                weeklyMeal: '',
                breakfast: '',
                lunch: '',
                dinner: ''
        } 
        else return this.props.meal[this.props.currentIndex];
    } 

    componentDidUpdate (prevProps){
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.meal.length != this.props.meal.length)
        this.setState({
            ... this.mealFormFunction()
        })
    }  
 
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addEditDelete(this.state)
    }


  render(){
  return (
    <form onSubmit={this.handleSubmit}>
           <input name="weeklyMeal" placeholder="Weekly meal plan" value={this.state.weeklyMeal}
           onChange={this.handleChange} />

            <input name="breakfast" placeholder="Breakfast" value={this.state.breakfast}
           onChange={this.handleChange} />

            <input name="lunch" placeholder="lunch" value={this.state.lunch}
           onChange={this.handleChange} />

            <input name="dinner" placeholder="dinner" value={this.state.dinner}
           onChange={this.handleChange} />

           <button type="submit">Submit</button>

          {/*  <a class="btn-floating btn-large waves-effect waves-light red"> <i class="fa fa-plus-circle" aria-hidden="true"></i> </a> */}
    </form>
  )
}
}

export default MealForm;