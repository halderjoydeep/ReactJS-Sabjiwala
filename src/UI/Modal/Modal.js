import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal}></div>;
};

function Modal(props) {
  return (
    <>
      <Backdrop closeModal={props.closeModal} />
      {props.children}
    </>
  );
}

export default Modal;
