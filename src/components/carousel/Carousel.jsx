import React, { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

import "./carousel.scss";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const renderSkeletonItem = () => (
    <div className="skeleton-item">
      <div className="poster-block skeleton"></div>
      <div className="text-block">
        <div className="title skeleton"></div>
        <div className="date skeleton"></div>
      </div>
    </div>
  );

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carousel-title">{title}</div>}
        <FaArrowAltCircleLeft
          className="carousel-left-nav arrow"
          onClick={() => navigation("left")}
        />
        <FaArrowAltCircleRight
          className="carousel-right-nav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carousel-items" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              // console.log(posterUrl);
              return (
                <div
                  key={item.id}
                  className="carousel-item"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="poster-block">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="text-block">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_date || item.first_air_date).format(
                        "MMM D, YYYY"
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loading-skeleton">
            {Array.from({ length: 5 }).map((_, index) => (
              <React.Fragment key={index}>
                {renderSkeletonItem()}
              </React.Fragment>
            ))}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;