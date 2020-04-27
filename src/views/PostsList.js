import React, { useEffect, useState } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

function PostsList() {
    useEffect(() => {
        fetchData();
    }, []);

    const user = "isarodz";

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        let response = await axios.get("/api/posts");
        setPosts(response.data.reverse());
    };

    const updatePosts = async () => fetchData();
    //fetchData();

    return (
        <>
            <Nav />
            <div className="container">
                <div className="notesList">
                    <PostForm user={user} sharePost={updatePosts} />
                    <h1>Latest posts</h1>
                    {posts.map(post => (
                        <PostCard
                            currentUser={user}
                            key={post._id}
                            id={post._id}
                            author={post.author}
                            content={post.content}
                            updatedAt={post.updatedAt}
                            updatePosts={updatePosts}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default PostsList;
