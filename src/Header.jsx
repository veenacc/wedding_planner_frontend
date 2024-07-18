
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-amber-900  p-4 text-slate-300" >
      <nav>
        <a href="/" className="px-5 py-3 hover:bg-amber-950  rounded-md">Home</a> 
        {/* | <a href="#">Link</a> */}
        {/* <Link to="/" className="px-5 py-3 hover:bg-amber-950  rounded-md">Home</Link>  |   */}

        {localStorage.getItem('jwt') && <Link to="/MyEvents" className="px-5 py-3 hover:bg-amber-950  rounded-md">My Events</Link> }  |  

        {/* {!localStorage.getItem('jwt')  && <Link to="/Signup" className="px-5 py-3 hover:bg-amber-950  rounded-md">Signup</Link>}  |  */}
          |  {!localStorage.getItem('jwt')  && <Link to="/Login" className="px-5 py-3 hover:bg-amber-950  rounded-md">Login</Link>}  
          |   {localStorage.getItem('jwt') && <Link to="/LogoutLink" className="px-5 py-3 hover:bg-amber-950  rounded-md">Logout</Link>}


          {!localStorage.getItem('jwt')  && <a href="/Signup" className="px-5 py-3 hover:bg-amber-950  rounded-md">Signup</a>} 
        
      </nav>
    </header>
  )
}