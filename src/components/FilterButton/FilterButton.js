import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLikedOnly } from "../../redux/actions";
import "./FilterButton.css";

function FilterButton() {
  const likedOnly = useSelector((state) => state.likedOnly);
  const dispatch = useDispatch();

  const handleToggleLikedOnly = () => {
    dispatch(toggleLikedOnly());
  };

  return (
    <div className="filter-button">
      <button onClick={handleToggleLikedOnly}>
        {likedOnly ? "Show All" : "Show Liked Only"}
      </button>
    </div>
  );
}

export default FilterButton;
