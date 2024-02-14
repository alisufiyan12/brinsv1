/** @jsx jsx*/
import { jsx, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useVideoDispatch } from 'contexts/video/video.provider';
import ModalVideo from 'react-modal-video';

const data = [
  {
    id: 1,
    url: 'ASwSaaGjlkQ'
    //jordan bown course
  },
  {
    id: 2,
    url: 'z8RVnPRNQvo'
    //today i am going to breakdown
  },
  {
    id: 3,
    url: 'P68wvxXQcYY'
    //tiktok creativity video
  },
  
]


const VideoBtn = (props) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={{ variant: 'section.services' }}>
    <Button
      className="videoBtn"
      aria-label="play Video"
      sx={styles.videoBtn}
      onClick={handleClick}
      
    >
      <FaPlay />
    </Button>
    {data.map((item) => (
      <ModalVideo  
        channel="youtube"
        isOpen={videoOpen}
        videoId={item.url}
        onClose={() => setVideoOpen(false)}
      />
    ))}
    </section>
  );
};

export default VideoBtn;



const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  videoBtn: {
    width: '92px',
    borderRadius: '50%',
    height: '92px',
    backgroundColor: 'rgba(255,255,255, .5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    textAlign: 'center',
    color: '#fff',
    cursor: 'pointer',
    transition: '500ms',
    svg: {
      position: 'relative',
      left: '5px',
      fontSize: '35px',
    },
    '&:hover': {
      backgroundColor: 'primary',
      color: '#fff',
    },
  },
};
