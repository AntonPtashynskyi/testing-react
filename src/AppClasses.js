// import Counter from "components/Lessons-2/Counter/Counter";
// import Dropdown from "components/Lessons-2/Dropdown/Dropdown";

// import ColorPicker from "components/lessons-1/ColorPicker";
// import ColorPickerOptions from "components/lessons-1/ColorPicker/ColorPickerOptions";

import ToDoList from "components/Lessons-2/ToDoList";
import { Component } from "react/cjs/react.production.min";

// const AppClasses = () => (
//   <>
//     {/* <Dropdown /> */}
//     {/* <ColorPicker options={ColorPickerOptions} /> */}
//     <ToDoList />
//   </>
// );

class AppClasses extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Learn React", completed: true },
      { id: "id-2", text: "Todo React Routex", completed: false },
      { id: "id-3", text: "Learn Redux", completed: false },
      { id: "id-4", text: "Stay alive :) ", completed: false },
    ],
  };

  deleteToDo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedToDo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <div>
          <p>All quantity to do:{todos.length}</p>
          <p>To Do already DONE: {completedToDo}</p>
        </div>
        {/* <Dropdown /> */}
        {/* <ColorPicker options={ColorPickerOptions} /> */}
        <ToDoList todos={todos} onDeleteTodo={this.deleteToDo} />
      </>
    );
  }
}

export default AppClasses;
