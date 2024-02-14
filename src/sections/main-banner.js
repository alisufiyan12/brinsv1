/** @jsx jsx*/
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import {Link as Blink} from 'next/link';
import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import ReactPlayer from 'react-player';
import { IoIosPlay } from 'react-icons/io';
import { FaStar, FaPlay, FaAngleRight } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';


import videoImg from 'assets/video.png'
import videoImgs from 'assets/agen_vid.gif'
import SectionHeader from 'components/section-header';


const demo_video = [
    {
      url: "4exCJnUlLuY"
    },
];

export default function Mainbanner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  }; 
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
        <SectionHeader
          slogan="our strategy"
          title="How We Scale Brands To 7-Figure Months"
        />
        </Box>

        <Box sx={styles.videoBox}>
          <Image src={videoImgs} alt="" />
          <Link
            path="/"
            aria-label="video btn"
            onClick={handleClick}
            sx={styles.videoBtn}
            >
            <FaPlay />
          </Link>
        </Box>
      </Container>
      <Box sx={styles.contentBox}>
        <a href="https://calendly.com/members-exclusive/45min">
        <Button variant="primary">Learn More</Button>
        </a>
      </Box>
        {demo_video.map((item) => (
          <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId={item.url}
        onClose={() => setVideoOpen(false)}
        />
        ))}
    </section>
  );
}





const styles = {
  contentBox: {
    width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
    mx: 'auto',
    textAlign: 'center',
    mb: ['40px', null, null, null, null, 7],
    mt: ['40px', null, null, null, null, 7],

  },
  video: {
    pt: [80, null, null, null, null, null, 40],
    textAlign: 'center',
    h3: {
      margin: 0,
      color: 'white',
      fontSize: [5, null, null, '21px', '36px', '32px', 8],
      letterSpacing: ['-0.5px', null, null, null, null, '-1.5px'],
      fontWeight: 'bold',
      lineHeight: [1.6, null, null, 1.25],
    },
    p: {
      fontSize: ['15px', null, null, '17px'],
      lineHeight: ['26px', null, null, 2],
      mt: ['10px', null, null, null, '25px'],
      mb: ['0px', null, null, null, '20px'],
    },
    br: {
      display: ['none', null, null, 'inherit'],
    },
  },
  videoBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '>img': {
      borderRadius: '10px',
      display: 'flex',
      width: ['100%', null, null, null, '80%', null, '80%'],
    },
  },
  videoBtn: {
    //opacity: '50%',
    width: [44, null, 44, 66, 120],
    height: [44, null, 44, 66, 120],
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    transition: '500ms ease',
    svg: {
      fontSize: ['15px', null, '15px', null, '22px', '35px'],
      color: ['primary'],
    },
    '&:hover': {
      opacity: '50%',
      backgroundColor: 'primary',
      svg: {
        color: '#fff',
      },
    },
  },
  videowrapper:{
    position: 'relative',
    paddingTop: '56.25%',
    borderRadius: '5px',
  },
  videoPlay: {
    boxShadow: '0px 8px 23px -3px rgba(158,158,158,0.79)',
    borderRadius: '5px',
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  banner: {
    pt: ['10px', '145px', '155px', '170px', null, null, '180px', '40px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: ``,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: ``,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['10px', null, null, null, null, 7],
    },
    stars: {
      marginTop: ['0', null, null, null, null, '40px'],
      marginBottom: '20px',
      display: 'flex',
      color: '#02073E',
      fontSize: ['15px'],
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: 1,
      svg: {
        color: 'primary',
        '+svg': {
          marginLeft: ['3px', null, '5px'],
        },
        '&:last-of-type': {
          color: 'rgba(2, 7, 62, 0.2)',
          marginRight: '10px',
        },
      },
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
    },
};
