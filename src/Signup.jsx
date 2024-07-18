import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/Login"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="bg-cover bg-center bg-orange-50 h-dvh w-full">
      <h1 className="text-center p-8 font-serif text-4xl mb-4">Signup</h1>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="  h-1/2 w-1/2 bg-orange-100  " >
          <div className="flex items-center justify-center  p-3 ">
            Name: <input name="name" type="text" className="outline outline-offset-2 outline-amber-900 "/>
          </div>
          <div className="flex items-center justify-center p-3">
            Email: <input name="email" type="email" className="outline outline-offset-2 outline-amber-900 "/>
          </div>
          <div className="flex items-center justify-center p-3">
            Password: <input name="password" type="password" className="outline outline-offset-2 outline-amber-900 "/>
          </div>
          <div className="flex items-center justify-center p-3">
            Password confirmation: <input name="password_confirmation" type="password" className="outline outline-offset-2 outline-amber-900 "/>
          </div>
          <div className="flex items-center justify-center p-3">
            Image: <input name="image_url" type="url" className="outline outline-offset-2 outline-amber-900 "/>
          </div>
          <div className="flex items-center justify-center p-3">
            Admin Status: <input name="admin" type="boolean" className="outline outline-offset-2 outline-amber-900" />
          </div>
          <div className="flex items-center justify-center p-3 " >
            <button type="submit" className="px-5 py-3 hover:text-orange-900 bg-orange-300 rounded-md outline outline-offset-2 outline-amber-900 " >Signup</button>
          </div>
        </form>
      </div>
      <div className=" flex items-center justify-center  bg-orange-200 "> 
          <ul >
          {errors.map((error) => (
            <li key={error} >{error}</li>
          ))}
          </ul>
      </div>
      

    </div>
  );
}