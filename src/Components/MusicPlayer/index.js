import { motion } from "framer-motion";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { WaveContext } from "../../WaveContext";
import BottomPlayer from "../BottomPlayer";
import NowPlayingPlaylist from "../NowPlayingPlaylist";
import TopPlayer from "../TopPlayer";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const { currentPlayList, trackIndex, setTrackIndex, fullView, setFullView } =
    useContext(WaveContext);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    forceUpdate();
  }, [currentPlayList]);

  return (
    <div>
      {currentPlayList.length !== 0 && (
        <motion.div
          className="top-section"
          style={{ y: 2000 }}
          animate={fullView ? { y: 0 } : { y: 2000 }}
          transition={
            fullView
              ? { duration: 0.4, delay: 0 }
              : { duration: 0.4, delay: 0.2 }
          }
        >
          <div className="left-section">
            <TopPlayer tracks={currentPlayList} current={trackIndex} />
          </div>
        </motion.div>
      )}
      {currentPlayList.length !== 0 && !isMobile && (
        <NowPlayingPlaylist
          tracks={currentPlayList}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          fullView={fullView}
        />
      )}
      <BottomPlayer
        tracks={currentPlayList}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        fullView={fullView}
        setFullView={setFullView}
        isMobile={isMobile}
      />
    </div>
  );
};

export default MusicPlayer;
