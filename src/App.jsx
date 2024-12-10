import './App.css'
import Article from './Article'

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
        <div className="container">
          <div className="left">
            <h3>Top Stories</h3>
              <div className="articlesgrid">
                <Article
                  title="Mahomes Costs Bettors Millions"
                  content="Betters put big money on Mahomes to win MVP throughout the season. Unfortunately,..."
                  image="/maho.webp"
                />
                <Article
                  title='Dana White Thrilled with Online Betting Legalization: "I Love Money!" '
                  content="Dana White, UFC President, is cashing in big on the new online..."
                  image="/dana.jpg"
                />
                <Article
                  title="Online Sports Betting Leaglized in Missouri!"
                  content="Betters in Missouri are flocking to websites like Mybookie and DraftKings after online sports gambling was recently legalized..."
                  image="/cash.jpg"
                />
                <Article
                  title="Purdy Wins MVP, Betters Suffer"
                  content="Brock Purdy surprised everyone by winning MVP, to the dismay of many betters. The young quarterback emerged as the league's top player..."
                  image="/purdy.jpeg"
                />
            </div>
          </div>
          <div className="bestplays">
            <h3>Top Bets</h3>
            <ul>
              <li>
                <a href="https://mybookie.com" target="_blank">
                Patrick Mahomes over 300 yards +350
                </a>
                </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                 Chiefs to win by 10+ points +200
                </a>
              </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                 Travis Kelce anytime touchdown scorer -120
                </a>
              </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                Eagles over 28.5 points -110
                </a>
              </li>
            </ul>
        </div>
      </div>
    </main>
    </>
  )
}


export default App
