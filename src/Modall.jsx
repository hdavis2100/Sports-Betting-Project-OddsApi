import './Modall.css'
import maho from './assets/maho.webp'
import cash from './assets/cash.jpg'
import purdy from './assets/purdy.jpeg'
import dana from './assets/dana.jpg'
function Modal({ title, fullStory, image, onClose }) {
    return (
      <div className="modal">
        <div className="modalcontent">
          <button className="closebutton" onClick={onClose}>
            &times;
          </button>
          <div className="image">
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{fullStory}</p>
        </div>
      </div>
    )
  }
  
  export default Modal