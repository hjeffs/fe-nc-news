import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className='link' to='/articles'>
                        All Articles
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to='/users'>
                        All Users
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;