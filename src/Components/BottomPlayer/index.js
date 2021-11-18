import React, { useState, useEffect, useRef } from 'react';
import { BsFillPlayFill, BsFillSkipEndFill, BsFillSkipStartFill, BsPauseFill } from 'react-icons/bs';
import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff,  } from "react-icons/io"
import "./BottomPlayer.css";
import {useKeyPress} from '../../helper'

const BottomPlayer = ({ tracks, trackIndex, setTrackIndex }) => {

    // State
    const [trackProgress, setTrackProgress] = useState(0);
    const [volumeProgress, setVolumeProgress] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showVolumeBar, setShowVolumeBar] = useState(false);

    // keybindings
    const [volumeAvailable, setVolumeAvailable] = useState(true)
    const volumeUpKeypress = useKeyPress("ArrowUp")
    const volumeDownKeypress = useKeyPress("ArrowDown")
    const volumeKeypress = useKeyPress("m")

    useEffect(() => {
      volumeAvailable && volumeUpKeypress && changeVolume(volumeProgress + 0.1 > 1 ? 1 : volumeProgress + 0.1)
      volumeAvailable && volumeDownKeypress && changeVolume(volumeProgress - 0.1 < 0 ? 0 : volumeProgress - 0.1)
      volumeAvailable && volumeKeypress && changeVolume(volumeProgress === 0 ? 1 : 0)
    }, [volumeUpKeypress, volumeDownKeypress, volumeKeypress])

    // Refs
    const audioRef = useRef(new Audio(tracks[trackIndex]?.media_url));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;

    // useEffects
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying]);

    useEffect(() => {
      if (isPlaying){
        if (audioRef.current.paused) {
          setIsPlaying(false)
        }
      } else {
        if (!audioRef.current.paused) {
          setIsPlaying(true)
        }
      }
    }, [audioRef.current.paused])

    useEffect(() => {
      // Pause and clean up on unmount
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      }
    }, []);

    useEffect(() => {
      audioRef.current.pause();
    
      audioRef.current = new Audio(tracks[trackIndex]?.media_url);
        setTrackProgress(audioRef.current.currentTime);
        audioRef.current.volume = volumeProgress;
    
      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      } else {
        // Set the isReady ref as true for the next pass
        isReady.current = true;
      }
    }, [trackIndex]);

    const toPrevTrack = () => {
      if (trackIndex - 1 < 0) {
        setTrackIndex(tracks.length - 1);
      } else {
        setTrackIndex(trackIndex - 1);
      }
    }
      
    const toNextTrack = () => {
      if (trackIndex < tracks.length - 1) {
        setTrackIndex(trackIndex + 1);
      } else {
        setTrackIndex(0);
      }
    }

    const startTimer = () => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
  
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          toNextTrack();
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, [1000]);
    }

    const onScrub = (value) => {
        // Clear any timers already running
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
    
    const onScrubEnd = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsPlaying(true);
      }
      startTimer();
    }

    const changeVolume = (value) => {
      audioRef.current.volume = value;
      setVolumeProgress(audioRef.current.volume);
    }

    const formatTime = (value) => {
      const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
    }

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #00aa5b), color-stop(${currentPercentage}, #818181))
    `;
    const currentVolumePercentage = `${(volumeProgress / 1) * 100}%`;
    const volumeTrackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentVolumePercentage}, #00aa5b), color-stop(${currentVolumePercentage}, #818181))
    `;

    return (
        <div className="bottom-music-player">
          <MiniView data={tracks[trackIndex]} />
            <AudioControls
                isPlaying={isPlaying}
                onPrevClick={toPrevTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setIsPlaying}
                tracks={tracks}
            />
            <div className="progress-container">
              <input
                  type="range"
                  value={trackProgress}
                  step="1"
                  min="0"
                  max={duration ? duration : `${duration}`}
                  className="progress"
                  onChange={(e) => onScrub(e.target.value)}
                  onMouseUp={onScrubEnd}
                  onKeyUp={onScrubEnd}
                  style={{ background: trackStyling }}
                  disabled={tracks.length === 0 && true}
              />
            </div>
            <div className="timers"  style={tracks.length === 0 ? {color: "#818181"} : {color: "#fff"}}>{trackProgress ? formatTime(trackProgress) : "0:00"} / {duration ? formatTime(duration) : "0:00"}</div>
            <div className="volume-container">
              <button
              type="button"
              className="volume"
              aria-label="Volume"
              onClick={() => volumeProgress === 0 ? changeVolume(1) : changeVolume(0)}
              onMouseEnter={() => setShowVolumeBar(true)}
              onMouseLeave={() => setShowVolumeBar(false)}
              disabled={tracks.length === 0 && true}
              >
                  {volumeProgress > 0.5 ? (
                    <IoMdVolumeHigh />
                  ) : volumeProgress <= 0.5 && volumeProgress > 0 ? (
                    <IoMdVolumeLow />
                  ) : (
                    <IoMdVolumeOff />
                  )}
              </button>
              {showVolumeBar && 
              <div 
              className="volumebar-container"
              onMouseEnter={() => setShowVolumeBar(true)}
              onMouseLeave={() => setShowVolumeBar(false)} 
              >
                <input
                  type="range"
                  value={volumeProgress}
                  step="0.01"
                  min="0"
                  max="1"
                  className="progress volumebar"
                  onChange={(e) => changeVolume(e.target.value)}
                  onFocus={() => setVolumeAvailable(false)}
                  onBlur={() => setVolumeAvailable(true)}
                  style={{ background: volumeTrackStyling }}
                  disabled={tracks.length === 0 && true}
                />
              </div>}
            </div>
        </div>
    )
}

export default BottomPlayer

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick, tracks }) => {
  const [playPauseAvailable, setPlayPauseAvailable] = useState(true)
  const keypress = useKeyPress(" ")

  useEffect(() => {
    playPauseAvailable && keypress && onPlayPauseClick(!isPlaying)
  }, [keypress])

    return (
        <div className="audio-controls">
            <button
            type="button"
            className="prev"
            aria-label="Previous"
            onClick={onPrevClick}
            disabled={tracks.length === 0 && true}
            >
                <BsFillSkipStartFill />
            </button>
            {isPlaying ? (
            <button
                type="button"
                className="pause"
                onClick={() => onPlayPauseClick(false)}
                onFocus={() => setPlayPauseAvailable(false)}
                onBlur={() => setPlayPauseAvailable(true)}
                aria-label="Pause"
                disabled={tracks.length === 0 && true}
            >
                <BsPauseFill />
            </button>
            ) : (
            <button
                type="button"
                className="play"
                onClick={() => onPlayPauseClick(true)}
                onFocus={() => setPlayPauseAvailable(false)}
                onBlur={() => setPlayPauseAvailable(true)}
                aria-label="Play"
                disabled={tracks.length === 0 && true}
            >
                <BsFillPlayFill style={{ marginLeft: "4px" }} />
            </button>
            )}
            <button
            type="button"
            className="next"
            aria-label="Next"
            onClick={onNextClick}
            disabled={tracks.length === 0 && true}
            >
                <BsFillSkipEndFill />
            </button>
        </div>
    )
}

const MiniView = ({ data }) => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  
  return (
        <div
          className="mini-view"
        >
          <div className="content-image">
            <img
              src={data?.image}
              alt={data?.song}
            />
          </div>
          <div className="content">
            <div className="song-name">{truncate(data?.song, 55)}</div>
            <div className="artist-names">
              {truncate(data?.primary_artists, 60)}
            </div>
          </div>
        </div>
  )
}
