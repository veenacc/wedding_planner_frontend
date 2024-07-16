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
    <div>
      <h1>Create New Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name ="description" type="text" />
        </div>
        <div>
          Address: <input name="address" type="text" />
        </div>
        <div>
          Image Url: <input name="image_url" type="url" />
        </div>
        <div>
          Start time: <input name="start_time" type="datetime" />
        </div>
        <div>
          End time: <input name="end_time" type="datetime" />
        </div>
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
}