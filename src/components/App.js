import React from 'react';
import Navbar from './Navbar'
import ToDoList from './ToDoList';
import AddTask from './AddTask';


class App extends React.Component {
    render() {
      return (
        <section id="todo">
            <Navbar />
            <AddTask />
        </section>
      )
    }
  }

  export default App;