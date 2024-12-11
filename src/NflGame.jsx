function NFLGame({ game }) {
    const { home_team, away_team, commence_time, bookmakers } = game;
  
    const commenceTime = new Date(commence_time);
    const unibet = bookmakers?.[0];
    const moneylineMarket = unibet?.markets?.[0];
    const homeOdds = moneylineMarket?.outcomes?.find((outcome) => outcome.name === home_team)?.price;
    const awayOdds = moneylineMarket?.outcomes?.find((outcome) => outcome.name === away_team)?.price;
  
    return (
      <li>
        <p>
          <strong>{home_team}</strong> vs. <strong>{away_team}</strong>
        </p>
        <p>{commenceTime.toLocaleString()}</p>
        {homeOdds && (
        <p>
          <strong>Moneyline Odds (Unibet):</strong> <br />
          {home_team}: {homeOdds} <br />
          {away_team}: {awayOdds}
        </p>
        )}
      </li>
    );
  }
  
  export default NFLGame;