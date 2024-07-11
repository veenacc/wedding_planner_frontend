export function EventsShow(props) {
  return (
    <div>
      <h1>Wedding Details</h1>
      <p>Name: {props.event.name}</p>
      <p>Address: {props.event.address}</p>
      <p>Start_time: {props.event.start_time}</p>
      <p>End_time: {props.event.end_time}</p> <hr />
      <p>Description: {props.event.description}</p>
    </div>
  );
}