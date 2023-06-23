import React, { useState } from "react";

const BookmarkButton = ({ onClick, name }) => {
  const [isBookmarked, setIsBookmarked] = useState(
    JSON.parse(localStorage.getItem("pokemons"))?.filter(
      (pName) => pName === name
    ).length === 1
      ? true
      : false
  );

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onClick();
  };

  return (
    <button
      className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none ${
        isBookmarked ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-600"
      }`}
      onClick={handleBookmark}
    >
      {isBookmarked ? (
        <>
          <svg
            className="h-4 w-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 17l-5 3V7a2 2 0 012-2h6a2 2 0 012 2v13l-5-3z"
              clipRule="evenodd"
            />
          </svg>
          Bookmarked
        </>
      ) : (
        <>
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          Bookmark
        </>
      )}
    </button>
  );
};

export default BookmarkButton;
