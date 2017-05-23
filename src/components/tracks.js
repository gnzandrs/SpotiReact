import React from 'react'
import Track from './track'

export default class Tracks extends React.Component {
  render () {
    return (
      <div className="tracks">
        {
          this.props.tracks.map((track, i) => {
            return <Track
                      track = {track}
                      playTrack = {this.props.playTrack}
                      pauseTrack = {this.props.pauseTrack}
                      trackPlaying = {this.props.trackPlaying}
                      trackPaused =  {this.props.trackPaused}
                      key = {i}
                    />
          })
        }
      </div>
    )
  }
}
