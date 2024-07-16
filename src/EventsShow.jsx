export function EventsShow(props) {

  const handleAddToProject=()=>{
    console.log("from  Add to project")
    event.preventDefault();
    props.onUpdateUserId() ; 

  }

  const handleDeleteButton=()=>{
    console.log("from  delete project")
    // event.preventDefault();
    props.onDeleteEvent(props.event.id) ; 

  }

  return (
    <div>
      <h1>Wedding Details</h1>
      <p>Name: {props.event.name}</p>
      <p>Address: {props.event.address}</p>
      <p>Start_time: {props.event.start_time}</p>
      <p>End_time: {props.event.end_time}</p> <hr />
      <p>Description: {props.event.description}</p>
      <p>Owner: {props.event.user_id} </p>
      {!props.event.user_id && localStorage.getItem('jwt') && <button onClick={handleAddToProject}>Add To project</button>}
      { props.event.admin &&  <button onClick={handleDeleteButton}>Delete Event</button>}
    </div>
  );
}