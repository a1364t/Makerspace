import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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

    const spCharRegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numberRegExp = /[0-9]/;
    const firstNameErrorsArr = [];
    const lastNameErrorsArr = [];
    const emailErrorsArr = [];

    if (
      !(firstName.length > 1) ||
      spCharRegExp.test(firstName) ||
      numberRegExp.test(firstName) ||
      !(lastName.length > 1) ||
      spCharRegExp.test(lastName) ||
      numberRegExp.test(lastName) ||
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

      if (!email.includes(".")) {
        emailErrorsArr.push("An email address must contain one .");
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
    <div>
      <h1>Subscribe to our newsletter</h1>
      <p>In case you were wondering...</p>
      <ul>
        <li>You will receive emails from us at most once 3 weeks</li>
        <li>Your personal information will not be be shared</li>
      </ul>
      <form onSubmit={_handleSubmit}>
        <label>
          First name*
          <input
            type="text"
            name="firstName"
            onInput={(e) => {
              setFirstNameError([]);
              setFirstName(e.target.value);
            }}
            required
          />
        </label>
        {firstNameError.length > 0 ? (
          <div style={{'color': 'red'}}>
            {firstNameError.map((error) => {
              return <p key={Math.random()}>{error}</p>;
            })}
          </div>
        ) : (
          ""
        )}
        <label>
          <br />
          Last name*
          <input
            type="text"
            name="lastName"
            onInput={(e) => {
              setlastNameError([]);
              setLastName(e.target.value);
            }}
            required
          />
        </label>
        {lastNameError.length > 0 ? (
          <div style={{'color': 'red'}}>
            {lastNameError.map((error) => {
              return <p key={Math.random()}>{error}</p>;
            })}
          </div>
        ) : (
          ""
        )}
        <label>
          <br />
          Email*
          <input
            type="email"
            name="email"
            required
            onInput={(e) => {
              setEmailError("");
              setEmail(e.target.value);
            }}
          />
        </label>
        {emailError.length > 0 ? (
          <div style={{'color': 'red'}}>
            {emailError.map((error) => {
              return <p key={Math.random()}>{error}</p>;
            })}
          </div>
        ) : (
          ""
        )}
        <br />
        <label>
          What types of events are you interested in?
          <br />
          Select at least one from the EventsList <br />
          <p style={{'color': 'red'}}>{checkboxError}</p>
          <input
            type="checkbox"
            name="coding"
            onChange={(e) => {
              setCheckboxError("");
              setCoding(e.target.checked);
            }}
          />{" "}
          Coding <br />
          <input
            type="checkbox"
            name="3DPrinting"
            onChange={(e) => {
              setCheckboxError("");
              setThreeDPrinting(e.target.checked);
            }}
          />{" "}
          3D Printing <br />
          <input
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
            type="checkbox"
            name="=soldering"
            onChange={(e) => {
              setCheckboxError("");
              setSoldering(e.target.checked);
            }}
          />{" "}
          Soldering <br />
          <input
            type="checkbox"
            name="electronics"
            onChange={(e) => {
              setCheckboxError("");
              setElectronics(e.target.checked);
            }}
          />{" "}
          Electronics <br />
          <input
            type="checkbox"
            name="robotics"
            onChange={(e) => {
              setCheckboxError("");
              return setRobotics(e.target.checked);
            }}
          />{" "}
          Robotics <br />
          <input
            type="checkbox"
            name="sewing"
            onChange={(e) => {
              setCheckboxError("");
              setSewing(e.target.checked);
            }}
          />{" "}
          Sewing <br />
          <input
            type="checkbox"
            name="woodWorking"
            onChange={(e) => {
              setCheckboxError("");
              setWoodWorking(e.target.checked);
            }}
          />{" "}
          Wood Working <br />
          <input type="submit" value="Subscribe" />
        </label>
      </form>
    </div>
  );
};

export default Users;
