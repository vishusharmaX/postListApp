import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "./App.css";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header />
            <Outlet>

            </Outlet>
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
};

export default App;
