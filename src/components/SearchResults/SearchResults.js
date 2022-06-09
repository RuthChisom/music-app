import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component{
    render(){
        return(
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd}></TrackList>
                {/* {this.props.tracks.map(track=>{
                    return(
                        <track track={track} key={track.id} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} onRemove={this.props.onRemove} />
                    )
                })} */}
            </div>
        )
    }
}

export default SearchResults;