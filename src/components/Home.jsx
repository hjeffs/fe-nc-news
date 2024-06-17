import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className='link' to='/articles'>
                        All articles
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;