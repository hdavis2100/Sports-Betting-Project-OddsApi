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
      <main className="main">
        <section className="about">
          <h2><em>Bet Better!</em></h2>
              <div className="things">
                <p>The government finally told us we can play! <span className="join"> <em>Join</em></span> us and...
                </p>
                
                  <p className="bold">Learn the System</p>
                  <p className="bold">Find the Winning Plays</p>
                  <p className="bold">Connect with Your Peers</p>
                  <p className="bold">Bet Safer</p>
                  <p className="bold">And Bet Better!</p>
               
              </div>
              

            
            
          
        </section>
      </main>
    </>
  )
}


export default App
