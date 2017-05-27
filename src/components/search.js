import React from 'react'

export default class Search extends React.Component {
  render () {
    return (
            <div className="row">
              <div className="col-lg-4 col-lg-offset-4">
                <div className="input-group input-group-lg">
                  <input
                    type = 'text'
                    placeholder = 'Write the name of the song...'
                    onChange = {this.props.searchTracks}
                    className = "form-control"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>
    )
  }
}
