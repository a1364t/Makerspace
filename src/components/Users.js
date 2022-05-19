import React, { useState } from "react";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";


const Users = (props) => {
    const [user, setUser] = useState([]);


    const addUser = async () => {

    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted');
    }
    

    return (
        <div>
            <h1>Subscribe to our newsletter</h1>
            <p>In case you were wondering...</p>
            <ul>
                <li>You will receive emails from us at most once 3 weeks</li>
                <li>Your personal information will be shared</li>
            </ul>
            <form onSubmit={_handleSubmit}>
                <label>
                    First name* 
                    <input type="text" name="firstName" required/>
                </label>
                <label>
                <br></br>
                    Last name* 
                    <input type="text" name="lastName" required />
                </label>
                <label>
                <br></br>
                    Email*
                    <input type="email" name="email" required />
                </label>
                <br></br>
                <label>
                    What types of events are you interested in?<br></br>
                    Select at least one from the EventsList <br></br>
                    <input type="checkbox" name="coding"/> Coding <br></br>
                    <input type="checkbox" name="3DPrinting" /> 3D Printing <br></br>
                    <input type="checkbox" name="laserCutting" /> Laser Cutting <br></br>
                    <input type="checkbox" name="=soldering" /> Soldering <br></br>
                    <input type="checkbox" name="electronics" /> Electronics <br></br>
                    <input type="checkbox" name="robbotics" /> Robbotics <br></br>
                    <input type="checkbox" name="sewing" /> Sewing <br></br>
                    <input type="checkbox" name="woodWorking" /> Wood Working <br></br>

                    <input type="submit" value="Subscribe" />
                </label>
                
            </form>
        </div>
    )
};

export default Users;