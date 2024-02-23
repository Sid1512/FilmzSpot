import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";

import "./heroElement.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";

const HeroElement = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data?.results?.length);
    const backgroundImage =
      url.backdrop + data?.results?.[randomIndex]?.backdrop_path;
    setBackground(backgroundImage);
  }, [data, url.backdrop]);

  const searchQueryHandler = () => {
    if (query.trim() !== "") {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchQueryHandler();
    }
  };

  const handleButtonClick = () => {
    searchQueryHandler();
  };

  return (
    <div className="hero-element">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} className="image" />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="hero-element-content">
          <span className="title">Welcome.</span>
          <span className="sub-title">
            Millions of movies, TV shows, and related information to discover.
            Explore Now.
          </span>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search for movies and TV shows..."
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={handleKeyPress}
            />
            <button onClick={handleButtonClick}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroElement;