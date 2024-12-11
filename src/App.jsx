import './App.css'
import Article from './Article'
import Modal from './Modall'
import { useState } from 'react'
import NBAGame from './NBAGame'
import { useEffect } from 'react'
import NFLGame from './NFLGame'

function App() {
  const [modalContent, setModalContent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [liveGames, setLiveGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [pastGames, setPastGames] = useState([]);
  const [liveNflGames, setLiveNflGames] = useState([]);
  const [upcomingNflGames, setUpcomingNflGames] = useState([]);
  const [pastNflGames, setPastNflGames] = useState([]);
  const [LiveWnbaGames, setLiveWnbaGames] = useState([]);
  const [upcomingWnbaGames, setUpcomingWnbaGames] = useState([]);
  const [pastWnbaGames, setPastWnbaGames] = useState([]);
  const [liveMlbGames, setLiveMlbGames] = useState([]);
  const [upcomingMlbGames, setUpcomingMlbGames] = useState([]);
  const [pastMlbGames, setPastMlbGames] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const[isNflExpanded, setIsNflExpanded] = useState(false);
  const[isNbaExpanded, setIsNbaExpanded] = useState(false);
  const[isWnbaExpanded, setIsWnbaExpanded] = useState(false);
  const[isMlbExpanded, setIsMlbExpanded] = useState(false);
  const [nflGamesOdds, setNflGamesOdds] = useState([]);
  const [mlbGamesOdds, setMlbGamesOdds] = useState([]);
  const [nbaGamesOdds, setNbaGamesOdds] = useState([]);
  const [wnbaGamesOdds, setWnbaGamesOdds] = useState([]);
  const [upcomingNflGamesOdds, setUpcomingNflGamesOdds] = useState([]);
  const [upcomingMlbGamesOdds, setUpcomingMlbGamesOdds] = useState([]);
  const [upcomingNbaGamesOdds, setUpcomingNbaGamesOdds] = useState([]);
  const [upcomingWnbaGamesOdds, setUpcomingWnbaGamesOdds] = useState([]);
  const [isNflGamesExpanded, setIsNflGamesExpanded] = useState(false);
  const [isMlbGamesExpanded, setIsMlbGamesExpanded] = useState(false);
  const [isWnbaGamesExpanded, setIsWnbaGamesExpanded] = useState(false);

  

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
  const toggleNflGamesExpand = () => {
    setIsNflGamesExpanded((prev) => !prev);
  };
  const toggleMlbGamesExpand = () => {
    setIsMlbGamesExpanded((prev) => !prev);
  };
  const toggleWnbaGamesExpand = () => {
    setIsWnbaGamesExpanded((prev) => !prev);
  };
  const toggleNflExpand = () => {
    setIsNflExpanded((prev) => !prev);
  };
  const toggleNbaExpand = () => {
    setIsNbaExpanded((prev) => !prev);
  };
  const toggleWnbaExpand = () => {
    setIsWnbaExpanded((prev) => !prev);
  };
  const toggleMlbExpand = () => {
    setIsMlbExpanded((prev) => !prev);
  };
  useEffect(() => {
      const fetchNBAData = async () => {
      const apiKey = "08190ac023a21ad22e97c8b5ee789043";
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
    const fetchNflData = async () => {
      //const apiKey = "08190ac023a21ad22e97c8b5ee789043";
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const targetUrl = encodeURIComponent(
        `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores/?daysFrom=2&apiKey=${apiKey}`
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
      setLiveNflGames(live);
      setUpcomingNflGames(upcoming);
      setPastNflGames(past);
    };
    const fetchWnbaData = async () => {
      //const apiKey = "08190ac023a21ad22e97c8b5ee789043";
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const targetUrl = encodeURIComponent(
        `https://api.the-odds-api.com/v4/sports/mma_mixed_martial_arts/scores/?daysFrom=2&apiKey=${apiKey}`
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
      setLiveWnbaGames(live);
      setUpcomingWnbaGames(upcoming);
      setPastWnbaGames(past);
    };
    const fetchMlbData = async () => {
      //const apiKey = "08190ac023a21ad22e97c8b5ee789043";
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const targetUrl = encodeURIComponent(
        `https://api.the-odds-api.com/v4/sports/americanfootball_ncaaf/scores/?daysFrom=2&apiKey=${apiKey}`
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
      setLiveMlbGames(live);
      setUpcomingMlbGames(upcoming);
      setPastMlbGames(past);
    };

    fetchNBAData();
    fetchNflData();
    fetchWnbaData();
    fetchMlbData();
  }
  , []);
  
  useEffect(() => {
    const fetchNflOddsData = async () => {
      //const apiKey = "08190ac023a21ad22e97c8b5ee789043";
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const targetUrl = encodeURIComponent(
        `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&regions=us&markets=h2h&oddsFormat=american&bookmakers=unibet`
      );
      const url = `${proxyUrl}${targetUrl}`;
      const response = await fetch(url);
      const responseData = await response.json();
      const data = JSON.parse(responseData.contents);
      console.log(data);
      const now = new Date();
      const live = data.filter(
        (game) => new Date(game.commence_time) <= now
      );
      const upcoming = data.filter(
        (game) => new Date(game.commence_time) > now
      );
      setNflGamesOdds(live);
      setUpcomingNflGamesOdds(upcoming);
      
    };
    const fetchNbaOddsData = async () => {
      //const apiKey = "08190ac023a21ad22e97c8b5ee789043";
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const targetUrl = encodeURIComponent(
        `https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=${apiKey}&regions=us&markets=h2h&oddsFormat=american&bookmakers=unibet`
      );
      const url = `${proxyUrl}${targetUrl}`;
      const response = await fetch(url);
      const responseData = await response.json();
      const data = JSON.parse(responseData.contents);
      console.log(data);
      const now = new Date();
      const live = data.filter(
        (game) => new Date(game.commence_time) <= now
      );
      const upcoming = data.filter(
        (game) => new Date(game.commence_time) > now
      );
      setNbaGamesOdds(live);
      setUpcomingNbaGamesOdds(upcoming);
      
    };
    const fetchWnbaOddsData = async () => {
      //const apiKey = "08190ac023a21ad22e97c8b5ee789043";
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const targetUrl = encodeURIComponent(
        `https://api.the-odds-api.com/v4/sports/mma_mixed_martial_arts/odds/?apiKey=${apiKey}&regions=us&markets=h2h&oddsFormat=american&bookmakers=unibet&commenceTimeTo=2025-01-21T00%3A00%3A00Z`
      );
      const url = `${proxyUrl}${targetUrl}`;
      const response = await fetch(url);
      const responseData = await response.json();
      const data = JSON.parse(responseData.contents);
      console.log(data);
      const now = new Date();
      const live = data.filter(
        (game) => new Date(game.commence_time) <= now
      );
      const upcoming = data.filter(
        (game) => new Date(game.commence_time) > now
      );
      setWnbaGamesOdds(live);
      setUpcomingWnbaGamesOdds(upcoming);
      
    };
    const fetchMlbOddsData = async () => {
      //const apiKey = "08190ac023a21ad22e97c8b5ee789043";
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const targetUrl = encodeURIComponent(
        `https://api.the-odds-api.com/v4/sports/americanfootball_ncaaf/odds/?apiKey=${apiKey}&regions=us&markets=h2h&oddsFormat=american&bookmakers=unibet&commenceTimeTo=2024-12-23T00%3A00%3A00Z`
      );
      const url = `${proxyUrl}${targetUrl}`;
      const response = await fetch(url);
      const responseData = await response.json();
      const data = JSON.parse(responseData.contents);
      console.log(data);
      const now = new Date();
      const live = data.filter(
        (game) => new Date(game.commence_time) <= now
      );
      const upcoming = data.filter(
        (game) => new Date(game.commence_time) > now
      );
      setMlbGamesOdds(live);
      setUpcomingMlbGamesOdds(upcoming);
      
    };

    fetchNflOddsData();
    fetchWnbaOddsData();
    fetchNbaOddsData();
    fetchMlbOddsData();
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
            <h3 className='topbets'>Top Bets</h3>
            <ul className="bestbets">
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
          <h3 onClick={toggleExpand}>{isExpanded ? "Hide NBA Games" : "Show NBA Games"}</h3>
          {isExpanded && (
            <>
              <h4>Live Games</h4>
              <ul className="gamelist">
                {liveGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Upcoming Games</h4>
              <ul className="gamelist">
                {upcomingGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Past Games</h4>
              <ul className="gamelist">
                {pastGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
            </>
          )}
        </section>
        <section className="nbagames">
        <h3 onClick={toggleNflGamesExpand}>{isNflGamesExpanded ? "Hide NFL Games" : "Show NFL Games"}</h3>
          {isNflGamesExpanded && (
            <>
              <h4>Live Games</h4>
              <ul className="gamelist">
                {liveNflGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Upcoming Games</h4>
              <ul className="gamelist">
                {upcomingNflGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Past Games</h4>
              <ul className="gamelist">
                {pastNflGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
            </>
          )}
        </section>
        <section className="nbagames">
        <h3 onClick={toggleWnbaGamesExpand}>{isWnbaGamesExpanded ? "Hide MMA Fights" : "Show MMA Fights"}</h3>
          {isWnbaGamesExpanded && (
            <>
              <h4>Live Games</h4>
              <ul className="gamelist">
                {LiveWnbaGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Upcoming Games</h4>
              <ul className="gamelist">
                {upcomingWnbaGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Past Games</h4>
              <ul className="gamelist">
                {pastWnbaGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
            </>
          )}
        </section>
        <section className="nbagames">
        <h3 onClick={toggleMlbGamesExpand}>{isMlbGamesExpanded ? "Hide College Football Games" : "Show College Football Games"}</h3>
          {isMlbGamesExpanded && (
            <>
              <h4>Live Games</h4>
              <ul className="gamelist">
                {liveMlbGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Upcoming Games</h4>
              <ul className="gamelist">
                {upcomingMlbGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Past Games</h4>
              <ul className="gamelist">
                {pastMlbGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </ul>
            </>
          )}
        </section>
        </div>
      </div>
      <section className="odds">
      <section className="nbagames">
          <h3>NFL Games</h3>
          <button onClick={toggleNflExpand}>
            {isNflExpanded ? "Collapse" : "Expand"}
          </button>
          {isNflExpanded && (
            <>
              <h4>Live Games</h4>
              <ul>
                {nflGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Upcoming Games</h4>
              <ul>
                {upcomingNflGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </ul>
            </>
          )}
        </section>
        <section className="nbagames">
          <h3>NBA Games</h3>
          <button onClick={toggleNbaExpand}>
            {isNbaExpanded ? "Collapse" : "Expand"}
          </button>
          {isNbaExpanded && (
            <>
              <h4>Live Games</h4>
              <ul>
                {nbaGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Upcoming Games</h4>
              <ul>
                {upcomingNbaGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </ul>
            </>
          )}
        </section>
        <section className="nbagames">
          <h3>WNBA Games</h3>
          <button onClick={toggleWnbaExpand}>
            {isWnbaExpanded ? "Collapse" : "Expand"}
          </button>
          {isWnbaExpanded && (
            <>
              <h4>Live Games</h4>
              <ul>
                {wnbaGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Upcoming Games</h4>
              <ul>
                {upcomingWnbaGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </ul>
            </>
          )}
        </section>
        <section className="nbagames">
          <h3>MLB Games</h3>
          <button onClick={toggleMlbExpand}>
            {isMlbExpanded ? "Collapse" : "Expand"}
          </button>
          {isMlbExpanded && (
            <>
              <h4>Live Games</h4>
              <ul>
                {mlbGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </ul>
              <h4>Upcoming Games</h4>
              <ul>
                {upcomingMlbGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </ul>
            </>
          )}
        </section>

      </section>
    </main>
    {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
    </>
  )
}


export default App
