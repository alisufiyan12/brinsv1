/** @jsx jsx */

import React from 'react';
import { jsx, Box, Container, Image,Flex,  Grid, Button, Input, Heading, Text, Link as Lank } from 'theme-ui';



import { Link as Pink} from '../components/link';
import data from '../components/footer/footer.data';
import FooterLogo from 'assets/logo.svg';

import icc1 from '../assets/mytick.png'
import cs1 from '../assets/cs1.png';

import sc1 from '../assets/sc1.png'


const case1 = () => {
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
                      }} sx={styles.mytit}>Rs.0 to Rs.3.6m in a Month</Heading>

                    <Box >
                        <Heading sx={styles.mytitl}>The Challenge</Heading>
                          <Text style={{}} sx={styles.mydesc}>
                            <ul>
                              <li>Developing effective omnichannel marketing campaigns
                                  </li>
                                  <li>Overcoming major tracking issues 
                                  </li>
                                  <li>
                                  Increasing customer lifetime value
                                  </li>
                            </ul>
                          </Text>


                          <Heading sx={styles.mytitl}>The Result</Heading>
                          <Text style={{}} sx={styles.mydesc}>
                            <ul>
                              <li>800% revenue increase
                                  </li>
                                  <li>Increased profitability
                                  </li>
                                  <li>
                                  Systemised marketing funnel for long term growth
                                  </li>
                            </ul>
                          </Text>

                            <Image sx={styles.imgs} src={sc1} />
                            <br/><br/>
                            <Heading sx={styles.mytitl}>What you will learn from this case study</Heading>
                            <Box sx={styles.myicondesc}>
                            <Image sx={styles.icon} src={icc1} />
                            <span>The importance of building omnichannel marketing campaigns.</span><br/>
                            <Image sx={styles.icon} src={icc1} />  
                            <span>Why double attribution could be killing your profit margins and how to fix tracking issues.</span><br/>
                            <Image sx={styles.icon} src={icc1} />  
                            <span>How to capitalise on your customer base more effectively than ever before.</span><br/>
                            <Image sx={styles.icon} src={icc1} />  
                            <span>How to introduce massive offer scarcity without annoying your customers.</span><br/>
                            </Box> 

                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Introduction</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            We started working with this brand at the beginning of Oct 2023 just as the market was easing 
                            across the globe. This business primarily sells goods electronics and equipment to the US and UK markets.<br/><br/>
                            In our prescriptive analysis phase for this client, we noticed a severe lack of congruity across 
                            marketing channels, ad-hock discounts, little campaign planning and poor creative attention across every platform.<br/><br/>
                            A key focus for this brand was profitability at the highest possible level... 
                            We knew that with our campaign management team, e-mail marketing specialists and growth hacking techniques 
                            there was serious progress to be made.<br/>
                            </Text>
                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Planning</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            The business simply did not have the time, experience or resources to implement a harmonious 
                            marketing strategy. So our first action point was to plan out 3 months of proven and effective 
                            campaigns. <br/><br/>
                            It made perfect sense for our team to gain control of every aspect of the brand's marketing… 
                            Facebook ads, Google ads, TikTok ads, e-mail marketing, ad graphics creation, ad video scripting 
                            and landing page builds.<br/><br/>
                            Making the marketing congruent across each platform caused an instant improvement in results. And
                             we saw a revenue increase of over 100% in a matter of 2 weeks. Omnichannel marketing has a compound
                              effect and each platform works more effectively when combined and budget is allocated correctly. <br/>
                            </Text>

                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Tracking</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            Allocating budget in the correct place is essential for predictable growth and so we use tools like 
                            Triple Whale to monitor the true success of our campaigns. There were large discrepancies between the 
                            Facebook, Google ad dashboard and our tracking software so after making a few decisions based on the 
                            truest point of attribution our revenue and overall results improved.<br/><br/>
                            Double attribution is a major problem that E-com businesses face as the majority of good marketing 
                            agencies work on a commission basis. Our tracking guarantees that no double attribution takes place which means 
                            that not only is our ad data more accurate (Allowing us to make better marketing decisions) but were not 
                            charging over the odds for double attribution across multiple platforms.<br/>
                            </Text>


                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Leverage</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            After taking a broader view of the marketing funnel we noticed a huge pool of past customers that were not being 
                            leveraged. A famous law of marketing is that 80% of your sales come from 20% of your customers.<br/><br/>
                            So we built out a VIP e-mail system. <br/><br/>
                            A VIP system essentially segments out the top 20% of your customers and treats them with discounts, 
                            offers, new product drops and much more. This means that brand loyalty skyrockets which increases lifetime 
                            value and ultimately results in way more profit. We initiated this system just a few weeks into our partnership with 
                            this brand and the e-mail revenue jumped from 16% to 33% in a matter of days.<br/>
                            </Text>



                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Scarcity</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            Scarcity and urgency are tools that can be implemented into most brands without upsetting your potential customers… 
                            It just needs to be used at the right time and in the right place. Audience segmentation across all platforms allows 
                            us to increase the relevancy of an offer to the potential customer. For example… We can create a list of potential 
                            customers that were extremely close to pulling the trigger on a sale and fire hyper relevant offers to them across each of our 
                            marketing channels.<br/><br/>
                            This level of attention and proactivity is required for brands hoping to achieve respectable numbers. We call these marketing 
                            campaigns and events <apos></apos>revenue squeezes<apos></apos> and they were achieving close to 20k per day for each campaign.<br/>
                            </Text>


                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Creatives</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            Above everything, a focus on new creatives and angles was the main driver behind this brand's success. Developing a successful 
                            creative format was essential for us to understand where we could double down our marketing dollars. A successful creative format 
                            can be iterated on, over and over again.<br/><br/>
                            The way people are consuming content has changed vividly from just a few years ago and now UGC content combined with dynamic ads 
                            are leading the charge with our results. This led us to develop our script writing team to ensure ads were extremely compelling and 
                            up to date with trends. We also built out a video editing department in order to re-use and develop more creatives from single video 
                            shoots, this reduced the cost of video production and massively increased our ad ROAS.<br/>
                            </Text>



                            <Heading style={{marginTop: '10px'}} sx={styles.mytitl}>Conclusion</Heading>
                            <Text style={{}} sx={styles.mydesc}>
                            Having a clear roadmap and expected destination helps us smash deliverables when they need to be executed. <br/><br/>
                            This brand struggled to escape its state of entropy and needed a clear plan of action combined with new-age 
                            marketing techniques to scale to the next level.<br/><br/>
                            Brands need to be conscious of upcoming marketing opportunities as the landscape for DTC changes so frequently. 
                            A small shift in creative strategy and platform led us to increase this brand's revenue and overall profitability 
                            of the business.<br/>
                            </Text>
                    </Box>

                            <Box sx={styles.btnbox}>
                              <Lank href="https://form.jotform.com/240232603540442">
                              <Button  sx={styles.mybutton}>Start Application</Button>
                              </Lank>
                            </Box>

      <footer sx={styles.footer}>
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
                            Copyright by {new Date().getFullYear()} @<a sx={styles.mylink} href="/">Brinsol</a>
                        </Text>
                        </Box>
                    </Container>
                    </footer>
                    


      </Container>
    </Box>
  )
}

export default case1;

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

    imgbox:{
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      
    },
    img:{
      //this is the image width for all pages
    width: ['100%', '80%', null, 1080, 400, 430, null, 485],
  },
  imgs:{
    //this is the image width for all pages
  width: ['100%', '80%', null, 488, 400, 430, null, 485],
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