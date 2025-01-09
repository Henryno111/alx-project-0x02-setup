import React from "react";
import Header from "@/components/layout/Header";
import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";


const posts = ({ posts }: PostsPageProps) => {
    return (
      <div className="p-4">
        <Header />
        <h1 className="text-4xl mb-6">Posts</h1>
  
        {/* Display posts using PostCard component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    );
  };
  
  // Fetch posts using getStaticProps at build time
  export async function getStaticProps() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
  
      return {
        props: {
          posts: data,  // Pass fetched posts as props
        },
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
      return {
        props: {
          posts: [],  // Return an empty array in case of an error
        },
      };
    }
  }
  
  export default posts;