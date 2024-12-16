import './Score.css'


function Score({ dealerscore, playerscore, isplaying, callgame, drawcard }) {

    // initialize and wait for new game
    let infoText = ""
    let btnActiveOrInactive = "disabled"
    let btnClass = "btnInactive"

    // While playing, check for bust or 21, game over for either
    if (isplaying == "true") {

        btnActiveOrInactive = ""
        btnClass = "btnActive"
        
        if (playerscore == 21) {

            infoText = "You got 21! Game Over. You Win!"
            btnActiveOrInactive = "disabled"
            btnClass = "btnInactive"

        } else if (playerscore > 21) {

            infoText = "You busted! Game Over. You lose."
            btnActiveOrInactive = "disabled"
            btnClass = "btnInactive"

        } 
    }

    // After game has been called by the player, disable buttons, check scores
    if (isplaying == "false") {
        
        btnActiveOrInactive = "disabled"
        btnClass = "btnInactive"
        infoText = ""

        if (playerscore > dealerscore && playerscore < 22 && playerscore > 0) {
            infoText = "Game Over. You win!"
        } else if (playerscore < dealerscore && playerscore < 22 && playerscore > 0) {
            infoText = "Game Over. You lose!"
        } else if (playerscore = dealerscore && playerscore > 0) {
            infoText = "Game Over. You lose!"
        }
    }


    return (        
        <>
            <article>

                <button onClick={drawcard} disabled={btnActiveOrInactive} className={btnClass}>draw</button>
                <button onClick={callgame} disabled={btnActiveOrInactive} className={btnClass}>Call</button>

                <p>Dealer's score: {dealerscore} | Player's score: {playerscore}</p>
                {/* <p>players score: {playerscore}</p> */}
                <p className='infoText'>{infoText}</p>
            
            </article>
        </>
    )
}

export default Score