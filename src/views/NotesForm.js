import React, { useEffect, useState } from "react";
import axios from "axios";

function NotesForm() {
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("/api/users");
        setUsers(response.data);
    };

    const [users, setUsers] = useState([]);
    const [note, setNote] = useState({
        author: "",
        title: "",
        content: "",
    });

    const sendData = async e => {
        e.preventDefault();
        console.log(note);

        await axios.post("/api/notes/", {
            author: note.author,
            title: note.title,
            content: note.content,
        });
        setNote({ author: "", title: "", content: "" });
        window.location.href = "/";
    };

    return (
        <div className="container">
            <h1>Notes Form </h1>
            <form onSubmit={sendData}>
                <select
                    onChange={e => {
                        setNote({ ...note, author: e.target.value });
                    }}
                >
                    <option hidden>Select an user</option>
                    {users.map(user => (
                        <option key={user._id} defaultValue={user.name}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <input
                    onChange={e => setNote({ ...note, title: e.target.value })}
                    type="text"
                    placeholder="Title"
                    value={note.title}
                />
                <textarea
                    onChange={e =>
                        setNote({ ...note, content: e.target.value })
                    }
                    rows="5"
                    placeholder="Content"
                    value={note.content}
                />
                <button className="btn" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}

export default NotesForm;
