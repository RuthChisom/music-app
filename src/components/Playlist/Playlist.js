import React from "react";
import "./Playlist.css"
import TrackList from "../TrackList/TrackList.js";

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