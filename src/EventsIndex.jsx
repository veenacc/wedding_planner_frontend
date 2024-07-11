export function EventsIndex(props) {
  return (
    <div>
      <h1>All Events</h1>
      {props.events.map((event) => (
         <div key={event.id}>
          <h2>{event.name}</h2>
          <h2>{event.address}</h2>
          <h2>{event.start_time}</h2>
          <h2>{event.end_time}</h2>
          <img src={event.image_url}  width="200" height="200"/>
          
         </div>
      ))}
    </div>
  );
}