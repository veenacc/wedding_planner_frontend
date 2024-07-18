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
    <div className="bg-amber-100">
      <h1 className="flex justify-center mt-3 font-serif text-2xl" >Wedding Details</h1>
      <p className="ml-10">Name: {props.event.name}</p>
      <p className="ml-10">Address: {props.event.address}</p>
      <p className="ml-10">Start_time: {props.event.start_time}</p>
      <p className="ml-10">End_time: {props.event.end_time}</p> <hr />
      <p className="ml-10">Description: {props.event.description}</p>
      <p className="ml-10 text-amber-900 font-serif text-xl">Owner: {props.event.user_id} </p>
      <div >
        <div className="flex justify-center mt-3 outline outline-offset-12 outline-amber-950  bg-amber-600  hover:bg-amber-950  hover:text-slate-300 rounded-md ml-20 mr-20">
          {!props.event.user_id && localStorage.getItem('jwt') && <button onClick={handleAddToProject} >Add To project</button>}
        </div>
        <div className="flex justify-center mt-3 outline outline-offset-12 outline-amber-950  bg-amber-600  hover:bg-amber-950  hover:text-slate-300 rounded-md ml-40 mr-40">
          { props.event.admin &&  <button onClick={handleDeleteButton} >Delete Event</button>}
        </div>
      </div>
    </div>
  );
}