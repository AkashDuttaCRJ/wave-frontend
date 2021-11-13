import React, { useEffect, useRef, useState } from 'react'
import './NowPlayingPlaylist.css'

const NowPlayingPlaylist = ({ tracks, trackIndex, setTrackIndex }) => {
    const [hover, setHover] = useState(false)
    const [hoverIndex, setHoverIndex] = useState()

    const itemRef = useRef(new Array())
    const items = useRef()

    useEffect(() => {
        itemRef.current[trackIndex].scrollIntoView({ 
            behavior: "smooth", 
            block: "center",
            inline: "end"
         })
    }, [trackIndex])

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      };

    const formatTime = (value) => {
        const minutes = Math.floor(value / 60);
        const seconds = Math.floor(value % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
      }
    
    return (
        <div className="now-playing" ref={items}>
            {tracks.map((track, index) => {
                return (
                <div 
                    ref={(el) => (itemRef.current.push(el))}
                    key={index} 
                    className="np-item"
                    onClick={() => setTrackIndex(index)}
                    onMouseEnter={() => {
                        index !== trackIndex && (setHover(true))
                        setHoverIndex(index)
                    }}
                    onMouseLeave={() => {
                        hover && setHover(false)
                    }}
                >
                    <div className="np-item-image">
                            {((hover && hoverIndex === index) || trackIndex === index) && <div className="np-item-image-overlay"></div>}
                            <img
                            src={track.image}
                            alt={track.song}
                            />
                    </div>
                    <div className="np-item-content">
                        <div className="np-item-song-name">{truncate(track.song, 35)}</div>
                        <div className="np-item-artist-names">
                        {truncate(track.primary_artists, 40)}
                        </div>
                    </div>
                    <div className="np-item-duration">{formatTime(track.duration)}</div>
                </div>)
            })}
        </div>
    )
}

export default NowPlayingPlaylist
