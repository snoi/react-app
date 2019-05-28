import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, handleVideoSelect}) => {
    const renderedVideos = videos.map((video, index) => {
        return <VideoItem index={index} key={index} video={video} 
            handleVideoSelect={handleVideoSelect} />
    })

    //video.id.videoId

    // loadMore = () => {
    //     this.props.handleLoadMore(this.state.term)
    // }

    return <div className='ui relaxed divided list'>
            {renderedVideos}
        </div>
}

export default VideoList