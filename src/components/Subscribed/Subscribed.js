import React from "react";
import {Link} from 'react-router-dom';

import "./Subscribed.css";

const Subscribed = (props) => {
    return (
    <div>
        <header id="topThankYouText">MakerBay Sydney</header>
        <div className="container" id="thankYou">
            <h1>Thank you!</h1>
            <h4>You are now subscribed to our mailing list.</h4>
            <Link to="/" className="backButton">
                Back to home page
            </Link>
        </div>
    </div>
    )
};


export default Subscribed;