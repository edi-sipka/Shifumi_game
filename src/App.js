import { useEffect, useState } from 'react';
import './App.css';
import Popup from './components/Popup';
import LottieAnimation from './components/Lottie';

const App = () => {
  const [player, setPlayer] = useState('paper');
  const [computer, setComputer] = useState('paper');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [points, setPoints] = useState('');
  const [finalScore, setFinalScore] = useState('');
  const [endGame, setEndGame] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const picks = ['paper', 'scissors', 'rock'];
  const [showAnimation, setShowAnimation] = useState(false);

  // Random function for computer combination
  const random = () => {
    const randomPick = picks[Math.floor(Math.random() * picks.length)];
    setComputer(randomPick);
  };

  // Function called when user pick option
  const picksChoice = (e) => {
    setPlayer(e);
    random();
  };

  // Restart game function
  const restart = () => {
    setPlayer('paper');
    setComputer('paper');
    setPlayerScore(0);
    setComputerScore(0);
    setPoints('');
    setEndGame(false);
    setShowPopup(false);
  };

  // If user gets 3 points he is the winner and popup will show, same is for computer. Adding +1 point and animation on every turn. 
  useEffect(() => {
    const gamePossibilities = player + computer;
    if (playerScore <= 3 && computerScore <= 3) {
      if (['paperrock', 'rockscissors', 'scissorspaper'].includes(gamePossibilities)) {
        setShowAnimation(true);
        setTimeout(() => {
          setShowAnimation(false);
        }, 2000);
        const addPlayerScore = playerScore + 1;
        setPlayerScore(addPlayerScore);
        setPoints('+1 for a player!');
        if (addPlayerScore === 3) {
          setFinalScore(' 🎉 Player Wins 🎉 ');
          const gameOver = true;
          setEndGame(gameOver);
          setShowPopup(true);
        }
      } else if (['rockpaper', 'scissorsrock', 'paperscissors'].includes(gamePossibilities)) {
        setShowAnimation(true);
        setTimeout(() => {
          setShowAnimation(false);
        }, 2000);
        const addComputerScore = computerScore + 1;
        setComputerScore(addComputerScore);
        setPoints('+1 for a computer!');
        if (addComputerScore === 3) {
          setFinalScore('🎉 Computer Wins 🎉');
          const gameOver = true;
          setEndGame(gameOver);
          setShowPopup(true);
        }
      } else if (['scissorsscissors', 'rockrock', 'paperpaper'].includes(gamePossibilities)) {
        setPoints('DRAW 😕');
      }
    }  }, [computer, player]);

  return (
    <div className="main">
      {endGame && showPopup && <Popup finalScore={finalScore} restart={restart} />}
      <h1 className="header">Welcome to Shifumi Game</h1>
      <div className="result">
        <h2 className="box-result">
          Player Points:
          {playerScore}
        </h2>
        <div className="box-result box-result-score">
          Round score:
          {' '}
          {points}
          {showAnimation && <LottieAnimation />}
        </div>
        <h2 className="box-result">
          Computer Points:
          {computerScore}
        </h2>
      </div>
      <div className="picks">
        <div>
          <img className="player" src={`../img/${player}.png`} alt="rock/paper/scissors" />
        </div>
        <div>
          <img className="computer" src={`../img/${computer}.png`} alt="rock/paper/scissors" />
        </div>
      </div>
      <div className="game-container">
        <div className="choice">
          <div className="select-choice" id="rock" onClick={() => picksChoice('rock')} aria-hidden="true">
            <img className="img-weapon" src="https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png" alt="Selection - rock" />
          </div>
          <div className="select-choice" id="paper" onClick={() => picksChoice('paper')} aria-hidden="true">
            <img className="img-weapon" src="https://res.cloudinary.com/itsellej/image/upload/v1533400143/rock-paper-scissors/paper.png" alt="Selection - paper" />
          </div>
          <div className="select-choice" id="scissors" onClick={() => picksChoice('scissors')} aria-hidden="true">
            <img className="img-weapon" src="https://res.cloudinary.com/itsellej/image/upload/v1533400144/rock-paper-scissors/scissors.png" alt="Selection - scissors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
