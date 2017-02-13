import React, { Component } from 'react';
import './App.css';
import StudentList from './containers/student_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentList />
      </div>
    );
  }
}

export default App;
