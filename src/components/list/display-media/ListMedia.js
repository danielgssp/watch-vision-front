import "./media-list.css";
import React from "react";
import moment from "moment";
import StarRatings from "react-star-ratings";
import Divider from "@material-ui/core/Divider";

const ListMedia = props => {
  return props.mediaData.map(media => (
    <ul key={media._id} className="list">
      <li>
        <b>{media.mediaType}</b>
      </li>
      <li>Nome: {media.mediaName}</li>
      <li>
        Avaliação:
        <StarRatings
          isSelectable={false}
          rating={media.ratingMedia}
          starRatedColor="#ffd700"
          starDimension="25px"
          starSpacing="0.1px"
        />
      </li>
      <li>Continuações: {media.seasonsAmount}</li>
      <li>Cadastro em: {moment(media.date).format("DD/MM/YYYY")}</li>
      <Divider />
    </ul>
  ));
};

export default ListMedia;
