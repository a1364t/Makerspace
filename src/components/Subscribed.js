import React from "react";
import {Link} from 'react-router-dom';

const Subscribed = (props) => {
    return (
        <div>
            <h1>Thank you!</h1>
            <h4>You are now subscribed to our mailing list</h4>
            <Link to="/">
                Back to home page
            </Link>
        </div>
    )
};


export default Subscribed;