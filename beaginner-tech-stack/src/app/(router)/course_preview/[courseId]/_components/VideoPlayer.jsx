import React from 'react'

const VideoPlayer = ({videoUrl}) => {
  return (
    <div className='flex justify-center'>
      <video
      width={600}
      height={250}
      controls
      className='rounded-[7px] '
      > 
        <source src={videoUrl} type='video/mp4'/>
      </video>
    </div>
  )
}

export default VideoPlayer
