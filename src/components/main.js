import React from 'react'
import Popup from 'react-popup'
import Header from './header'
import Search from './search'
import Tracks from './tracks'
import Footer from './footer'

export default class Main extends React.Component {

  constructor () {
    super ()
    this.baseUrl = 'https://api.spotify.com/v1'
    this.audio = null

    this.state = {
      tracks: [],
      trackPlaying: '',
      trackPaused: false,
      loading: false
    }

    this._searchTracks = this._searchTracks.bind(this)
    this._playTrack = this._playTrack.bind(this)
    this._pauseTrack = this._pauseTrack.bind(this)
  }

  async _searchTracks ({target}) {
      try {
        let {value} = target

        if (value) {
          let results = await fetch(`${this.baseUrl}/search?q=${value}&type=track`)
          let {tracks} = await results.json()
          this.setState({tracks: tracks.items})
        }
      }
      catch (err) {
        console.log('Error in _searchTracks: ' + err)
        Popup.alert('Error, please report.', 'Error');
        return
      }
      finally {
        console.log('_searchTracks ')
      }
  }

  _playTrack ({target}, preview, trackId) {
    try {
      if (preview === null) {
        Popup.alert('Spotify dont provides a mp3 to this track.', 'Error');
        return
      }

      if (this.audio) {
        if (trackId === this.state.trackPlaying) {
          this.audio.play()
          return this.setState({trackPaused: true})
        }

        this.audio.src = preview
        this.audio.play()
      }
      else {
          this.audio = new window.Audio(preview)
          this.audio.play()
      }

      this.setState({trackPlaying: trackId})

      this.audio.addEventListener('ended', (e) => {
        this.setState({trackPlaying: ''})
      })

      this.setState({trackPaused: true})
    }
    catch (err) {
      console.log('Error in _playTrack: ' + err)
      Popup.alert('Error, please report.', 'Error');
      return
    }
    finally {
      console.log('_playTrack')
    }
  }

  _pauseTrack () {
    try {
      this.setState({trackPaused: false})
      this.audio.pause()
    }
    catch (err) {
      console.log('Error in _pauseTrack: ' + err)
      Popup.alert('Error, please report.', 'Error');
      return
    }
    finally {
      console.log('_pauseTrack')
    }
  }

  render () {
    return (
      <div className="container">
        <Header />
        <Search searchTracks = {this._searchTracks} />
        <Tracks
          tracks = {this.state.tracks}
          playTrack = {this._playTrack}
          pauseTrack = {this._pauseTrack}
          trackPlaying = {this.state.trackPlaying}
          trackPaused = {this.state.trackPaused}
        />
        <Footer />
        <Popup />
      </div>
    )
  }
}
