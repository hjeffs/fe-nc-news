import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Header() {
    const { user } = useContext(UserContext)
    const { pathname } = useLocation()
    const greenlist = ["/", "/users", "/articles", "/topics"]
    const isPathAllowed = greenlist.includes(pathname) || pathname.match(/^\/articles\/\d+$/);

    return (
        <div>
            <h1>NC NEWS</h1>
            {!isPathAllowed ? <h2 className="Error_text">Invalid Path</h2> : null}
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
            <br></br>
            <Link className='link' to={'/topics'}>
                Topics
            </Link>
        </div>
    )
}

export default Header;