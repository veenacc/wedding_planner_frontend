
import { EventsIndex } from "./EventsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { EventsShow } from "./EventsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { EventsNew } from "./EventsNew";
import { MyEventsIndex } from "./MyEventsIndex";


export function Content() {

  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({})
  const [isEventShowVisible, setIsEventShowVisible] = useState(false)
  const [myevents, setMyEvents] = useState([]);

   const handleIndexEvents = () => {
     console.log("handleIndexEvents");
     axios.get("http://localhost:3000/weddings.json").then((response) => {
       console.log(response.data);
       setEvents(response.data);
     });
    };

    const handleMyIndexEvents = () => {
      console.log("handleMyIndexEvents");
      axios.get("http://localhost:3000/mypage.json").then((response) => {
        console.log(response.data);
        setMyEvents(response.data);
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
            })
          )  

          setMyEvents([...myevents, response.data]);
      });
    }

    const handleClose = () => {
      console.log("handleClose");
      setIsEventShowVisible(false);
    };

    const handleCreateEvent = (params, successCallback) => {
      console.log("handleCreateEvent", params);
      axios.post("http://localhost:3000/weddings.json", params).then((response) => {
          setEvents([...events, response.data]);
          successCallback();
      });
    };

    const handleDeleteEvent = (id) => {
      console.log("handleDeleteEvent", id);
      axios.delete(`http://localhost:3000/weddings/${id}.json`).then((response) => {
        setEvents(events.filter((event) => event.id !== id));
        handleClose();
      });
    };
      
    useEffect(handleIndexEvents, []);
    // {localStorage.getItem('jwt') && (useEffect(handleMyIndexEvents, []))}; ->handled at the backend by rendering empty array []
    useEffect(handleMyIndexEvents, []);

  return (
    <main>
      
      <Routes>
        <Route path = "/Signup" element = {<Signup /> }   />
        <Route path = "/Login"  element = {<Login /> } />
        <Route path = "/LogoutLink" element = {<LogoutLink /> } />
        <Route path = "/" element = {<EventsIndex events={events} onShowEvent = {handleShowEvents}/>} />
        {/* {currentEvent.admin && (<Route path = "/CreateNew" element = {<EventsNew onCreateNewEvent={handleCreateEvent}/> } />)} */}
        <Route path = "/CreateNew" element = {<EventsNew onCreateNewEvent={handleCreateEvent}/> } />
        <Route path = "/MyEvents" element = {< MyEventsIndex myevents={myevents}/>} />
      </Routes>
      
      <Modal show={isEventShowVisible} onClose ={handleClose} >
        <EventsShow  event={currentEvent} onUpdateUserId={handleUpdateUserid} onDeleteEvent={handleDeleteEvent} />
      </Modal>
    </main>
  )
}