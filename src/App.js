import React, { Component } from "react";
import "./App.css";
import HeadN from "./components/headN/HeadN";
import TaskList from "./components/taskList/TaskList";
export default class App extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        task: "whatever1",
        isDone: true,
      },
      {
        id: Math.random(),
        task: ",nxc<!lvcq%MXLSMC.DMCX§. ?SDMXW?C.§/.SD%L?Cdklùnc;,qdùXC?skvc,;",
        isDone: true,
      },
      {
        id: Math.random(),
        task: "whatever3",
        isDone: true,
      },
    ],
  };
  handleDelete = (TaskID) => {
    this.setState({ tasks: this.state.tasks.filter((el) => el.id !== TaskID) });
  };
  handleComplete = (TaskID) => {
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === TaskID ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };
  handleAdd = (Input) => {
    const newTask = { id: Math.random(), task: Input, isDone: false };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  render() {
    return (
      <div className="App">
        <div
          style={{
            border: "2px solid black",
            width: "500px",
            marginLeft: "550px",
            marginTop: "20px",
          }}
        >
          <HeadN add={this.handleAdd} />
          <TaskList
            tab={this.state.tasks}
            del={this.handleDelete}
            comp={this.handleComplete}
          />
        </div>
      </div>
    );
  }
}
