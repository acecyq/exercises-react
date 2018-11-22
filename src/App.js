import React, { Component } from 'react';

import { Header, Footer } from './Components/Layout';
import Exercises from './Components/Exercises';
import { muscles, exercises } from './Store';

export default class extends Component {
  state = {
    exercises: exercises
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
    return (
      <div className="App">
        <Header />
        <Exercises exercises={listData} />
        <Footer muscles={muscles} />
      </div>
    );
  }
}
