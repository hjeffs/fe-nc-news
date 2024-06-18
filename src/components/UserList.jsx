import { useState, useEffect, useContext } from "react";
import { getUsers } from "../../utils/api";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function UserList() {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const { setUser } = useContext(UserContext)

    useEffect(() => {
        setIsLoading(true);
        getUsers()
            .then((users) => {
                setUsers(users);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p className="Loading">Loading...</p>;
    }

    return (
        <ul className="Users_list">
            {users.map((user, index) => (
                <li className="User_card" key={index} onClick={() => setUser(user)}>
                    <h2>{user.username}</h2>
                    <img src={`${user.avatar_url}`} alt="user avatar" style={{ width: '200px', height: '200px' }}/>
                    <p>Name: {user.name}</p>
                    <hr></hr>
                    <Link className='link' to={`/`}>
                        Go to Homepage
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default UserList;
