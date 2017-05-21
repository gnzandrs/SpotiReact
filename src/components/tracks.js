import React from 'react'
import Track from './track'

function Tracks ({tracks}) {
  return (
    <div className="tracks">
      {
        tracks.map((track, i) => {
          return <Track track = {track} key = {i} />
        })
      }
    </div>
  )
}

export default Tracks
