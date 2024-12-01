import './App.css'

function App() {

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src="/logo2.png" alt="BETMO Logo" className="logo" />
          
        </div>
        <div className="nav">
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          
        </nav>
        <div id="action">
          <a href="#">Login</a>
          <a href="#" className="signup">Sign Up</a>
        </div>
        </div>
        
      </header>
    </>
  )
}


export default App
