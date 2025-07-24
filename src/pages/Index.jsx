import posts from "../assets/posts.json";
import Article from "../components/Article";
// import Counter from "../components/Counter";
// import StateString from "../components/StateString";
// import Toggle from "../components/Toggle";
import { useState } from "react";

function Homepage() {
  const [search, setSearch] = useState("");
  const [postCount, setPostCount] = useState(posts.length);

  const changeSearch = (event) => {
    setSearch(event.target.value);
    setPostCount(
      posts.filter((post) =>
        post.title.toLowerCase().includes(event.target.value.toLowerCase())
      ).length
    );
  };

  const handleSearchByClick = () => {
    const searchValue = document.getElementById("search").value;
    setSearch(searchValue);
    setPostCount(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      ).length
    );
  };

  const searchKeyDown = (event) => {
    if (event.key === "Enter") {
      const searchValue = document.getElementById("search").value;
      setSearch(searchValue);
      setPostCount(
        posts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        ).length
      );
    }
  };

  return (
    <>
      <h1>Simple Page</h1>
      {/* <Counter />
      <StateString />
      <Toggle /> */}

      <div>
        Cari Artikel: <input type="text" id="search" onChange={changeSearch} />{" "}

        {/* <input type="text" id="search" /> */}
        {/* <button onClick={handleSearchByClick}>Search</button> */}

        {/* <input type="text" id="search" onKeyDown={searchKeyDown} /> */}
      </div>

      <small>
        Ditemukan {postCount} data dengan pencarian kata {search}
      </small>

      {posts
        .filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((post, index) => (
          <Article
            key={index}
            title={post.title}
            date={post.date}
            tags={post.tags}
            isNew={post.isNew}
          />
        ))}
    </>
  );
}

export default Homepage;
