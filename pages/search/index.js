import Layout from "../../components/Layout";
import SearchMain from "../../components/SearchMain";
import { useState, useContext, useEffect } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext.js";
import Navbar from "../../components/Navbar";

export default function Search() {
  const [query, setQuery] = useState("");

  const [showTitle, setShowTitle] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const { accessToken } = useContext(DataSpotyContext);
  const headers = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  function handleChange(query) {
    if (query !== "" || null || undefined) {
      setQuery(query.toLowerCase());

      setShowTitle(false);
    } else return console.log(query);
  }

  async function fetchSearch() {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=album,track,artist,show,episode`,
      headers
    );
    const searchData = await response.json();
    setSearchData(searchData);
  }

  useEffect(() => {
    fetchSearch();
  }, [query]);

  return (
    <Layout>
      <Navbar />
      <SearchMain
        handleChange={handleChange}
        searchData={searchData}
        showTitle={showTitle}
      />
    </Layout>
  );
}
