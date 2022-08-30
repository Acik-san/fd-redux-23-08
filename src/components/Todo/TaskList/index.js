import React from "react";
import { connect } from "react-redux";
import Task from "../Task";

const TaskList = (props) => {
  const { tasks } = props;
  const mapTasks = (task) => <Task key={task.id} task={task} />;
  return (
    <div>
      <h2>Tasks list: </h2>
      <ul>{tasks.map(mapTasks)}</ul>
    </div>
  );
};

const mapStateToProps = ({ todo }) => todo;

export default connect(mapStateToProps)(TaskList);
