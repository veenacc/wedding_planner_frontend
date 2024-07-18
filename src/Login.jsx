import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login" className="bg-cover bg-center bg-orange-50 h-dvh w-full">
      <h1 className="text-center p-8 font-serif text-4xl mb-4">Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="  h-1/2 w-1/2 bg-orange-100 " >
          <div className="flex items-center justify-center p-3">
            Email: <input name="email" type="email" className="outline outline-offset-2 outline-amber-900 "/>
          </div>
          <div className="flex items-center justify-center p-3">
            Password: <input name="password" type="password" className="outline outline-offset-2 outline-amber-900"/>
          </div>
          <div className="flex items-center justify-center p-3">
          <button type="submit" className="px-5 py-3 hover:text-orange-900 bg-orange-300 rounded-md outline outline-offset-2 outline-amber-900 ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}