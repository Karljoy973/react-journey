const Modal = ({ isOpen, rating, stars, handleQuit }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <h2>ThankYou !</h2>{" "}
          <p>
            You rated this experience {rating} / {stars.length}
            {"\u2605"}{" "}
          </p>
          <button className="close-button" onClick={() => handleQuit()}>
            Quit
          </button>
        </div>
      </div>
    </>
  );
};

type ModalProps = {
  rating: number;
  stars: number[];
  handleQuit: Function;
  isOpen: boolean;
};

export default Modal;
