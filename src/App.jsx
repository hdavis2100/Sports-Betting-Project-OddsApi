import './App.css'
import Article from './Article'
import Modal from './Modall'
import { useState } from 'react'
import NBAGame from './NBAGame'
import { useEffect } from 'react'
import NFLGame from './NFLGame'
import logo from './assets/logo2.png'
import bron from './assets/bron.webp'
import cash from './assets/cash.jpg'
import dana from './assets/dana.jpg'
import ilia from './assets/ilia.webp'
import lamar from './assets/lamar.webp'
import maho from './assets/maho.webp'
import purdy from './assets/purdy.jpeg'
import ncaa from './assets/ncaa.jpg'
import sanders from './assets/sanders.jpg'
import gane from './assets/gane.jpg'


function App() {
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
  const [modalTitle, setModalTitle] = useState("");
  const [modalFullStory, setModalFullStory] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [isPlaysExpanded, setIsPlaysExpanded] = useState(true);

  const togglePlaysExpand = () => {
    setIsPlaysExpanded((prev) => !prev);
  };
  const toggleNav = () => {
    setNavOpen((prev) => !prev)
  }
  const openModal = (title, fullStory, image) => {
    setModalTitle(title)
    setModalFullStory(fullStory)
    setModalImage(image)
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
      const apiKey = "31253cd323f9a5339865f7cbf8b21902";
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
      //const apiKey = "31253cd323f9a5339865f7cbf8b21902";
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
      //const apiKey = "31253cd323f9a5339865f7cbf8b21902";
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
      //const apiKey = "31253cd323f9a5339865f7cbf8b21902";
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
      const apiKey = "31253cd323f9a5339865f7cbf8b21902";
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
      const apiKey = "31253cd323f9a5339865f7cbf8b21902";
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
      //const apiKey = "31253cd323f9a5339865f7cbf8b21902";
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
      const apiKey = "31253cd323f9a5339865f7cbf8b21902";
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
        <div className="nav">
        <div className="betmo">
        <h1>BETMO</h1>
        </div>
        <button className="links" onClick={toggleNav}>Links</button>
          <nav className={navOpen ? 'open' : ''}>
          <a href="#newslink">News</a>
          <a href="#topbetslink">Top Bets</a>
          <a href="#gamesa">Games</a>
          <a href="#gameodds">Odds</a>
          
          
        </nav>
        <div id="action">
          <a href="#">Login</a>
          <a href="#" className="signup">Sign Up</a>
        </div>
        </div>
        
      </header>
      <div className="containfooter">
      <main className="main">
        <section className="about">
          <img src={logo} alt="Betmo Logo" className="logo" id="secondlogo" />  
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
          <div className="left" id="newslink">
            <h3>Top Stories</h3>
              <div className="articlesgrid">
                <Article
                  title="Mahomes Costs Bettors Millions"
                  content="Patrick Mahomes seemed to be a shoe in for the MVP award..."
                  image={maho}
                  onClick={() =>
                    openModal(
                      "Mahomes Costs Bettors Millions",
                      "Patrick Mahomes seemed to be a shoe in for the MVP award midway through the season, but his struggles later on cost him bigtime, along with his bettors. Midway through the year he compiled a passer rating of 120.5 and threw for over 2500 yards, and the chiefs were in prime position to finish first in the AFC. A string of bad losses, along with some back cramps from Mahomes, caused the Chiefs' and Mahomes' play to suffer, and they lost 5 games in a row, including a demolishing by Brock Purdy and the 49ers. Brock Purdy's stellar second half of the season catapulted him into the MVP race, where he eventually took the throne and was crowned the NFL MVP. Bettors lost millions of dollars in predicting that Mahomes would continue his strong play, but quickly realized they should have bet on the best quarterback in the NFL, Brock Purdy.",
                      maho
                    )
                  }
                />
                <Article
                  title='Dana White Loves Online Betting'
                  content="Dana White, UFC President, is cashing in big on the new online..."
                  image={dana}
                  onClick={() =>
                    openModal(
                      'Dana White Loves Online Betting',
                      'Dana White, UFC President, is cashing in big on the legalization of sports beting. He sat down with us for an interview last week, detailing how much money he has made, " I have made so much money guys, it is not even funny. I always know the correct fighter to pick, and I make sure they win. You know I am the type of guy that loves money, and I would never pick a losing bet. I have made over 10 million dollars betting on the GOAT of the sport, Jon Jones." Thanks so much Dana for sitting down with us.',
                      dana
                    )
                  }
                />
                <Article
                  title="Online Sports Betting Legalized in Missouri!"
                  content="Bettors in Missouri are flocking to websites like Mybookie and DraftKings after online sports gambling was recently legalized..."
                  image={cash}
                  onClick={() =>
                    openModal(
                      "Online Sports Betting Legalized in Missouri!",
                      'Bettors in Missouri are flocking to websites like Mybookie and DraftKings after online sports gambling was recently legalized. Missourians were anxiously waiting, in hope of the opportunity to gamble on their favorite sports teams, fighter, and player props. We took a trip to Ameristar Casino in St. Charles to get thoughts from potential online bettors. John Johnson, a self-described life long St. Louisan, was thrilled with the legalization, "I have been waiting forever for this opportunity.I hate driving all the way to the casino just to place my sports bets. Now, I can do it anytime I want, wherever I want! I have already placed 30 bets on different games!" Thanks so much to Mr. Johnson for speaking with us. ',
                      cash
                    )
                  }
                />
                <Article
                  title="Purdy Wins MVP, Betters Suffer"
                  content="Brock Purdy surprised everyone by winning MVP, to the dismay of many betters. The young quarterback emerged as the league's top player..."
                  image={purdy}
                  onClick={() =>
                    openModal(
                      "Purdy Wins MVP, Betters Suffer",
                      "Brock Purdy surprised everyone by winning MVP, to the dismay of many betters. The young quarterback emerged as the league's top player. He threw for over 4000 yards and 40 touchdowns, leading the 49ers to a 13-3 record. The 49ers were the top seed in the NFC, and Purdy was the main reason why. He was the most consistent player in the league, and his play was unmatched. Bettors were not happy with the outcome, as many had bet on Patrick Mahomes to win the MVP. Mahomes was the favorite for most of the year, but his play declined in the second half of the season, and he was unable to keep up with Purdy. Bettors lost millions of dollars, but Purdy was happy to take home the MVP trophy.",
                      purdy
                    )
                  }
                />
                <Article
                  title="Ciryl Gane wins UFC Heavyweight Title at +500"
                  content="Ciryl Gane shocked the world by defeating Jon Jones at UFC 340..."
                  image={gane}
                  onClick={() =>
                    openModal(
                      "Ciryl Gane wins UFC Heavyweight Title at +500",
                      "Ciryl Gane shocked the world by defeating Jon JOnes at UFC 340 as a +500 underdog. Bettors who took the risk were ecstatic, as they saw their pocket size increase dramatically. These bettors preferred Gane's crisp striking and felt confident that his improved grappling skills would be enough to prevent Jones from submitting him again. Bettors won a combined sum of 10 million dollars, including a 2 million dollar purse won by superstar rapper Drake, who is notorius for despising Jon Jones.  ",
                      gane
                    )
                  }
                />
                <Article
                  title="Shadeur Sanders Wins Heisman Trophy"
                  content="Shadeur Sanders, son of NFL Hall of Famer Deion Sanders, won the Heisman Trophy..."
                  image={sanders}
                  onClick={() =>
                    openModal(
                      "Shadeur Sanders Wins Heisman Trophy",
                      "Shadeur Sanders, son of NFL Hall of Famer Deion Sanders, won the Heisman Trophy last sunday. Sanders was the favorite to win the award, as he threw for over 4000 yards and 40 touchdowns, leading the Colorado Buffaloes to an 11-2 record. Sanders was the most consistent player in the college, and his play was unmatched. Bettors were not happy with the outcome, as many had bet on Archie Manning to win the Heisman. Manning was the favorite for most of the year, but his play declined in the second half of the season, and he was unable to keep up with Sanders. Bettors lost millions of dollars, but Sanders was happy to take home the Heisman trophy.",
                      sanders
                    )
                  }
                />
            </div>
          </div>
          </div>
          <div className="right">
          <div className="bestplays" id="topbetslink">
            <h3 className='topbets' onClick={togglePlaysExpand}>{isPlaysExpanded ? "Hide Best Plays" : "Show Best Plays"}</h3>
            {isPlaysExpanded && (
            <ul className="bestbets">
              <li>
                <a href="https://mybookie.com" target="_blank">
                Patrick Mahomes over 300 yards <span className="--odds">+200</span>
                </a>
                </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                 Chiefs to win by 10+ points <span className="--odds">+150</span>
                </a>
              </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                 Travis Kelce anytime touchdown scorer <span className="-odds">-110</span>
                </a>
              </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                Brock Purdy over 2 passing touchdowns <span className="-odds">-400</span>
                </a>
              </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                Jon Jones submission winner over Stipe Miocic <span className="--odds">+340</span>
                </a>
              </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                Shadeur Sanders over 150 passing yards <span className="-odds">-700</span>
                </a>
              </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                Brandon Moreno vs. Kai Asakura over 2.5 rounds <span className="--odds">+120</span>
                </a>
              </li>
              <li>
                <a href="https://mybookie.com" target="_blank">
                $9ers superbowl winner 2025 <span className="-odds">-300</span>
                </a>
              </li>
              
            </ul>
            )}
        </div>
        <section className="nbagames" id="gamesa">
          <h3 onClick={toggleExpand}>{isExpanded ? "Hide NBA Games" : "Show NBA Games"}</h3>
          {isExpanded && (
            <>
            {liveGames.length > 0 && (
              <>
              <h4>Live Games</h4>
              <div className="gamelist">
                {liveGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
              </>
            )}
              <h4>Upcoming Games</h4>
              <div className="gamelist">
                {upcomingGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
              <h4>Past Games</h4>
              <div className="gamelist">
                {pastGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
            </>
          )}
        </section>
        <section className="nbagames">
        <h3 onClick={toggleNflGamesExpand}>{isNflGamesExpanded ? "Hide NFL Games" : "Show NFL Games"}</h3>
          {isNflGamesExpanded && (
            <>
            {liveNflGames.length > 0 && (
              <>
              <h4>Live Games</h4>
              <div className="gamelist">
                {liveNflGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
              </>
            )}
              <h4>Upcoming Games</h4>
              <div className="gamelist">
                {upcomingNflGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
              <h4>Past Games</h4>
              <div className="gamelist">
                {pastNflGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
            </>
          )}
        </section>
        <section className="nbagames">
        <h3 onClick={toggleWnbaGamesExpand}>{isWnbaGamesExpanded ? "Hide MMA Fights" : "Show MMA Fights"}</h3>
          {isWnbaGamesExpanded && (
            <>
            {LiveWnbaGames.length > 0 && (
              <>
              <h4>Live Games</h4>
              <div className="gamelist">
                {LiveWnbaGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
              </>
            )}
              <h4>Upcoming Games</h4>
              <div className="gamelist">
                {upcomingWnbaGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
              <h4>Past Games</h4>
              <div className="gamelist">
                {pastWnbaGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
            </>
          )}
        </section>
        <section className="nbagames">
        <h3 onClick={toggleMlbGamesExpand}>{isMlbGamesExpanded ? "Hide College Football Games" : "Show College Football Games"}</h3>
          {isMlbGamesExpanded && (
            <>
            {liveMlbGames.length > 0 && (
              <>
              <h4>Live Games</h4>
              <div className="gamelist">
                {liveMlbGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
              </>
            )}
              <h4>Upcoming Games</h4>
              <div className="gamelist">
                {upcomingMlbGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
              <h4>Past Games</h4>
              <div className="gamelist">
                {pastMlbGames.map((game) => (
                  <NBAGame key={game.id} game={game} />
                ))}
              </div>
            </>
          )}
        </section>
        </div>
      </div>
      <a href="#gameodds" className="oddslink"> Find Your Play</a>
      <div className="findplaycontainer">
        <img src={ilia} alt="alt" className="findplay" id="ilia" />
        <img src={lamar} alt="alt" className="findplay" id="lamar"/>
        <img src={bron} alt="alt" className="findplay" id="bron" />
        <img src={ncaa} alt="alt" className="findplay" id="college"/>
      </div>
      <a href="#gameodds" className="oddslink"> Find Your Play</a>
      <section id="gameodds" className="odds">
      <section className="nbagames">
          <h3 onClick={toggleNbaExpand}>
            {isNbaExpanded ? "Hide NBA Odds" : "Show NBA Odds"}
          </h3>
          {isNbaExpanded && (
            <>
              {nbaGamesOdds.length > 0 && (
              <>
              <h4>Live Odds</h4>
              <div className="oddslist">
                {nbaGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </div>
              </>
              )}
              <h4>Upcoming Odds</h4>
              <div className="oddslist">
                {upcomingNbaGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </div>
            </>
          )}
        </section>
        <section className="nbagames">
          <h3 onClick={toggleNflExpand}>
            {isNflExpanded ? "Hide NFL Odds" : "Show NFL Odds"}
          </h3>
          {isNflExpanded && (
            <>
             {nflGamesOdds.length > 0 && (
              <>
              <h4>Live Odds</h4>
              <div className="oddslist">
                {nflGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </div>
              </>
             )}
              <h4>Upcoming Odds</h4>
              <div className="oddslist">
                {upcomingNflGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </div>
            </>
          )}
        </section>
        <section className="nbagames">
          <h3 onClick={toggleWnbaExpand}>
            {isWnbaExpanded ? "Hide MMA Odds" : "Show MMA Odds"}
          </h3>
          {isWnbaExpanded && (
            <>
            {wnbaGamesOdds.length > 0 && (
              <>
              <h4>Live Odds</h4>
              <div className="oddslist">
                {wnbaGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </div>
              </>
            )}
              <h4>Upcoming Odds</h4>
              <div className="oddslist">
                {upcomingWnbaGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </div>
            </>
          )}
        </section>
        <section className="nbagames">
          <h3 onClick={toggleMlbExpand}>
            {isMlbExpanded ? "Hide College Football Odds" : "Show College Football Odds"}
          </h3>
          {isMlbExpanded && (
            <>
              {mlbGamesOdds.length > 0 && (
              <>
              <h4>Live Odds</h4>
              <div className="oddslist">
                {mlbGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </div>
              </>
              )}
              <h4>Upcoming Odds</h4>
              <div className="oddslist">
                {upcomingMlbGamesOdds.map((game) => (
                  <NFLGame key={game.id} game={game} />
                ))}
              </div>
            </>
          )}
        </section>

      </section>
    </main>
    {isModalOpen && <Modal title={modalTitle} fullStory={modalFullStory} image={modalImage} onClose={closeModal} />}
    <footer className="footer">
      <div className="footerlinks">
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="footerinfo">
        <p>&copy; 2024 Betmo</p>
      </div>
    </footer>
    </div>
    </>
  )
}


export default App
