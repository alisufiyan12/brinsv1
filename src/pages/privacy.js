/** @jsx jsx */
import React from 'react'
import { jsx, Box, Container, Image,Flex,  Grid, Button, Input, Heading, Text, Link as Lank } from 'theme-ui';


import { Link as Pink} from '../components/link';
import data from '../components/footer/footer.data';
import FooterLogo from 'assets/logo.svg';



const privacy = () => {
  return (
            <Box style={{}} sx={styles.banner}>
                <Container style={{}} sx={styles.container}>
                <Box style={{}} sx={styles.content}>
                    <Lank href='/'>
                    <Button sx={styles.mybutton} variant="primary">Home</Button>
                    </Lank>
                    <Text style={{fontSize: '12px', color: '#EA3A60'}} sx={styles.mypart}><i>Last Updated:</i> {new Date().getFullYear()}</Text>
                    <Heading style={{
                        fontSize: '40px',
                        }} sx={styles.mytit}>Privacy Policy</Heading>
                    <Box >
                        <Heading sx={styles.mytitl}>1. Introduction</Heading>
                        <Text style={{}} sx={styles.mydesc}>
                            Welcome to Brinsol! At Brinsol Agency, we value your privacy and 
                            want you to feel secure when using our services. This privacy 
                            policy outlines how we collect, process, and safeguard your 
                            personal data. By engaging with our website or services, you 
                            agree to the practices described herein.
                        </Text>
                    </Box>

                    <Box >
                        <Heading sx={styles.mytitl}>2. What Data Do We Collect?</Heading>
                        <Text style={{}} sx={styles.mydesc}>
                        We collect essential information to enhance your experience with 
                        our services. This includes identity, contact, financial, 
                        transaction, technical, profile, usage, and marketing data. We do 
                        not collect sensitive information.
                        </Text>
                    </Box>

                    <Box >
                        <Heading sx={styles.mytitl}>3. Disclosures Of Your Personal Data
                        </Heading>
                        <Text style={{}} sx={styles.mydesc}>
                        To fulfill our services, we may share your data with service providers, 
                        advisers, and authorities as required by law.
                        </Text>
                    </Box>

                    <Box >
                        <Heading sx={styles.mytitl}>4. International Transfers
                        </Heading>
                        <Text style={{}} sx={styles.mydesc}>
                        Some service providers are located outside the European Economic Area (EEA). 
                        We ensure your data's protection through safeguards or explicit consent.
                        </Text>
                    </Box>

                    <Box >
                        <Heading sx={styles.mytitl}>5. Data Security
                        </Heading>
                        <Text style={{}} sx={styles.mydesc}>
                        Your data's security is paramount to us. We implement appropriate measures 
                        to prevent unauthorized access or disclosure.

                        </Text>
                    </Box>

                    <Box >
                        <Heading sx={styles.mytitl}>6. Data Retention
                        </Heading>
                        <Text style={{}} sx={styles.mydesc}>
                        We retain your data for the necessary duration to fulfill our purposes, 
                        considering legal and accounting requirements.
                        </Text>
                    </Box>

                    <Box >
                        <Heading sx={styles.mytitl}>7. Your Legal Rights
                        </Heading>
                        <Text style={{}} sx={styles.mydesc}>
                        You have rights regarding your personal data. Feel free to contact us 
                        to exercise these rights. We respond promptly to all legitimate requests.
                        </Text>
                    </Box>

                    <Box >
                        <Heading sx={styles.mytitl}>8. Third-Party Links
                        </Heading>
                        <Text style={{}} sx={styles.mydesc}>
                        Our website may include links to third-party sites. We are not responsible 
                        for their privacy practices. We encourage you to review their privacy policies.
                        </Text>
                    </Box>

                    <Box >
                        <Heading sx={styles.mytitl}>9. Cookies
                        </Heading>
                        <Text style={{}} sx={styles.mydesc}>
                        We use cookies to enhance your browsing experience. You can manage your 
                        cookie preferences in your browser settings.
                        </Text>
                    </Box>

                    <Box >
                        <Text style={{}} sx={styles.mydesc}>
                        This privacy policy aims to be transparent about our practices. For any 
                        questions or concerns, please contact us at support@brinsol.agency. We 
                        appreciate your trust in Brinsol Agency.
                        </Text>
                    </Box>

                    <Box >
                        <Text style={{}} sx={styles.mydesc}>
                        Thank you for choosing Brinsol!</Text>
                    </Box>

                    <Text style={{fontSize: '12px', color: '#EA3A60'}} sx={styles.mypart}><i>Last Updated:</i> {new Date().getFullYear()}</Text>


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
                            Copyright by {new Date().getFullYear()} @<a sx={styles.mylink} href="https://brinsol.agency">Brinsol</a>
                        </Text>
                        </Box>
                    </Container>
                    </footer>
                    


                </Box>
            </Container>
        </Box>
  );
}

export default privacy;





const styles = {







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
        color: '#EA3A60',
        bg: 'transparent',
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
          color: 'white',
          bg: '#EA3A60',
        },
        '&:focus': {
            outline: 0,
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
