import React from 'react';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
import NavBar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <section id="todo">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact component={ToDoList} />
            <Route path="/add-task" component={AddTask} />
            <Route />
          </Switch>
        </BrowserRouter>
      </section>
    )
  }
}

export default App;