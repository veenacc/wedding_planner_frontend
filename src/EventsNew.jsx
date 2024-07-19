import axios from "axios";

export function EventsNew(props) {

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("form submitted");
    const params = new FormData(event.target);
    // event.target.reset;
    props.onCreateNewEvent(params, () => event.target.reset());
    
  }
  return (
    <div className="bg-cover bg-center bg-orange-50 h-dvh w-full">
      <h1 className="text-center p-8 font-serif text-4xl mb-4">Create New Event</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 place-content-evenly h-48"> 
        <div className="flex items-center justify-center p-3">
          Name: <input name="name" type="text" />
        </div>
        <div className="flex items-center justify-center p-3">
          Description: <input name ="description" type="text" />
        </div>
        <div className="flex items-center justify-center p-3">
          Address: <input name="address" type="text" />
        </div>
        <div className="flex items-center justify-center p-3">
          Image Url: <input name="image_url" type="url" />
        </div>
        <div className="flex items-center justify-center p-3">
          Start time: <input name="start_time" type="datetime-local" />
        </div>
        <div className="flex items-center justify-center p-3">
          End time: <input name="end_time" type="datetime-local" />
        </div>
        <div className="grid grid-rows-1  justify-around">
          <button type="submit" className="p-3 hover:text-orange-900 bg-orange-300 rounded-md outline outline-offset-2 outline-amber-900 ">Create Item</button>
        </div>
      </form>
    </div>
  );
}