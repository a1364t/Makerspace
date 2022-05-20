import React, { useState, useEffect } from "react";
import NavBarMonth from "../NavBarMonth";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

import "./Events.css";

const Events = (props) => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const eventsCollectionRef = collection(db, "events");
    const data = await getDocs(eventsCollectionRef);
    setEvents(data.docs.map((event) => ({ ...event.data(), id: event.id })));
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="container">
      <header id="topText">MakerBay Sydney</header>

      <div className="super-nav">
        <Navbar /> <br />
        <NavBarMonth />
        <EventsList info={events} />
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navBar">
      <a href="#" className="navBar">
        About
      </a>
      <a href="#" className="navBar">
        Events & Workshops
      </a>

      <Link to="/user" className="navBar">
        <span id="mail"></span>
        Subscribe
      </Link>
    </div>
  );
};

const EventsList = (props) => {
  if (props.info.length === 0) {
    return <div>Loading...</div>;
  }
  const events = props.info;

  return (
    <div>
      {events.map((event) => {
        return (
          <div className="e-box" key={event.id}>
            <h2 className="e-month">{event.month}</h2>
            <img
              className="e-banner"
              src="https://via.placeholder.com/700x350"
            />
            <br></br>
            <h2 className="title">{event.title}</h2>
            <p className="date">{event.date}</p>
            <p className="description">{event.description}</p>
            <button className="RSVP">
              <a href="#" className="RSVP">
                Learn More & RSVP
              </a>
            </button>
            <br></br>
          </div>
        );
      })}
      <Link to="/user">
        <button className="subBar">Subscribe to our newsletter</button>
      </Link>
      <p className="e-footer">
        Be the first to know about events and <br />
        workshops that may interest you!
      </p>
    </div>
  );
};

export default Events;
