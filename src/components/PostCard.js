import React, { useState } from "react";
import { format } from "timeago.js";
import axios from "axios";

import Swal from "sweetalert2";

function PostCard({
    id,
    author,
    content,
    updatedAt,
    currentUser,
    updatePosts,
}) {
    const [editing, setEdit] = useState(false);
    const [newContent, setContent] = useState(content);

    const updatePost = async id => {
        await axios.put(`/api/posts/${id}`, {
            author: author,
            content: newContent,
        });

        setEdit(false);
        updatePosts();
    };
    const deletePost = id => {
        Swal.fire({
            title: "Are you sure that you want to delete this post?",
            text: "Once you do it, you can't undo this action",
            showCancelButton: true,
            customClass: true,
        }).then(async action => {
            if (action.value === true) {
                await axios.delete(`/api/posts/${id}`);
                updatePosts();
                Swal.fire({
                    title: "Post deleted",
                    icon: "success",
                    toast: "true",
                    position: "bottom-left",
                    showConfirmButton: false,
                });
            } else {
                Swal.fire({
                    title: "Your post is save",
                    icon: "success",
                    toast: "true",
                    position: "bottom-left",
                    showConfirmButton: false,
                });
            }
        });
    };

    return (
        <div className="card">
            <div className="author">
                <div className="top">
                    <span>{author}</span>
                    {author === currentUser ? (
                        <div className="actions">
                            <button onClick={() => setEdit(!editing)}>
                                Edit
                            </button>
                            <button onClick={() => deletePost(id)}>
                                Delete
                            </button>
                        </div>
                    ) : null}
                </div>
                <div className="date">{format(updatedAt)}</div>
            </div>
            <div className="content">
                {editing ? (
                    <>
                        <textarea
                            defaultValue={content}
                            onChange={e => setContent(e.target.value)}
                        />
                        <button onClick={() => updatePost(id)}>Update</button>
                        <button
                            style={{ color: "#f44336" }}
                            onClick={() => setEdit(false)}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <span>{content}</span>
                )}
            </div>
        </div>
    );
}

export default PostCard;
