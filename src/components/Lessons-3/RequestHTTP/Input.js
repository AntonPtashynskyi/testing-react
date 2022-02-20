import React from "react";

export default function Input({ onSubmit, onChange }) {
  // const searchInputRef = React.useRef();

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="searchQuery"></label>
      <input
        // ref={searchInputRef}
        className="input"
        name="searchQuery"
        type="text"
        autoComplete="off"
        placeholder="Search images and news"
        onChange={onChange}
      />
      <button type="submit" className="button">
        <span>Search</span>
      </button>
    </form>
  );
}
