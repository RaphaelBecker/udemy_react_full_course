import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

// All compoonents in React are functions
function Todo(props) {
  // register states which should be supported in our component
  // This is a react Hook
  // A state always return a value with two elements, the first is always the current app snapshot
  const [modalIsOpen, setModaISOpen] = useState(false);

  function deleteHandler() {
    setModaISOpen(true);
  }

  function closeModalHandler() {
    setModaISOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancle={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {modalIsOpen ? <Backdrop onCancle={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
