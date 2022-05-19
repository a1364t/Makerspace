import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

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
    <div>
      <h2> Event details</h2>
      <div style={{ display: "flex" }}>
        <EventsList info={events} />
      </div>
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
      <h3>Event info</h3>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
