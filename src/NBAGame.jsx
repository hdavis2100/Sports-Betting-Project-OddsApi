function NBAGame({ game }) {
    
    const { home_team, away_team, commence_time, scores } = game;
    const commenceTime = new Date(commence_time);
  
    return (
      <li>
        <p>
          <strong>{home_team}</strong> vs. <strong>{away_team}</strong>
        </p>
        <p>{commenceTime.toLocaleString()}</p>
        
        {scores && (
          <p>
            {scores[0].name} {scores[0].score} - {scores[1].name} {scores[1].score}
          </p>
        )}
      </li>
    );
  }
  
  export default NBAGame;