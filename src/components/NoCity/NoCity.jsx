function NoCity({ onClose }) {
  return (
    <>
      <div id="modal-screen">
        <div id="modalcontent">
          <div id="danger-icon">
            <p className="exclamition">!</p>
          </div>
          <p id="modal-title">Not Found!</p>
          <p id="modal-caption">Sorry, selected city not found!</p>

          <div id="modal-footer">
            <button type="button" id="close-btn" onClick={onClose}>
              ok!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NoCity;
