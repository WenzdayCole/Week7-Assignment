import React, { useState, useEffect } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                // "http://localhost:8080/posts" this one worked locally
                "https://week7-assignment-server-lujl.onrender.com"
            );
            const data = await response.json();
            setPosts(data);
            console.log(data)
        }
        fetchData();
    }, []);
    console.log("This is the fetched data:", posts)
    

}