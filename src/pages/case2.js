/** @jsx jsx */

import React from 'react';
import { jsx, Box, Container, Image,Flex,  Grid, Button, Input, Heading, Text, Link as Lank } from 'theme-ui';



import { Link as Pink} from '../components/link';
import data from '../components/footer/footer.data';
import FooterLogo from 'assets/logo.svg';

import icc1 from '../assets/mytick.png'
import sc2 from '../assets/sc2.png'


import cs1 from '../assets/cs2.png';

const case2 = () => {
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
                      }} sx={styles.mytit}>Rs.4.6 Million in 2 Months</Heading>
                    <Box >
                        <Heading sx={styles.mytitl}>The Challenge</Heading>
                          <Text style={{}} sx={styles.mydesc}>
                            <ul>
                              <li>Organisation and campaign management
                                  </li>
                                  <li>Maintaining brand power
                                  </li>
                                  <li>
                                  Combatting ad saturation
                                  </li>
                            </ul>
                          </Text>


                          <Heading sx={styles.mytitl}>The Result</Heading>
                          <Text style={{}} sx={styles.mydesc}>
                            <ul>
                              <li>Systemised workloads
                                  </li>
                                  <li>Brand mission congruent with marketing
                                  </li>
                                  <li>
                                  Fresh and highly effective creatives 
                                  </li>
                                  <li>
                                  1m p/m reliable revenue figures
                                  </li>
                            </ul>
                          </Text>

                            <Image sx={styles.imgs} src={sc2} />
                            <br/><br/>
                            <Heading sx={styles.mytitl}>What you will learn from this case study</Heading>
                            <Box sx={styles.myicondesc}>
                            <Image sx={styles.icon} src={icc1} />
                            <span>Why systemising workloads is essential for growth.</span><br/>
                            <Image sx={styles.icon} src={icc1} />  
                            <span> How to make sure you don't lose brand strength.</span><br/>
                            <Image sx={styles.icon} src={icc1} />  
                            <span>How to plan and launch new and effective creatives.</span><br/>
                            </Box> 

                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Introduction</Heading>
                              <Text style={{}} sx={styles.mydesc}>
                              This business is structured as a giveaway company meaning that buying a product from the 
                              website would automatically enter you into winning a large prize. You will see in the Shopify 
                              screenshot above that these giveaway campaigns are run on and off. This means that revenue 
                              was not consistent but rather worked periodically.<br/><br/>
                              For example, one giveaway would run for 2 weeks and there would be a 1-week break before 
                              running the next one. By nature, the business had a large number of complexities so we 
                              took a very systemised approach to minimise any issues caused by this. An extremely high volume 
                              of new marketing was required and this is how we tackled it…<br/>
                              </Text>
                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Campaign Management
                                </Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            Every week, this business would change its offering. For example… At the start of the giveaway 
                            campaign, the offer would be ‘buy one get one free. The week after would be ‘15% off sitewide’
                              This rapid change in offerings would mean new creatives and copy angles every 7 days. <br/><br/>
                              A high turnover of content and other marketing assets led us to create a management machine 
                              which kept every team member accountable for meeting deliverables. We aimed for 7 new video 
                              creatives every week with 7 pictures to accommodate. Each creative was scripted using effective 
                              frameworks and sent to the client to produce 2 weeks in advance. Additionally, 3 email campaigns 
                              were sent out each week.<br/><br/>
                              We decided to create a management dashboard. Each member of the team had access to this dashboard 
                              to stay informed of essential deadlines. This dashboard had an additional positive effect in that it 
                              helped us with tracking results. We would replicate highly effective campaigns in the following giveaways. 
                              And storing this data meant we could quickly figure out which offer yielded the best results on an ongoing basis.<br/>
                            </Text>

                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Combatting Brand Dilution
                              </Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            Naturally, with such a high level of creative assets, businesses run the risk of diluting their 
                            brand. Each ad iteration has the potential to lose brand messaging and therefore effectiveness. 
                            A brand guidance document was an essential tool for developing marketing assets. This ensured 
                            that every aspect of our marketing (FB ads, Email copy, Keywords, Video style) Was absolutely 
                            on point with the desired effect.<br/>
                            </Text>


                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>8 Figure Ad Frameworks
                              </Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            Scripting and designing highly effective video ads come with plenty of experience and marketing 
                            psychology. In the majority of our ads, we use 2 main frameworks.<br/><br/>
                                A.I.D.A:
                                Attention, Interest, Desire, Action.<br/><br/>
                                P.A.S: 
                                Problem, Agitate, Solution.<br/><br/>
                                These frameworks are a good starting block for video ad scripting. They have a proven 
                                methodology so we use them as frequently as possible.<br/><br/>
                                After nailing the ad scripts we alter and test hundreds of different hooks. The ‘Hook’ is the 
                                first 2 seconds of a video which is directly responsible for grabbing people's attention on 
                                social platforms.<br/><br/>
                                An ad is often a story of your product or customer. One of the best ways to start a 
                                story is through the ‘struggle’. This allows you to represent how a product can fix 
                                the user's need. Or better yet, change their lives.<br/>
                            </Text>

                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Conclusion</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            Tightly managed operations will have an extremely positive effect on your brand. Organisation 
                            in all aspects of your marketing will allow you to understand the root cause of your success 
                            and double down on what works. <br/><br/>
                            Brand messaging is the overarching factor that determines success… Creating a brand sheet means 
                            you can stick to creating ad assets that actually work.<br/><br/>
                            Utilising proven ad frameworks will allow you to scale without gambling. Tiny iterations on a proven angle will give ad accounts new life and allow even further success.<br/>
                            of the business.<br/>
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

export default case2;



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