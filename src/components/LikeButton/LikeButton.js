// src/components/LikeButton.js

import React from "react";

function LikeButton({ liked, onClick }) {
  return (
    <button onClick={onClick} style={{ color: liked ? "red" : "black" }}>
      {liked ? "Liked" : "Like"}
    </button>
  );
}

export default LikeButton;
