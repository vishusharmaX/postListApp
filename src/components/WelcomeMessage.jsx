import React from "react";

const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <div className="welcome-message">
      <h1 c>There are No posts.</h1>
      {/* <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get Post From Server
      </button> */}
    </div>
  );
};

export default WelcomeMessage;
