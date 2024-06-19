import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Header() {
    const { user } = useContext(UserContext)
    
    return (
        <div>
            <h1>NC NEWS</h1>
            {user && user.username ? <p className="user_text">Logged in as: {user.username}</p> : null}
            <Link className='link' to={`/`}>
                Home
            </Link>
            <br></br>
            <Link className='link' to={`/users`}>
                Users
            </Link>
            <br></br>
            <Link className='link' to={`/articles`}>
                Articles
            </Link>
        </div>
    )
}

export default Header;