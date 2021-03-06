import React, { useContext, useEffect, useRef, useState } from "react";
import "./NowPlayingPlaylist.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { WaveContext } from "../../WaveContext";
import { motion } from "framer-motion";

const NowPlayingPlaylist = ({ tracks, trackIndex, setTrackIndex, fullView }) => {
  const [hover, setHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState();

  const itemRef = useRef(new Array());
  const items = useRef();

  const { favourites, setFavourites } = useContext(WaveContext);

  useEffect(() => {
    itemRef.current[trackIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "end",
    });
  }, [trackIndex]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  const deleteitem = (id) => {
    setFavourites(favourites.filter((item) => item != id));
  };
  const handleClick = (id) => {
    favourites?.includes(id)
      ? deleteitem(id)
      : setFavourites((pv) => (favourites?.length === 0 ? [id] : [...pv, id]));
  };
  return (
    <motion.div className="now-playing"
      style={{x: 440, y: -250}}
      whileHover={fullView ? {x: -155, y: -250} : {x: -20, y: -250}}
      animate={fullView ? {x: -155, y: -250} : {x: 440, y: -250}}
      transition={fullView ? { duration: 0.5, delay: 0.2 } : { duration: 0.5, delay: 0 }}
    >
      <div className="queue-header">
        <div>Queue</div>
      </div>
      <div className="np-items" ref={items}>
        {tracks.map((track, index) => {
          return (
            <div
              ref={(el) => itemRef.current.push(el)}
              key={index}
              className="np-item"
              onClick={() => setTrackIndex(index)}
              onMouseEnter={() => {
                index !== trackIndex && setHover(true);
                setHoverIndex(index);
              }}
              onMouseLeave={() => {
                hover && setHover(false);
              }}
            >
              <div className="np-item-image">
                {((hover && hoverIndex === index) || trackIndex === index) && (
                  <div className="np-item-image-overlay"></div>
                )}
                <img src={track.image} alt={track.song} />
              </div>
              <div className="np-item-content">
                <div className="np-item-song-name">
                  {truncate(track.song, 35)}
                </div>
                <div className="np-item-artist-names">
                  {truncate(track.primary_artists, 40)}
                </div>
              </div>
              <div
                className="fav-icon"
                onClick={(e) => {
                  hoverIndex == index && handleClick(track?.id);
                  e.stopPropagation();
                }}
              >
                {favourites?.includes(track?.id) ? (
                  <AiFillHeart size={25} />
                ) : (
                  <AiOutlineHeart size={25} />
                )}
              </div>

              <div className="np-item-duration">
                {formatTime(track.duration)}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default NowPlayingPlaylist;
