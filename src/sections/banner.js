/** @jsx jsx */
import React from 'react';
import { jsx, Box, Container, Grid, Button, Input, Heading, Text, Link } from 'theme-ui';

import { FaStar } from 'react-icons/fa';
import Image from 'components/image';

import img1 from 'assets/ss2.svg';
import img2 from 'assets/ss3.svg';
import img3 from 'assets/ss4.svg';
import img4 from 'assets/ss5.svg';
import img5 from 'assets/mobile-1.svg'
import img55 from 'assets/mobile-1.png'
import img6 from 'assets/mobile-2.svg'
import img66 from 'assets/mobile-2.png'

import bannerImg from 'assets/banner-image-1-1.png';

const Banner = () => {
  return (
    <Box sx={styles.banner} id="banner">
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
          <Text sx={styles.mypart} >RESULTS OBSSESSED</Text>
            <Heading sx={styles.mytit}>
            DTC Growth Partners For Brands With Big Ideas
            </Heading>
            <Text sx={styles.mydesc} as="p">
            We're omni-channel e-commerce web design & growth experts obsessed with high-performance.
            </Text>
              
            <Box sx={styles.partner}>
              <Text style={{color: "#46484E"}} as="span">Partnered with:</Text>
              <Box as="div">
                <Image src={img1} alt="" />
              </Box>
              <Box as="div">
                <Image src={img2} alt="" />
              </Box>
              <Box as="div">
                <Image src={img3} alt="" />
              </Box>
              <Box as="div">
                <Image src={img4} alt="" />
              </Box>
            </Box>
            <Link href="https://form.jotform.com/240232603540442">
              <Box sx={styles.contentBox}>
              <Button sx={styles.mibutton} variant="primary">
                Start Application
              </Button>
              </Box>
                </Link>
          </Box>
          <Box  sx={styles.image}>
            <Image src={img55} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {

  contentBox: {
    //width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
    mx: 'auto',
    //textAlign: 'center',
    mb: ['40px', null, null, null, null, 2],
    mt: ['40px', null, null, null, null, 2],
    '@media screen and (max-width:1220px)': {
      textAlign: 'center',
    },
  },
  mibutton:{
    '@media screen and (max-width:1220px)': {
    },
  },
  mydesc: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px',
    '@media screen and (max-width:1220px)': {
      textAlign: 'center',
    },
  },
  mypart:{
    fontSize: [0, null, 1],
    color: 'primary',
    textTransform: 'uppercase',
    fontWeight: '700',
    mb: [2, 3],
    lineHeight: 1.5,
    letterSpacing: ['1.5px', null, '2px'],
    '@media screen and (max-width:1220px)': {
      textAlign: 'center',
    },
  },
  mytit:{
      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
      '@media screen and (max-width:1220px)': {
        textAlign: 'center',
      },
  },
  pers:{
    variant: 'sectionHeader.subTitle',
    opacity: 0.7,
    textAlign: 'Left',
  },
  banner: {
    pt: ['110px', null, null, null, '150px', '200px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    backgroundColor: '#FFFFF',
    overflow: 'hidden',
  },
  stars: {
    marginTop: ['0', null, null, null, null, '40px'],
    marginBottom: '20px',
    display: 'flex',
    color: 'yellow',
    fontSize: ['15px'],
    alignItems: 'center',
    lineHeight: 1,
    svg: {
      color: '#EF9E48',
      '+svg': {
        marginLeft: ['3px', null, '5px'],
      },
      '&:last-of-type': {
        color: '#A7A9B0',
        marginRight: '10px',
      },
    },
  },
  container: {
    width: [null, null, null, null, null, null, '1390px'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gridGap: '0',
  },
  content: {
    h1: {
      color: '#0F2137',
      fontWeight: 'bold',
      lineHeight: [1.39],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '20px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
      fontSize: [6, null, null, '56px', null, '75px', 9],
    },
    h3: {
      lineHeight: 1.18,
      color: '#0F2137',
      fontWeight: 'bold',
      position: 'relative',
      width: '100%',
     // fontSize: ['28px', '35px', null, '45px', null, '50px', '85px'],
      fontSize: ['22px', '28px', null, '38px', null, '40px', '70px'],
      maxWidth: ['500px', null, null, null, null, null, '100%'],
      '&:before': {
        content: '""',
        width: ['290px', null, null, null, null, '260px', '381px'],
        height: '15px',
        backgroundImage: ``,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        bottom: '-15px',
        right: ['15px', null, null, null, null, '140px', '100px'],
        display: ['none', null, null, null, null, 'block'],
      },
    },
    p: {
      lineHeight: 2.33,
      color: '#02073E',
      marginTop: ['10px', null, null, '35px'],
      fontSize: ['15px', '18px'],
      pr: ['15px', 0],
      br: {
        display: ['none', null, null, null, null, 'block'],
      },
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 15px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px'],
    },
  },
  image: {
    img: {
      display: 'flex',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['5', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, '120%', null, null, '100%'],
    },
  },
  partner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['20px'],
    '> div + div': {
      ml: ['5px', null, null, '20px', null, '5px'],
    },
    '@media screen and (max-width:1220px)': {
      textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
      display: 'flex',
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#9B9EA4',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto'],
    },
  },
};
