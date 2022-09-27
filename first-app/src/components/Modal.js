function Modal(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  function cancleHandler() {
    props.onCancle();
  }

  return (
    <div className="modal">
      <p>Modal: Are you sure?</p>
      <button className="btn btn-alt" onClick={cancleHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
