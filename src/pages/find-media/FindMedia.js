import _ from "lodash";
import React, { useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import * as repository from "../../repository/media/MediaRepository";
import ListMedia from "../../components/list/display-media/ListMedia";

const FindMedia = () => {
  const [mediaData, setData] = useState([]);

  useEffect(() => {
    repository.getMedia().then(medias => setData(medias));
  }, [setData]);

  const isEmptyList = _.isEmpty(mediaData) ? false : true;

  return (
    <div style={{ flex: 1 }}>
      <p className="title">Lista de todas as mídias</p>
      <div>
        <LinearProgress hidden={isEmptyList} />
      </div>
      <ListMedia mediaData={mediaData.reverse()} />
    </div>
  );
};

export default FindMedia;
