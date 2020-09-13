import React, { Fragment, useState } from "react";
import axios from "axios";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const body = { description };
    axios
      .post("http://localhost:5000/todos", { description: description })
      .then((r) => {
        console.log(r.data);
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Adicione um item a lista"
        />
        <button className="btn btn-success">Enviar</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
