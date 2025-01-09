import React from "react";
import Header from "@/components/layout/Header";
import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";


const Posts = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setPosts(data))
            .catch((error) => console.error('There was a problem with the fetch operation:', error));
    }, []);
    

    return (
        <div>
            <Header />
            <main className='pt-20'>
                <h1 className='flex justify-center'>Posts page</h1>
                <div className='space-y-4'>
                    {posts.map((post) => (
                        <PostCard 
                            key={post.id} 
                            title={post.title} 
                            content={post.body}
                            userId={post.userId}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Posts;