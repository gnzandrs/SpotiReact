import React from 'react'
import PlaySvg from './play-svg'
import PauseSvg from './pause-svg'

export default class Track extends React.Component {
  render () {
    const {url} = this.props.track.album.images[1]
    const isTrackPlaying = this.props.track.id === this.props.trackPlaying && this.props.trackPaused ? 'Waves' : ''

    return (
      <article className='track' style={{backgroundImage:  `url(${url})`}}>
        <div className='track-info'>
          <h4>{this.props.track.name}</h4>
          <PlaySvg
            preview = {this.props.track.preview_url}
            playTrack = {this.props.playTrack}
            trackId = {this.props.track.id}
            isTrackPlaying = {isTrackPlaying}
            trackPaused = {this.props.trackPaused}
          />
          <PauseSvg
            isTrackPlaying = {isTrackPlaying}
            trackPaused = {this.props.trackPaused}
            pauseTrack = {this.props.pauseTrack}
          />
        </div>
        <div className="{isTrackPlaying}">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <span />
      </article>
    )
  }
}
