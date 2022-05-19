import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const Users = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [coding, setCoding] = useState(false);
  const [threeDPrinting, setThreeDPrinting] = useState(false);
  const [laserCutting, setLaserCutting] = useState(false);
  const [soldering, setSoldering] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [robotics, setRobotics] = useState(false);
  const [sewing, setSewing] = useState(false);
  const [woodWorking, setWoodWorking] = useState(false);

  const createUser = async () => {
    const usersRef = collection(db, "users");
    await addDoc(usersRef, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      coding: coding,
      threeDPrinting: threeDPrinting,
      laserCutting: laserCutting,
      soldering: soldering,
      electronics: electronics,
      robotics: robotics,
      sewing: sewing,
      woodWorking: woodWorking,
    });
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    createUser();
  };

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
          <input
            type="text"
            name="firstName"
            onInput={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          <br />
          Last name*
          <input
            type="text"
            name="lastName"
            onInput={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          <br />
          Email*
          <input
            type="email"
            name="email"
            required
            onInput={(e) => setEmail(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          What types of events are you interested in?
          <br />
          Select at least one from the EventsList <br />
          <input
            type="checkbox"
            name="coding"
            onChange={(e) => setCoding(e.target.checked)}
          />{" "}
          Coding <br />
          <input
            type="checkbox"
            name="3DPrinting"
            onChange={(e) => setThreeDPrinting(e.target.checked)}
          />{" "}
          3D Printing <br />
          <input
            type="checkbox"
            name="laserCutting"
            onChange={(e) => setLaserCutting(e.target.checked)}
          />{" "}
          Laser Cutting
          <br />
          <input
            type="checkbox"
            name="=soldering"
            onChange={(e) => setSoldering(e.target.checked)}
          />{" "}
          Soldering <br />
          <input
            type="checkbox"
            name="electronics"
            onChange={(e) => setElectronics(e.target.checked)}
          />{" "}
          Electronics <br />
          <input
            type="checkbox"
            name="robotics"
            onChange={(e) => setRobotics(e.target.checked)}
          />{" "}
          Robotics <br />
          <input
            type="checkbox"
            name="sewing"
            onChange={(e) => setSewing(e.target.checked)}
          />{" "}
          Sewing <br />
          <input
            type="checkbox"
            name="woodWorking"
            onChange={(e) => setWoodWorking(e.target.checked)}
          />{" "}
          Wood Working <br />
          <input type="submit" value="Subscribe" />
        </label>
      </form>
    </div>
  );
};

export default Users;
