
import { EventsIndex } from "./EventsIndex";
import axios from "axios";
import { useState, useEffect } from "react";


export function Content() {

  const [events, setEvents] = useState([]);

   const handleIndexEvents = () => {
     console.log("handleIndexPhotos");
     axios.get("http://localhost:3000/weddings.json").then((response) => {
       console.log(response.data);
       setEvents(response.data);
     });
   };

  useEffect(handleIndexEvents, []);

  return (
    <main>
      <EventsIndex events={events}/>
    </main>
  )
}