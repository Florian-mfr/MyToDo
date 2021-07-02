import React from 'react';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
import NavBar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import taskList from '../TaskList';

class App extends React.Component {

  state = {
    tasks: taskList
  };

  toggleCompleted = (taskName) => {
    const task = this.state.tasks.find(task => task.name === taskName)
    task.completed = !task.completed
    this.setState(task)
  };

  handleAdd = (name) => {
    const todo = {name, completed: false}
    this.state.tasks.push(todo)
    this.setState(this.state.tasks)
  };

  deleteTask = () => {
    const newTasksList = this.state.tasks.filter(task => task.completed === false);
    this.setState(this.state.tasks = [...newTasksList])

  }

  render() {
    return (
      <section id="todo">
        <BrowserRouter>
          <NavBar deleteTask={this.deleteTask} />
          <Switch>
            <Route path="/" exact render={() => <ToDoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} /> } />
            <Route path="/add-task" render={() => <AddTask handleAdd={this.handleAdd} />}  />
            <Route />
          </Switch>
        </BrowserRouter>
      </section>
    )
  }
}

export default App;