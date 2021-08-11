import React from 'react';
import "../styles/HomePage.css"

function HomePage() {
    return (
        <div className="home-page-container">
            <h2 className="home-page-header">Home Page</h2><br/>
            <h1>Soccer Hero</h1><br/>
            <p>Are you interesting in creating your own team? Register and track your team with us!</p>
            <p>Do you want to see the stats of your favorite players? Browse your soccer team and find the player you want!</p>
            <img src={'https://static-s.aa-cdn.net/img/ios/1316862421/54deabe4027d8a2ad4a7ae8f7703c821?v=1'} alt='logo'></img>

            <p>Contact info:</p>
            <p>info@soccerhero.com</p>

            <p>Subscription of 1 years for less than 7.99 per month!</p><br/><br/>
        </div>
    );
}

export default HomePage;