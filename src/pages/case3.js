/** @jsx jsx */

import React from 'react';
import { jsx, Box, Container, Image,Flex,  Grid, Button, Input, Heading, Text, Link as Lank } from 'theme-ui';



import { Link as Pink} from '../components/link';
import data from '../components/footer/footer.data';
import FooterLogo from 'assets/logo.svg';

import icc1 from '../assets/mytick.png'
import sc3 from '../assets/sc3.png'


import cs1 from '../assets/cs3.png';

const case3 = () => {
  return (
    <Box  sx={styles.banner}>
      <Container  sx={styles.container}>
        <Box sx={styles.content}>
        <Lank href='/'>
                    <Button sx={styles.mybutton} variant="primary">Home</Button>
                    </Lank>
          <Box  sx={styles.imgbox}>
                  <Image sx={styles.img}  src={cs1} />
          </Box>
        </Box>
                    <Heading style={{
                        fontSize: '40px',
                      }} sx={styles.mytit}>Spent Rs.401k in 15 Days at 8.18x ROAS</Heading>

                    <Box >
                        <Heading sx={styles.mytitl}>The Challenge</Heading>
                          <Text style={{}} sx={styles.mydesc}>
                            <ul>
                              <li>Scale and maintain large ad budgets whilst battling ad fatigue
                                  </li>
                                  <li>Develop brand positioning for increased customer response
                                  </li>
                                  <li>
                                  Market and scale internationally
                                  </li>
                            </ul>
                          </Text>


                          <Heading sx={styles.mytitl}>The Result</Heading>
                          <Text style={{}} sx={styles.mydesc}>
                            <ul>
                              <li>527% Revenue increase from the previous year
                                  </li>
                                  <li>Increasing returning customer rate to 21%
                                  </li>
                                  <li>
                                  Achieving a 24-hour sales record of $364k
                                  </li>
                            </ul>
                          </Text>

                            <Image sx={styles.imgs} src={sc3} />
                            <br/><br/>
                            <Heading style={{paddingBottom: '10px'}} sx={styles.mytitl}>What you will learn from this case study</Heading>
                            <Box sx={styles.myicondesc}>
                            <Image sx={styles.icon} src={icc1} />
                            <span style={{marginLeft: '4px', fontSize: '16px',}}>Why branding is essential for next-level growth.</span><br/>
                            <Image sx={styles.icon} src={icc1} />  
                            <span style={{marginLeft: '4px', fontSize: '16px',}}>How to broaden your market internationally.</span><br/>
                            <Image sx={styles.icon} src={icc1} />  
                            <span style={{marginLeft: '4px', fontSize: '16px',}}>How to structure FB ad accounts for rapid scaling.</span><br/>
                            <Image sx={styles.icon} src={icc1} />  
                            <span style={{ justifyContent: 'center', alignItems: 'center', fontSize: '16px'}}>How to leverage new opportunities when they appear.</span><br/>
                            </Box> 

                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Introduction</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            When we first started working with this brand we initially performed prescriptive analysis (PA). 
                            PA allows us to gain a full understanding of what marketing techniques had been previously used 
                            to scale the business to a respectable monthly revenue of just over $1m.<br/><br/>

                            In addition, our research showed us exactly where our focus needed to be in order to increase ad 
                            spend with a profitable return. Ultimately this is what led to our decision-making process that 
                            increased revenue by 5X.<br/>
                            </Text>
                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Branding</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            A big focus for this brand right before we began to scale spending was to nail the branding. 
                            A store will make you a million but a brand will make you a billion. At Brinsol we are strong 
                            believers that your lifetime value metrics will depend greatly on the message that your brand portrays. <br/><br/>

                            This brand sells clothing and accessories to the blue-collar niche so we wanted to make sure that our 
                            messaging was authentic to the day to day work of the blue-collar marketplace. We did multiple branding 
                            days with the business to nail down the mission statement of the company. Once the mission statement was 
                            in place we could make sure that our marketing across all platforms was aligned with that statement. That's when 
                            results started to explode.<br/>
                            </Text>

                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>International Scaling
</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            During our analysis phase, we discovered that there was an untapped marketplace in Mexico. The product 
                            and brand were a perfect fit and so we decided to launch ads and email campaigns by translating the language 
                            to Spanish. With our ads, we decided to keep the targeting completely broad and the Facebook algorithm rewarded 
                            us for doing so.<br/>
                            </Text>


                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>8 Figure Ad Account 
</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            We have spent the past few years trialling new Facebook ad account structures to allow us to scale as aggressively
                             as possible. Our most impactful strategy called the ‘Bid Mitigation Strategy’ was used in this business which 
                             ultimately allowed us to scale spend to new heights.<br/><br/>

                              The bid mitigation strategy is structured in the following way…<br/><br/>

                              1X ABO Campaign per country (For testing)<br/><br/>

                              1X CBO Campaign (Scaling)<br/><br/>

                              1X Minimum ROAS campaign (Maintaining)<br/><br/>

                              1X Cost Cap Campaign (Stabilising)<br/><br/>

                              In essence, this ad account structure means we can play campaigns off each other and make sure they achieve 
                              a minimum profitable ROI. Each ad campaign uses a different bid strategy and so is made responsible for 
                              achieving the desired result as we continuously increase the budget.<br/><br/>

                              Of course, the ad account structure is not just the only aspect of a successful marketing funnel… An 
                              effective and reliable flow of new content is key to scaling without encountering ad fatigue. We are 
                              currently writing 7 new ad scripts and pieces of copy every week to launch relentless testing to maintain 
                              the massive growth.<br/>
                            </Text>

                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Omnichannel Expansion
</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            With all of our clients, we are constantly looking at new ways to increase profitability and scale at TOF. 
                            TikTok is currently a goldmine of opportunity for brands to break into and with the proper guidance can be 
                            extremely lucrative. <br/><br/>

                            With our current success on Facebook for this brand, we decided to tweak the video ads into a TikTok style 
                            format. With just a few minor changes, we turned on the tap of another highly profitable TOF source.<br/><br/>

                            Omnichannel marketing is often the end game for large companies like this. As Facebook and TikTok progressed… 
                            We then took control of all marketing channels for the business. Including, FB, Insta, TikTok, Google ads, 
                            Email marketing, CRO, and Ad content editing. <br/>
                            </Text>

                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Conclusion</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            There is a multitude of techniques that need the implementation to scale brands to 8 figures.<br/><br/>

                            Each marketing platform has certain nuances that require true specialist capabilities to achieve good 
                            results. Advancing each one of these specialisms must remain the sole focus of marketing in order to 
                            scale and maintain competitiveness.<br/>
                            </Text>
                          </Box>

                            <Box sx={styles.btnbox}>
                              <Lank href="https://form.jotform.com/240232603540442">
                              <Button sx={styles.mybutton}>Start Application</Button>
                              </Lank>
                            </Box>









      <footer sx={styles.footer}>
                    <Container>
                        {/*}
                        <Grid sx={styles.widgets}>
                        {data.widgets.map((item) => (
                            <Box
                            key={`footer-widget--key${item.id}`}
                            sx={styles.widgets.widgetItem}
                            >
                            <Image src={item.iconSrc} alt={item.altText} />
                            <Box sx={styles.widgets.infoWrapper}>
                            <Heading as="h3">{item.title}</Heading>
                            <Text as="p">{item.description}</Text>
                            </Box>
                            </Box>
                            ))}
                            </Grid>
                        */}
                        {/* End of footer widgets area */}
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
                            Copyright by {new Date().getFullYear()} @<a sx={styles.mylink} href="/">Brinsol</a>
                        </Text>
                        </Box>
                    </Container>
                    </footer>
                    


      </Container>
    </Box>
  )
}

