import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>First run at deploying a FE project</h2>
            <p>Multiple issues from user POV</p>
            <p>The aim was to create a functional front end for my API</p>
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
                    <li>
                        <Link className='link' to='/topics'>
                        All Topics
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;