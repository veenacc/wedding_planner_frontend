
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        {/* <a href="/Home">Home</a> | <a href="#">Link</a> */}
        <Link to="/Home">Home</Link>  |  
        {localStorage.getItem('jwt') && <Link to="/MyEvents">My Events</Link> }  |  
        {!localStorage.getItem('jwt')  && <Link to="/Signup">Signup</Link>}  | 
          |  {!localStorage.getItem('jwt')  && <Link to="/Login">Login</Link>}  
          |   {localStorage.getItem('jwt') && <Link to="/LogoutLink">Logout</Link>}
        
      </nav>
    </header>
  )
}