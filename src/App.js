import React, { Component } from 'react';

import { Header, Footer } from './Components/Layout';
import Exercises from './Components/Exercises';
import { muscles, exercises } from './Store';

muscles.unshift('All');

export default class extends Component {
  state = {
    exercises: exercises,
    value: 0
  }

  setFooterTab = (event, value) => {
    console.log(event);
    this.setState({ value });
  }

  render() {
    let listData = {};
    for (let exercise of this.state.exercises) {
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
    // console.log(listData);
    // console.log(muscles);
    return (
      <div className="App">
        <Header />
        <Exercises 
          exercises={listData} 
          category={muscles[this.state.value]}
        />
        <Footer 
          muscles={muscles} 
          value={this.state.value} 
          onChange={this.setFooterTab}
        />
      </div>
    );
  }
}
