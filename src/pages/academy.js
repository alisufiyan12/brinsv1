/** @jsx jsx */
import React from 'react';
import { jsx, Box, Container, Image,Flex,  Grid, Button, Input, Heading, Text, Link as Lank } from 'theme-ui';
import um from '../assets/under_maintenance_img.svg'


import { Link as Pink} from '../components/link';
import data from '../components/footer/footer.data';
import FooterLogo from 'assets/logo.svg';

import icc1 from '../assets/mytick.png'
import cs1 from '../assets/cs1.png';

import sc1 from '../assets/sc1.png'



const academy = () => {
  return (
<Box  sx={styles.banner}>
      <Container  sx={styles.container}>
        <Box  sx={styles.content}>
        <Lank href='/'>
          <Button sx={styles.mybutton} variant="primary">Home</Button>
        </Lank>
            <Box sx={styles.imgbox}>
                <Image sx={styles.img} src={um}/>
            </Box>
        <Heading sx={styles.mytit}>Under Maintenance</Heading>
        <Text  sx={styles.mydesc}>We are adding new course content to the academy, the website will be up again soon<br/> Thanks for your patience</Text>
        </Box>


      <footer  sx={styles.footer}>
                    <Container>
                        <Box sx={styles.footer.footerBottomArea}>
                        <Pink path="/">
                            <Image src={FooterLogo} alt="Logo" />
                        </Pink>
                        <Box sx={styles.footer.menus}>
                            <nav>
                            {data.menuItem.map((item, i) => (
                                <Pink
                                path={item.path}
                                key={i}
                                label={item.label}
                                sx={styles.footer.link}
                                />
                                ))}
                            </nav>
                        </Box>
                        <Text sx={styles.footer.copyright}>
                            Copyright by {new Date().getFullYear()} @<a sx={styles.mylink} href="https://brinsol.agency">Brinsol</a>
                        </Text>
                        </Box>
                    </Container>
                    </footer>
      </Container>
    </Box>  )
}

export default academy;

const styles = {
  mybutton: {
    border: '2px solid',
    borderColor: '#EA3A60',
    color: '#FFFFF',
    bg: '#EA3A60',
    padding: ['10px 15px', null, '15px 30px'],        
    fontFamily: "'DM Sans', sans-serif",
    borderRadius: '45px',
    fontSize: ['14px', null, null, 2],
    letterSpacings: '-0.15px',
    padding: ['12px 20px', null, '15px 30px'],
    cursor: 'pointer',
    lineHeight: 1.2,
    transition: 'all 0.25s',
    fontWeight: 500,
    mb: '10px',
    '&:hover': {
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
      },
    },
    '&:focus': {
        outline: 0,
    },
},
  footer: {
    fontFamily: "'DM Sans', sans-serif",
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [4, null, 4],
      pb: ['10px', null, '0px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 1,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: '#343D48',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: '#EA3A60',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
    imgbox:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
      },
      img:{
      mt: ['120px', null, null, null, '60px', null, '0'],
      width: ['100%', '80%', null, 1080, 400, 430, null, 485],
      
    },
    mytit:{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
        color: '#0F2137',
        lineHeight: [1.3, null, null, null, 1.2],
        fontWeight: '700',
        letterSpacing: '-.5px',
        textAlign: 'center',
        mb: 2,
        '@media screen and (max-width:1220px)': {
            textAlign: 'center',
        },
    },
    mydesc: {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: ['15px', 2, null, null, null, '17px', null, 3],
        lineHeight: [1.85, null, null, 1.5, null, '2.2'],
        color: '#343D48',
        mb: ['120px', null, null, null, '20px', null, '0'],
        ml:4,
        textAlign: 'center',
        '@media screen and (max-width:1220px)': {
            textAlign: 'center',
            ml:2,
        },
    },
    banner: {
        pt: ['40px', null, null, null, '120px', '100px'],
        pb: ['50px', null, null, null, '60px', null, '0'],
        backgroundColor: '#FFFFF',
        overflow: 'hidden',
    },
    container: {
            maxWidth: ['100%',null,null,'1600px','2100px',],
          px: [4, 6],
    },
content: {
},
}