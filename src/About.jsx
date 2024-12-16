import './About.css'

function About ({aboutVisibility, closeAbout}) {

    let aboutClasses = `aboutPopup ${aboutVisibility}`

    return (        
        <>
            <div className={aboutClasses}>
                <h2 className={aboutVisibility}>About this App</h2>
                <p className={aboutVisibility}>
                This app is for demonstration purposes only. Showcasing use of React, Vite, & state handling workflows. 
                <br></br>
                <br></br>
                <a href="https://github.com/Solidago-01/react-blackjack-project" target='_blank'>See the GitHub repo for this project here.</a></p>
                <br></br>
                <br></br>
                <a className='portfolioLink' href="https://lautumngnadinger.com/" target='_blank'>L Autumn Gnadinger</a>
                <button onClick={closeAbout} className={aboutVisibility}>close</button>
            </div>
        </>
    )

}

export default About