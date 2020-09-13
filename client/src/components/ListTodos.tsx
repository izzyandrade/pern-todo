import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import EditTodo from "./EditTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    await axios
      .get("http://localhost:5000/todos")
      .then((r) => {
        setTodos(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTodo = async (todoID) => {
    await axios
      .delete(`http://localhost:5000/todos/${todoID}`)
      .then((r) => {
        console.log(r.data);
        setTodos(todos.filter((todo) => todo.todo_id !== todoID));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <table
      className="table mt-5"
      style={{ width: "100%", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListTodos;
