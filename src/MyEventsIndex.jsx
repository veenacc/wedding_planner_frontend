
export function MyEventsIndex(props) {
  
  return (
    <div>
      
      <h1 className="  font-serif  text-center text-4xl mb-10 py-5 bg-orange-50"  >My Events</h1>
      <div className="grid grid-cols-3 gap-6 px-10">
      {props.myevents.map((myevent) => (
         <div key={myevent.id} className="bg-orange-100  border-solid border-2 border-amber-500">
          <h2 className="flex justify-center mt-3">Event Id: {myevent.id}</h2>
          <h2 className="flex justify-center">Name: {myevent.name}</h2>
          <h2 className="flex justify-center">Address: {myevent.address}</h2>
          <h2 className="flex justify-center">Start: {myevent.start_time}</h2>
          <h2 className="flex justify-center">End: {myevent.end_time}</h2>
          <h2 className="flex justify-center">Details: {myevent.description}</h2>
          <div className="flex justify-center mb-5 mt-5"> 
           <img src={myevent.image_url}  width="200" height="200" />
          </div>
          {/* <button onClick={() => props.onShowEvent(myevent)}>More info</button> */}
         </div>
      ))}
      </div>
    </div>  
  );
}