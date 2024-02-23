import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import MovieBanner from "./infoBanner/InfoBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Info = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: creditsData, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );

    return (
        <div>
            <MovieBanner video={data?.results?.[0]} crew={creditsData?.crew} />
            <Cast data={creditsData?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} />
        </div>
    );
};

export default Info;