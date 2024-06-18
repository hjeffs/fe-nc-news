import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <h1>NC NEWS</h1>
            <Link className='link' to={`/`}>
                Home
            </Link>
        </div>
    )
}

export default Header;