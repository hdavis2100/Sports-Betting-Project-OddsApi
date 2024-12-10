import './App.css'
import Article from './Article'
import Modal from './Modall'
import { useState } from 'react'
import NBAGame from './NBAGame'
import { useEffect } from 'react'

function App() {
  const [modalContent, setModalContent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [liveGames, setLiveGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [pastGames, setPastGames] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const openModal = (title, fullStory, image) => {
    setModalContent({ title, fullStory, image })
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  useEffect(() => {
    const fetchNBAData = async () => {
      //const apiKey = "08190ac023a21ad22e97c8b5ee789043";
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const targetUrl = encodeURIComponent(
        `https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=2&apiKey=${apiKey}`
      );
      const url = `${proxyUrl}${targetUrl}`;
      const response = await fetch(url);
      const responseData = await response.json();
      const data = JSON.parse(responseData.contents);
      const now = new Date();
      const live = data.filter(
        (game) => !game.completed && new Date(game.commence_time) <= now
      );
      const upcoming = data.filter(
        (game) => !game.completed && new Date(game.commence_time) > now
      );
      const past = data.filter((game) => game.completed);
      setLiveGames(live);
      setUpcomingGames(upcoming);
      setPastGames(past);
    };

    fetchNBAData();
  }
  , []);

  return (
    <>
      <header className="header">
        <div className="logocontainer">
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
          <div className="containleft">
          <div className="left">
            <h3>Top Stories</h3>
              <div className="articlesgrid">
                <Article
                  title="Mahomes Costs Bettors Millions"
                  content="Betters put big money on Mahomes to win MVP throughout the season. Unfortunately,..."
                  image="/maho.webp"
                  onClick={() =>
                    openModal(
                      "Mahomes Costs Bettors Millions",
                      "",
                       "/maho.webp"
                    )
                  }
                />
                <Article
                  title='Dana White Thrilled with Online Betting Legalization: "I Love Money!" '
                  content="Dana White, UFC President, is cashing in big on the new online..."
                  image="/dana.jpg"
                  onClick={() =>
                    openModal(
                      'Dana White Thrilled with Online Betting Legalization: "I Love Money!"',
                      "",
                      "/dana.jpg"
                    )
                  }
                />
                <Article
                  title="Online Sports Betting Leaglized in Missouri!"
                  content="Betters in Missouri are flocking to websites like Mybookie and DraftKings after online sports gambling was recently legalized..."
                  image="/cash.jpg"
                  onClick={() =>
                    openModal(
                      "Online Sports Betting Legalized in Missouri!",
                      "",
                      "/cash.jpg"
                    )
                  }
                />
                <Article
                  title="Purdy Wins MVP, Betters Suffer"
                  content="Brock Purdy surprised everyone by winning MVP, to the dismay of many betters. The young quarterback emerged as the league's top player..."
                  image="/purdy.jpeg"
                  onClick={() =>
                    openModal(
                      "Purdy Wins MVP, Betters Suffer",
                      "",
                      "/purdy.jpeg"
                    )
                  }
                />
            </div>
          </div>
          </div>
          <div className="right">
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
        <section className="nbagames">
          <h3>NBA Games</h3>
          <button onClick={toggleExpand}>
            {isExpanded ? "Collapse" : "Expand"}
          </button>
          {isExpanded && (
            <>
              <h4>Live Games</h4>
              <ul>
                {liveGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Upcoming Games</h4>
              <ul>
                {upcomingGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Past Games</h4>
              <ul>
                {pastGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
            </>
          )}
        </section>
        </div>
      </div>
    </main>
    {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
    </>
  )
}


export default App
