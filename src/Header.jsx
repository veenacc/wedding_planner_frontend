
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        {/* <a href="/Home">Home</a> | <a href="#">Link</a> */}
        <Link to="/Home">Home</Link>  |  <Link to="/Signup">Signup</Link>  | 
          |  <Link to="/Login">Login</Link>   |   <Link to="/LogoutLink">Logout</Link>
        
        
      </nav>
    </header>
  )
}