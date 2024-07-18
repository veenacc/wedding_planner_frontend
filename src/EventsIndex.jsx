
import { Link } from "react-router-dom";

export function EventsIndex(props) {
  
  return (
    <div className="pb-7">

      <p className="bg-orange-50 "> 
      <h1 className="  font-serif  text-center text-4xl py-2 text-amber-950" >Welcome To Dreamz </h1>
        <h2 className="  bg-amber-600  hover:bg-amber-950  hover:text-slate-300 rounded-md size-fit px-10 ml-40 py-0 shadow-inner shadow-amber-950" >
          {props.events && props.events[0] && props.events[0].admin && (<Link to="/CreateNew">Create New</Link>)}
        </h2>
        
      </p > 
      <div className="grid grid-cols-3 gap-6 px-10 py-10 "> 
      {props.events.map((event) => (
         <div key={event.id} className="bg-orange-100  border-solid border-2 border-amber-500">
          <h2 className="flex justify-center mt-3">id: {event.id}</h2>
          <h2 className="flex justify-center ">Name: {event.name}</h2>
          <h2 className="flex justify-center ">Address: {event.address}</h2>
          <h2 className="flex justify-center ">Start: {event.start_time}</h2>
          <h2 className="flex justify-center ">End: {event.end_time}</h2>
          <div className="flex justify-center py-4"> 
            <img src={event.image_url}  width="200" height="200"/> 
          </div>
          <div className="outline outline-offset-12 outline-amber-950  bg-amber-600  hover:bg-amber-950  hover:text-slate-300 rounded-md size-fit px-6 ml-40 mb-2">
            <button onClick={() => props.onShowEvent(event)}>More info</button>
          </div>
         </div>
      ))}
      </div>
      
    </div>  
  );
}