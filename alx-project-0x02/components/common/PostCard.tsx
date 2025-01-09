import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
      <h2>{title}</h2>
      <p>{content}</p>
        <p>By: {userId}</p>
    </div>
  );
};

export default PostCard;