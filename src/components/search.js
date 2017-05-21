import React from 'react'

function Search ({searchTracks}) {
    return (
            <div className="row">
              <div className="col-lg-4 col-lg-offset-4">
                <div className="input-group">
                  <input
                    type = 'text'
                    placeholder = 'Write the name of the song...'
                    onChange = {searchTracks}
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

export default Search
