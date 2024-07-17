
import { Link } from "react-router-dom";

export function EventsIndex(props) {
  
  return (
    <div>
      
      <h2>
        {props.events && props.events[0] && props.events[0].admin && (<Link to="/CreateNew">Create New</Link>)}
      </h2>
      <h1>All Events</h1>
      {props.events.map((event) => (
         <div key={event.id}>
          <h2>id: {event.id}</h2>
          <h2>{event.name}</h2>
          <h2>{event.address}</h2>
          <h2>{event.start_time}</h2>
          <h2>{event.end_time}</h2>
          <img src={event.image_url}  width="200" height="200"/>
          <button onClick={() => props.onShowEvent(event)}>More info</button>
         </div>
      ))}
      
    </div>  
  );
}