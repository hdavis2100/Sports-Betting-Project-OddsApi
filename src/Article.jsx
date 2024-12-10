function Article({ title, content, image }) {
    return (
      <div className="article">
        <img src={image} alt={title} className="articleimage" />
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    )
  }
  
  export default Article