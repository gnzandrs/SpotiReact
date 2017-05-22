import React from 'react'
import Track from './track'

function Tracks ({tracks, playTrack, pauseTrack, trackPlaying, trackPaused}) {
  return (
    <div className="tracks">
      {
        tracks.map((track, i) => {
          return <Track
                    track = {track}
                    playTrack = {playTrack}
                    pauseTrack = {pauseTrack}
                    trackPlaying = {trackPlaying}
                    trackPaused =  {trackPaused}
                    key = {i}
                  />
        })
      }
    </div>
  )
}

export default Tracks