export default case3;



const styles = {

  btnbox:{
    mt: [4, null, 4, '40px', null, 3, null, '60px'],
    mb: ['10px', null, 4, null, null, 6, null, '60px'],      
    display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  icon:{
      width: '20px',
  },
  imgs:{
    //this is the image width for all pages
  width: ['100%', '80%', null, 488, 400, 430, null, 485],
},
    imgbox:{
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
    },
    img:{
      //this is the image width for all pages
    width: ['100%', '80%', null, 1080, 400, 430, null, 485],
  },


  mylink: {
    color: '#ea3a60'
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
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },

      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },








/////////////////////////////////////////////////////










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
myicondesc: {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: ['15px', 2, null, null, null, '17px', null, 3],
  lineHeight: [1.85, null, null, 1.5, null, '2.2'],
  color: '#343D48',
  mb: '30px',
  ml:4,
  '@media screen and (max-width:1220px)': {
      textAlign: 'left',
      ml:2,
  },
},
mydesc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    lineHeight: [1.85, null, null, 1.5, null, '2.2'],
    color: '#343D48',
    mb: '30px',
    ml:4,
    '@media screen and (max-width:1220px)': {
        textAlign: 'left',
        ml:2,
    },
},
mypart:{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: [0, null, 1],
    color: '#0F2137',
    textTransform: 'uppercase',
    fontWeight: '700',
    mb: [2, 3],
    lineHeight: 1.5,
    letterSpacing: ['1.5px', null, '2px'],
    '@media screen and (max-width:1220px)': {
        textAlign: 'left',
    },
},
mytitl:{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: ['24px', null, '28px', '26px', '36px', '42px', null, '48px'],
    color: '#0F2137',
    lineHeight: [1.3, null, null, null, 1.2],
    fontWeight: '700',
    letterSpacing: '-.5px',
    ml:4,
    mb: 2,
    '@media screen and (max-width:1220px)': {
        textAlign: 'left',
        ml: 1,
    },
},
mytit:{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
    color: '#0F2137',
    lineHeight: [1.3, null, null, null, 1.2],
    fontWeight: '700',
    letterSpacing: '-.5px',
    mb: 2,
    '@media screen and (max-width:1220px)': {
        textAlign: 'left',
    },
},
pers:{
    variant: 'sectionHeader.subTitle',
    opacity: 0.7,
    textAlign: 'Left',
},
banner: {
    pt: ['40px', null, null, null, '150px', '200px'],
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