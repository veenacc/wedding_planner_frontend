import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/Login";
  };

  return (
    <div className="py-20 px-20">
    <a href="#" onClick={handleClick} className="outline outline-offset-12 outline-amber-950  bg-amber-600 px-5 py-5 hover:bg-amber-950  hover:text-slate-300 rounded-md"  >
      Logout
    </a>
    </div>
  );
}