
import { EventsIndex } from "./EventsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { EventsShow } from "./EventsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";


export function Content() {

  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({})
  const [isEventShowVisible, setIsEventShowVisible] = useState(false)

   const handleIndexEvents = () => {
     console.log("handleIndexPhotos");
     axios.get("http://localhost:3000/weddings.json").then((response) => {
       console.log(response.data);
       setEvents(response.data);
     });
    };

    const handleShowEvents = (event) => {
      console.log("handleShowEvents", event);
      setIsEventShowVisible(true);
      setCurrentEvent(event);
    };

    const handleClose = () => {
      console.log("handleClose");
      setIsEventShowVisible(false);
    };

  useEffect(handleIndexEvents, []);

  return (
    <main>
      <Signup />
      <Login />
      <EventsIndex events={events} onShowEvent = {handleShowEvents}/>
      <Modal show={isEventShowVisible} onClose ={handleClose} >
        <EventsShow  event={currentEvent}/>
      </Modal>
    </main>
  )
}