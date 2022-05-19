import React, {useState, useEffect} from "react";
import {db} from './firebase';
import {
    collection,
    getDoc,
    doc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";

const Events = (props) => {
    const [events, setEvents] = useState([]);

    // const getEvents = async () => {
    //     const eventsCollectionRef = collection(db, "events");
    //     const data = await getDocs(eventsCollectionRef);
    //     setEvents(data.docs.map((event) => ({ ...event.data(), id: event.id })));
    //   };

    //   useEffect(() => {
    //       getEvents()
    //     },[])

    // const fetchEvent = () => {
    //     db.collection('events').get().then((snapshot) => {
    //         let events = [];
    //         snapshot.forEach((event) => {
    //             const eventObj = event.data()
    //             const eventName = event.data().name;
    //             events.push({...eventObj, eventName})
    //             setEvents(events);
    //             console.log(events);
    //         })
    //     })
    // }
    // fetchEvent();

    return (
        <div>
            <p>{events}</p>
        </div>
    )
}

export default Events;