import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const [category, setCategory] = useState("movie");

  const { data, loading } = useFetch(`/${category}/top_rated`);

  const onCategoryTabChange = (tab) => {
    setCategory(tab === "Movie" ? "movie" : "tv");
  };

  return (
    <div className="carousel-section">
      <ContentWrapper>
        <span className="carousel-title">Top Rated</span>
        <SwitchTabs
          data={["Movie", "TV Shows"]}
          onTabChange={onCategoryTabChange}
        />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={category} />
    </div>
  );
};

export default TopRated;