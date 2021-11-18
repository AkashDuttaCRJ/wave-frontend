import React, { useContext, useEffect, useReducer } from 'react'
import { WaveContext } from '../../WaveContext'
import BottomPlayer from '../BottomPlayer'
import NowPlayingPlaylist from '../NowPlayingPlaylist'
import TopPlayer from '../TopPlayer'
import './MusicPlayer.css'

const MusicPlayer = () => {
  const { currentPlayList, trackIndex, setTrackIndex, fullView } = useContext(WaveContext)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    forceUpdate();
  }, [currentPlayList])

  return (
    <div>
      {fullView && <div className="top-section">
        <div className="left-section">
          <TopPlayer tracks={currentPlayList} current={trackIndex} />
        </div>
      </div>}
      {currentPlayList.length !== 0 && <NowPlayingPlaylist tracks={currentPlayList} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />}
      <BottomPlayer tracks={currentPlayList} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
    </div>
  )
}

export default MusicPlayer
