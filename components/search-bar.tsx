"use client";

import { useState } from "react";
import SearchStock from "./search-stock";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [ticker, setTicker] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ticker === "") {
      return alert("Please enter the ticker name");
    }
    updateSearchParams(ticker.toLowerCase());
  };

  const updateSearchParams = (ticker: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (ticker) {
      searchParams.set("ticker", ticker);
    } else {
      searchParams.delete("ticker");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname,{scroll:false});
  };

  return (
    <form className="items-center" onSubmit={handleSearch} id="searchform">
      <div className="flex">
        <SearchStock ticker={ticker} setTicker={setTicker} />
        <button type="submit" className="ml-2">
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
