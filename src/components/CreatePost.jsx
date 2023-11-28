import React, { useContext, usename } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  const handleSubmit = (e) => {};

  return (
    <>
      <Form method="post" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            name="userId"
            placeholder="Your User Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="How are you feeling today.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            id="body"
            name="body"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            name="reactions"
            placeholder="How many people reacted to this post "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hastags Here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            placeholder="Please enter tags using space "
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export const CreatePostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
};

export default CreatePost;
