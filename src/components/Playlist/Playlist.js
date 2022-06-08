import React from "react";
import Track from "../Track/Track";
import TrackList from "../TrackList/Tracklist";
import "./Playlist.css"

class Playlist extends React.Component{
    constructor(props){
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }

    render(){
        return(
            <div className="PlayList">
                <input onChange={this.handleNameChange} defaultValue={'New PlayList'} />
                <TrackList track={this.props.PlaylistTracks} isRemoval={true} onRemove={this.props.onRemove} />
                <button className="Playlist-save" onClick={this.props.onSave}>Save to Spotify</button>
            </div>
        )
    }
}
export default Playlist;