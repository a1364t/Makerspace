import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import "./Users.css";

const Users = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState([]);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setlastNameError] = useState([]);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState([]);
  const [checkboxError, setCheckboxError] = useState("");
  const [coding, setCoding] = useState(false);
  const [threeDPrinting, setThreeDPrinting] = useState(false);
  const [laserCutting, setLaserCutting] = useState(false);
  const [soldering, setSoldering] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [robotics, setRobotics] = useState(false);
  const [sewing, setSewing] = useState(false);
  const [woodWorking, setWoodWorking] = useState(false);
  const navigate = useNavigate();

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

    const spCharRegExp = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    const numberRegExp = /[0-9]/;
    const firstNameErrorsArr = [];
    const lastNameErrorsArr = [];
    const emailErrorsArr = [];

    if (
      !(firstName.length > 0) ||
      !(firstName.length > 1) ||
      spCharRegExp.test(firstName) ||
      numberRegExp.test(firstName) ||
      !(lastName.length > 0) ||
      !(lastName.length > 1) ||
      spCharRegExp.test(lastName) ||
      numberRegExp.test(lastName) ||
      !(email.length > 0) ||
      !email.includes(".") ||
      !(
        coding ||
        threeDPrinting ||
        laserCutting ||
        soldering ||
        electronics ||
        robotics ||
        sewing ||
        woodWorking
      )
    ) {
      if (!(firstName.length > 0)) {
        firstNameErrorsArr.push("This is a required field");
      }
      if (!(firstName.length > 1)) {
        firstNameErrorsArr.push("A name must be atleast two letters");
      }
      if (spCharRegExp.test(firstName)) {
        firstNameErrorsArr.push("A name cannot contain a special character");
      }
      if (numberRegExp.test(firstName)) {
        firstNameErrorsArr.push("A name cannot contain numbers");
      }
      setFirstNameError(firstNameErrorsArr); // setting the firstNameError based on the conditional result
      if (!(lastName.length > 0)) {
        lastNameErrorsArr.push("This is a required field");
      }

      if (!(lastName.length > 1)) {
        lastNameErrorsArr.push("A name must be atleast two letters");
      }
      if (spCharRegExp.test(lastName)) {
        lastNameErrorsArr.push("A name cannot contain a special character");
      }
      if (numberRegExp.test(lastName)) {
        lastNameErrorsArr.push("A name cannot contain numbers");
      }
      setlastNameError(lastNameErrorsArr); // setting the lastNameError based on the conditional result

      if (!(email.length > 0)) {
        emailErrorsArr.push("This is a required field");
      }
      if (!email.includes(".")) {
        emailErrorsArr.push(
          "An email address must contain atleast one full stop"
        );
      }
      setEmailError(emailErrorsArr);

      if (
        !(
          coding ||
          threeDPrinting ||
          laserCutting ||
          soldering ||
          electronics ||
          robotics ||
          sewing ||
          woodWorking
        )
      ) {
        setCheckboxError(
          "Please select atleast one type of event from the list"
        );
      }
      return;
    }

    console.log("submitted");
    createUser();
    navigate(`/subscribed`);
  };

  return (
    <div className="container">
      <header id="topText">MakerBay Sydney</header>
      <h1 className="newsLetter">Subscribe to our newsletter</h1>
      <h3 className="topInfo">In case you were wondering...</h3>
      <ul className="topInfo">
        <li>You will receive emails from us at most once 3 weeks</li>
        <br />
        <li>Your personal information will not be be shared</li>
      </ul>
      <form onSubmit={_handleSubmit}>
        <label className="firstName">
          <p>First name*</p>

          <input
            className="firstInputName"
            type="text"
            name="firstName"
            onInput={(e) => {
              setFirstNameError([]);
              setFirstName(e.target.value);
            }}
          />
        </label>
        {firstNameError.length > 0 ? (
          <ul className="name-email-error">
            {firstNameError.map((error) => {
              return <li key={Math.random()}> {error}</li>;
            })}
          </ul>
        ) : (
          ""
        )}
        <label className="lastName">
          <p> Last name* </p>
          <input
            className="lastInputName"
            type="text"
            name="lastName"
            onInput={(e) => {
              setlastNameError([]);
              setLastName(e.target.value);
            }}
          />
        </label>
        {lastNameError.length > 0 ? (
          <ul className="name-email-error">
            {lastNameError.map((error) => {
              return <li key={Math.random()}>{error}</li>;
            })}
          </ul>
        ) : (
          ""
        )}
        <label className="email">
          <p>Email*</p>
          <input
            className="emailInput"
            type="email"
            name="email"
            onInput={(e) => {
              setEmailError("");
              setEmail(e.target.value);
            }}
          />
        </label>
        {emailError.length > 0 ? (
          <ul className="name-email-error">
            {emailError.map((error) => {
              return <li key={Math.random()}>{error}</li>;
            })}
          </ul>
        ) : (
          ""
        )}
        <br />
        <label className="interested">
          <div className="interested-qn">
            What types of events are you interested in?
          </div>
          Select at least one from the list <br />
          <p className="name-email-error">{checkboxError}</p>
          <input
            className="checkbox"
            type="checkbox"
            name="coding"
            onChange={(e) => {
              setCheckboxError("");
              setCoding(e.target.checked);
            }}
          />{" "}
          Coding <br />
          <input
            className="checkbox"
            type="checkbox"
            name="3DPrinting"
            onChange={(e) => {
              setCheckboxError("");
              setThreeDPrinting(e.target.checked);
            }}
          />{" "}
          3D Printing <br />
          <input
            className="checkbox"
            type="checkbox"
            name="laserCutting"
            onChange={(e) => {
              setCheckboxError("");
              setLaserCutting(e.target.checked);
            }}
          />{" "}
          Laser Cutting
          <br />
          <input
            className="checkbox"
            type="checkbox"
            name="=soldering"
            onChange={(e) => {
              setCheckboxError("");
              setSoldering(e.target.checked);
            }}
          />{" "}
          Soldering <br />
          <input
            className="checkbox"
            type="checkbox"
            name="electronics"
            onChange={(e) => {
              setCheckboxError("");
              setElectronics(e.target.checked);
            }}
          />{" "}
          Electronics <br />
          <input
            className="checkbox"
            type="checkbox"
            name="robotics"
            onChange={(e) => {
              setCheckboxError("");
              return setRobotics(e.target.checked);
            }}
          />{" "}
          Robotics <br />
          <input
            className="checkbox"
            type="checkbox"
            name="sewing"
            onChange={(e) => {
              setCheckboxError("");
              setSewing(e.target.checked);
            }}
          />{" "}
          Sewing <br />
          <input
            className="checkbox"
            type="checkbox"
            name="woodWorking"
            onChange={(e) => {
              setCheckboxError("");
              setWoodWorking(e.target.checked);
            }}
          />{" "}
          Wood Working <br />
          <input className="submitForm" type="submit" value="Subscribe" />
        </label>
      </form>
    </div>
  );
};

export default Users;
