import { useHistory } from "react-router";
import { truncate } from "../../helper";

import "./BrowserCard.css";

const BrowserCard = ({
  newRelease,
  playList,
  part,
  album,
  artistAlbum,
  artistPlayList,
}) => {
  const history = useHistory();
  const prts = part && newRelease?.perma_url?.split("/");
  const prt = part && prts?.slice(-1)[0];

  return (
    <div>
      <div
        className="BrowserCards"
        onClick={() => {
          (playList &&
            newRelease?.listid &&
            history.push(`/playlist/${newRelease?.listid}`)) ||
            (artistPlayList &&
              newRelease?.id &&
              history.push(`/playlist/${newRelease?.id}`)) ||
            (album &&
              newRelease?.albumid &&
              history.push(`/album/${newRelease?.albumid}`)) ||
            (artistAlbum &&
              newRelease?.id &&
              history.push(`/album/${newRelease?.id}`)) ||
            (newRelease?.more_info?.album_id &&
              history.push(`/album/${newRelease?.more_info?.album_id}`)) ||
            (part && history.push(`/artist/${prt}`));
        }}
      >
        <div className="BrowserCard">
          {part ? (
            <img src={newRelease?.image_url} alt="Image" />
          ) : (
            <img src={newRelease?.image} alt="Iamge" />
          )}
        </div>
        {part ? (
          <p className="BrowserTitle">{newRelease?.name}</p>
        ) : (
          <>
            <p className="BrowserTitle">{truncate(newRelease?.title, 12)}</p>
            <p className="BrowserSubtitle">
              {truncate(newRelease?.subtitle, 15)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BrowserCard;
