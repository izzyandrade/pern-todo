import React, { Fragment, useState } from "react";
import axios from "axios";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const saveTodo = async (e) => {
    e.preventDefault();
    console.log("cheogu aqui");
    await axios
      .put(`http://localhost:5000/todos/${todo.todo_id}`, {
        description: description,
      })
      .then((r) => {
        console.log(r.data);
        window.location.href = "/";
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Editar
      </button>

      <div
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => saveTodo(e)}
              >
                Salvar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
