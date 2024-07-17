
export function MyEventsIndex(props) {
  
  return (
    <div>
      
      <h1>My Events</h1>
      {props.myevents.map((myevent) => (
         <div key={myevent.id}>
          <h2>Event Id: {myevent.id}</h2>
          <h2>Name: {myevent.name}</h2>
          <h2>Address: {myevent.address}</h2>
          <h2>Start: {myevent.start_time}</h2>
          <h2>End: {myevent.end_time}</h2>
          <h2>Details: {myevent.description}</h2>
          <img src={myevent.image_url}  width="200" height="200"/>
          {/* <button onClick={() => props.onShowEvent(myevent)}>More info</button> */}
         </div>
      ))}
      
    </div>  
  );
}