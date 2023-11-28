import React, { useContext, useEffect, useRef, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./Loading";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <div className="main-container">
      {postList.length === 0 && <WelcomeMessage />}

      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
