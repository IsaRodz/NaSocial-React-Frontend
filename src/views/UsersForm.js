import React, { useState, useEffect } from "react";
import axios from "axios";

function UsersForm() {
    useEffect(() => {
        fetchData();
    }, []);
    // eslint-disable-next-line
    const [users, setUsers] = useState([]);

    const [user, setUser] = useState({ name: "", email: "" });

    const fetchData = async () => {
        const response = await axios.get("api/users/");
        setUsers(response.data.reverse());
    };

    const sendData = async e => {
        e.preventDefault();
        await axios.post("/api/users/", {
            name: user.name,
            email: user.email,
        });
        fetchData();
        setUser({ name: "", email: "" });
    };

    const deleteUser = async id => {
        await axios.delete(`api/users/${id}`);
        fetchData();
    };

    return (
        <div className="container">
            <h1>Users View </h1>
            <div className="row">
                <ul className="usersList">
                    {users.map(user => (
                        <li
                            key={user._id}
                            onDoubleClick={() => deleteUser(user._id)}
                        >
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
                <form onSubmit={sendData}>
                    <h2>Add user</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        name="name"
                        value={user.name}
                        onChange={e =>
                            setUser({ ...user, name: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={e =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <button type="submit" className="btn">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UsersForm;
