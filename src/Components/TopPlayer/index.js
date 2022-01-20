import React from 'react'
import './TopPlayer.css'

const TopPlayer = ({ tracks, current}) => {
    const data = tracks[current]
    return (
        <div className="top-player-container">
            <div className="top-player">
                <div className="poster-image">
                    <img
                    src={data?.image}
                    alt={data?.song}
                    />
                </div>
                <h1>{data?.song}</h1>
                <p>{data?.primary_artists}</p>
            </div>
        </div>
    )
}

export default TopPlayer
