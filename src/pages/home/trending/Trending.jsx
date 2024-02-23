import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [timeWindow, setTimeWindow] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${timeWindow}`);

  const onTimeWindowTabChange = (tab) => {
    setTimeWindow(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carousel-section">
      <ContentWrapper>
        <span className="carousel-title">Trending</span>
        <SwitchTabs
          data={["Day", "Week"]}
          onTabChange={onTimeWindowTabChange}
        />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
