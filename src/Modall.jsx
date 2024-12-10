import './Modall.css'
function Modal({ content, onClose }) {
    return (
      <div className="modal">
        <div className="modalcontent">
          <button className="closebutton" onClick={onClose}>
            &times;
          </button>
          <div className="image">
          <img src={content.image} alt={content.title} />
          </div>
          <h3>{content.title}</h3>
          <p>{content.fullStory}</p>
        </div>
      </div>
    )
  }
  
  export default Modal