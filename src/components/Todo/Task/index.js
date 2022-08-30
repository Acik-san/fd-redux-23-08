import React from "react";
import { connect } from "react-redux";
import { updateTask, deleteTask } from "../../../actions/actionsTodo";

const Task = (props) => {
  const {
    task: { id, body, isDone },
    updateTaskDispatch,
    deleteTaskDispatch,
  } = props;
  return (
    <li key={id}>
      <p style={{ color: isDone ? "teal" : "red" }}>{body}</p>
      <input
        type="checkbox"
        checked={isDone}
        onChange={({ target: { checked } }) =>
          updateTaskDispatch({ id, values: { isDone: checked } })
        }
      />
      <button onClick={() => deleteTaskDispatch(id)}>delete</button>
    </li>
  );
};
const mapDispatchToProps = (dispatch) => ({
  updateTaskDispatch: ({ id, values }) => dispatch(updateTask({ id, values })),
  deleteTaskDispatch: (id) => dispatch(deleteTask(id)),
});
export default connect(null, mapDispatchToProps)(Task);
