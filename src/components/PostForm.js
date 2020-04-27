import React, { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

function PostForm({ sharePost, user }) {
    const [content, setContent] = useState("");

    const onSubmit = async e => {
        e.preventDefault();

        // eslint-disable-next-line
        if (content == false) {
            Swal.fire({
                title: "You must type something to post",
                icon: "error",
                toast: "true",
                position: "bottom-left",
                showConfirmButton: false,
            });
        } else {
            await axios.post("/api/posts", {
                author: user, // "rodziriarte", //which will be the current user
                content,
            });
            setContent("");
            sharePost();
        }
    };

    return (
        <div className="card">
            <form onSubmit={onSubmit}>
                <div className="input">
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="What's on your mind?"
                    />
                    <span></span>
                </div>
                <button type="submit" className="btn">
                    Share
                </button>
            </form>
        </div>
    );
}

export default PostForm;
