import './Rules.css'

function Rules ({rulesVisibility, closeRules}) {

    let rulesClasses = `rulesPopup ${rulesVisibility}`

    return (        
        <>
            <div className={rulesClasses}>
                <h2 className={rulesVisibility}>Rules of Blackjack</h2>
                <p className={rulesVisibility}>
                    The objective of Blackjack, also known as Twenty-One, is to beat the dealer by getting a hand value closer to 21 than the dealer's hand, without going over 21.
                </p>
                <button onClick={closeRules} className={rulesVisibility}>close</button>
            </div>
        </>
    )

}

export default Rules