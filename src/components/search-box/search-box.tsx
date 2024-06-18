"use client";

import React, { FC, useState } from "react";
import { SearchIcon } from "../icons";

interface SearchBoxProps {
  placeholder?: string;
}

const SearchBox: FC<SearchBoxProps> = ({ placeholder = "Search..." }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2 shadow-sm">
      <SearchIcon width="16" height="16" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="ml-2 outline-none border-none w-full"
      />
    </div>
  );
};

export default SearchBox;
