import { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ addTodo, todos }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = () => {
    if (todoText == "") {
      return;
    }

    const todo = todos.find((item) => item.text == todoText);
    if (todo) {
      alert("Already exist");
      return;
    }
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
};
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default AddTodo;
