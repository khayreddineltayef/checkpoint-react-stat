import React, { Component } from "react";

export default class HeadN extends Component {
  state = {
    newtext: "",
  };
  handleChange = (e) => {
    this.setState({ newtext: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.newtext.trim() === ""
      ? alert("please write a text")
      : this.props.add(this.state.newtext);
  };
  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Write something here..."
            value={this.state.newtext}
            onChange={this.handleChange}
            style={{
              borderStyle: "1px solid gray",
              height: "50px",
              borderRadius: "5px",
              backgroundColor: "white",
              width: "82%",
            }}
          />

          <button
            type="submit"
            style={{ borderRadius: "5px", height: "50px", width: "80px" }}
          >
            Add Note
          </button>
        </form>
      </div>
    );
  }
}
