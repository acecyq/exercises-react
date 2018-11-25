import React, { Component } from 'react';

import { Header, Footer } from './Components/Layout';
import Exercises from './Components/Exercises';
import { muscles, exercises } from './Store';

muscles.unshift('All');

export default class extends Component {
  state = {
    exercises: exercises,
    value: 0,
    title: '',
    description: ''
  }

  setFooterTab = (event, value) => {
    this.setState({ value });
  }
  
  selectExercise = (title, description) => event => {
    this.setState({
      title,
      description
    });
  }

  render() {
    const {
      exercises,
      value,
      title,
      description
    } = this.state;
    let listData = {};
    for (let exercise of exercises) {
      listData = listData[exercise.muscles]
        ? {
          ...listData,
          [exercise.muscles]: [...listData[exercise.muscles], exercise]
        }
        : {
          ...listData,
          [exercise.muscles]: [exercise]     
        }
    }

    return (
      <div className="App">
        <Header />
        <Exercises 
          exercises={listData} 
          category={muscles[value]}
          onClick={this.selectExercise}
          title={title}
          description={description}
        />
        <Footer 
          muscles={muscles} 
          value={value} 
          onChange={this.setFooterTab}
        />
      </div>
    );
  }
}
