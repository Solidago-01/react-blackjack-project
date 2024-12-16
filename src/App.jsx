import { useState } from 'react'
import './App.css'
import Deck from './Deck';
import Score from './Score'
import Rules from './Rules'
import About from './About'

const cardBack =         
  { 
    id: 53,
    src: "/react-blackjack-project/public/assets/cards/BACK.svg",
    name: "???",
    value: 0 
  };

function App() {
  
  // Init states
  const [cardsInHand, setCardsInHand] = useState([cardBack, cardBack])
  const [playerScore, setPlayerScore] = useState(0)

  const [cardsInDealerHand, setCardsInDealerHand] = useState([cardBack, cardBack])
  const [dealerScore, setDealerScore] = useState(0)

  const [isActionBtnDisabled, setIsActionBtnDisabled] = useState("disabled")
  const [buttonClass, setButtonClass] = useState("drawDisabled")
  const [isPlaying, setIsPlaying] = useState("false")

  const [rulesClassName, setRulesClassName] = useState("invisible")
  const [aboutClassName, setAboutClassName] = useState("invisible")




  //////////////////////////////////////////////////////

  function newGame() {

    // Get two cards for the player and one for the dealer
    var newCard = Math.floor(Math.random() * Deck.length);
    var newCard2 = Math.floor(Math.random() * Deck.length);
    var newCard3 = Math.floor(Math.random() * Deck.length);

    // Update players hand and score 
    setCardsInHand(hand => hand = [Deck[newCard], Deck[newCard2]]);
    setPlayerScore(score => score = Deck[newCard].value + Deck[newCard2].value);

    // Update dealers hand and score
    setCardsInDealerHand(hand => hand = [Deck[newCard3], cardBack]);
    setDealerScore(score => score = Deck[newCard3].value);

    // Set action buttons to active (remove disable)
    setIsActionBtnDisabled(btnDisabled => btnDisabled = "");
    setButtonClass(btnClass => btnClass = "");

    // Change playstate
    setIsPlaying(isPlaying => isPlaying = "true");

  }

  function drawCard() {

    // Get new card, add new card to hand arr, update score
    var newCard = Math.floor(Math.random() * Deck.length);
    setCardsInHand(hand => hand = hand.concat(Deck[newCard]));
    setPlayerScore(score => score += Deck[newCard].value);

  }

  function callGame() {

    // Get new card
    var newCard = Math.floor(Math.random() * Deck.length);

    // Remove empty card back (id of cardback is 53), and append new card
    setCardsInDealerHand(hand => (hand.filter(a => a.id !== 53).concat(Deck[newCard])));

    // Update dealers score
    setDealerScore(score => score = dealerScore + Deck[newCard].value);

    // Set action buttons to inactive (add disable)
    setIsActionBtnDisabled(btnDisabled => btnDisabled = "disabled");
    setButtonClass(btnClass => btnClass = "drawDisabled");

    // Change playstate, calculate final total
    setIsPlaying(playing => playing = "false");

    }

    // These four functions handle the "Rules" and "About" Popups
    // and are passed to the respective components below
    function showRules() {
      setRulesClassName(rulesClassName => rulesClassName = "")
    }
    function closeRules() {
      setRulesClassName(rulesClassName => rulesClassName = "invisible")
    }
    function showAbout() {
      setAboutClassName(aboutClassName => aboutClassName = "")
    }
    function closeAbout() {
      setAboutClassName(aboutClassName => aboutClassName = "invisible")
    }
  
  return (
    <>

      <header>
        <h1>Blackjack</h1>
          <span><button onClick={showRules}>Rules</button></span>
          <span><button onClick={newGame}>New Game</button></span>
          <span><button onClick={showAbout}>About</button></span>
          <Rules rulesVisibility={rulesClassName} closeRules={closeRules}/>
          <About aboutVisibility={aboutClassName} closeAbout={closeAbout}/>

      </header>
      
      <main>

        <div className="playSurface">
          <div className="currentHandGrid">
            {cardsInDealerHand.map((playingCard, id) => (<img className="currentHand" src={playingCard.src} key={id} title={playingCard.name} alt={`${playingCard.name}`} />))}
          </div>
        </div>


        <div className="playSurface">
          <div className="currentHandGrid">
            {cardsInHand.map((playingCard, id) => (<img className="currentHand" src={playingCard.src} key={id} title={playingCard.name} alt={`${playingCard.name}`} />))}
          </div>    
        </div>

      </main>

      <Score 
        dealerscore={dealerScore} 
        playerscore={playerScore}
        drawcard={drawCard}
        callgame={callGame}
        isplaying={isPlaying}
      />

    </>
  )
}

export default App
