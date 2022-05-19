import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import {Link} from 'react-router-dom';

import './Events.css';

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
    <div className='container'>
      <header id="topText">MakerBay Sydney</header>
      <h2> Event details</h2>
      <div style={{ display: "inline" }}>
        <NavBarMonth />
        <Navbar />
        <EventsList info={events} />
      </div>
    </div>
  );
};


const NavBarMonth = (ptops) => {
    return (
        <div>
            <span>JANUARY</span>
            <span>FEBRUARY</span>
            <span>MARCH</span>
            <span>APRIL</span>
            <span>MAY</span>
            <span>JUN</span>
            <span>JULY</span>
            <span>AUGUST</span>
            <span>SEPTEMBER</span>
            <span>OCTOBER</span>
            <span>NOVEMBER</span>
            <span>DECEMBER</span>
        </div>
    )
};

const Navbar = () => {
    return (
        <div>
            <a href="#">About</a>
            <a>Events & Workshops</a>
            <Link to='/user'>Subscribe</Link>
        </div>
    )
}

const EventsList = (props) => {
  if (props.info.length === 0) {
    return <div>Loading...</div>;
  }
  const events = props.info;

  return (
    <div>
      <h3>Event info</h3>
      <p id="rectangle">X</p>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2 className="title">{event.title}</h2>
            <p className="date">{event.date}</p>
            <p className="description">{event.description}</p>
            <img src="https://via.placeholder.com/350x197" /><br></br>
            <a href="#">Learn more & RSVP</a>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
