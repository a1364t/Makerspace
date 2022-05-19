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


const NavBarMonth = (props) => {
    return (
        <div className="months">
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
        <div className="navBar">
            <a href="#" className="navBar">About</a>
            <a href="#" className="navBar">Events & Workshops</a>
            <Link to='/user' className="navBar">Subscribe</Link>
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
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.month}</h2>
            <img src="https://via.placeholder.com/350x197" /><br></br>
            <h2 className="title">{event.title}</h2>
            <p className="date">{event.date}</p>
            <p className="description">{event.description}</p>
            <button className="RSVP"><a href="#" className="RSVP">Learn More & RSVP</a></button><br></br>           
          </div>          
        );
      })}
      <Link to='/user' className="???">Subscribe to our newsletter</Link>
      <p>Be the first to know about events and</p>
      <p>workshops that may interest you!</p>
    </div>
  );
};

export default Events;
