
import { EventsIndex } from "./EventsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { EventsShow } from "./EventsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";


export function Content() {

  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({})
  const [isEventShowVisible, setIsEventShowVisible] = useState(false)

   const handleIndexEvents = () => {
     console.log("handleIndexEvents");
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

    const handleUpdateUserid = () => {
      console.log("from handleUpdateUserid" )
      axios.patch(`http://localhost:3000/weddings/${currentEvent.id}.json`).then(
        response =>{
          console.log(response.data);
          // console.log(events);
          setCurrentEvent(response.data)
          setEvents(
            events.map((evnt) => {
              if (evnt.id === response.data.id)
              {
                console.log(evnt)
                return response.data;
              }
              else
              {
                return evnt;
              }
            }
            )
          )
          // .then(data => {
          //   console.log(data)
          //   console.log(events)
          // });
          // handleClose();
          // location.reload();
        });
    }

    const handleClose = () => {
      console.log("handleClose");
      setIsEventShowVisible(false);
    };

  useEffect(handleIndexEvents, []);

  return (
    <main>
      <Routes>
        <Route path = "/Signup" element = {<Signup /> }   />
        <Route path = "/Login"  element = {<Login /> } />
        <Route path = "/LogoutLink" element = {<LogoutLink /> } />
        <Route path = "/Home" element = {<EventsIndex events={events} onShowEvent = {handleShowEvents}/>} />
      </Routes>
      
      
      <Modal show={isEventShowVisible} onClose ={handleClose} >
        <EventsShow  event={currentEvent} onUpdateUserId={handleUpdateUserid}/>
      </Modal>
    </main>
  )
}