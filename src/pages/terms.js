/** @jsx jsx */
import React from 'react';
import { jsx, Box, Container,Image,  Grid, Button, Input, Heading, Text, Link as Lank } from 'theme-ui';


import { Link as Pink} from '../components/link';
import data from '../components/footer/footer.data';
import FooterLogo from 'assets/logo.svg';

const terms = () => {
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
            }} sx={styles.mytit}>Terms of Service</Heading>
        <Box >
            <Heading sx={styles.mytitl}>1. Definitions</Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Consumer: Any individual using our services for non-business purposes.
                </li>
                <li>Our Website: All hardware and software supporting Brinsol's online presence.
                </li>
                <li>Services: Offered products and support available on our website.
                </li>
                <li>Content: Material published on our website by us or third parties.
                </li>
                <li>Material: Content posted by users on our website.
                </li>
            </ul>
            </Text>
        </Box>




        <Box >
            <Heading sx={styles.mytitl}>2. Our Contract With You
            </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Your order is confirmed by e-mail, marking the contract.
                </li>
                <li>We may refund if a paid service becomes unavailable.
                </li>
                <li>Terms may change, applicable terms are those on the order day.
                </li>
                <li>Non-website purchases still adhere to these terms.
                </li>
                <li>Refunds processed within 7 days of a valid claim.
                </li>
            </ul>
            </Text>
        </Box>





        <Box >
            <Heading sx={styles.mytitl}>3. Your Account With Us
            </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Provide accurate and complete information.
            </li>
                <li>Maintain account confidentiality.
            </li>
                <li>unauthorized</li>
            </ul>
            </Text>
        </Box>




        <Box >
            <Heading sx={styles.mytitl}>4. Price, Payment, and Service Provision
            </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Prices may change, service withheld until confirmation.
                </li>
                <li>Monthly charges deducted from provided payment method.
            </li>
                <li>Services may be delivered via email or downloads.
            </li>
                <li>30-day cancellation notice, payment until notice period ends.
            </li>
                <li>Changes to services notified; termination is an option.
            </li>
            </ul>
            </Text>
        </Box>




        <Box >
            <Heading sx={styles.mytitl}>5. Our Action-based Guarantee
            </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Guarantees signing five clients within 3 months under specific conditions.
                </li>
                <li>Refund available if criteria met; access terminates on refund.
                </li>
                <li>Failure to reach criteria requires evidence submission.
                </li>
            </ul>
            </Text>
        </Box>





        <Box >
            <Heading sx={styles.mytitl}>6. Cancellation of Order
            </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>14-day money-back policy for digital products.
                </li>
                <li>Refund eligible if under 15% of the course is accessed.
                </li>
                <li>Guarantee participation overrides standard refund terms.
                </li>
            </ul>
            </Text>
        </Box>




        <Box >
            <Heading sx={styles.mytitl}>7. Foreign Taxes, Duties, and Import Restrictions
            </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Purchaser responsibility for lawful import and associated duties.
            </li>
                <li>Brinsol unaware of foreign laws; purchasers must comply.
            </li>
            </ul>.
            </Text>
        </Box>




        <Box >
            <Heading sx={styles.mytitl}>8. Dissatisfaction with the Services
            </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Contact us promptly with concerns; details required for resolution.
            </li>
            </ul>
            </Text>
        </Box>



        <Box >
            <Heading sx={styles.mytitl}>9. Disclaimers
            </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Continuous improvements may occur; inaccuracies possible.
                </li>
                <li>No implied warranties; external links not our responsibility.
                </li>
                <li>Limited liability for special, indirect, or consequential losses.
                </li>
            </ul>
            </Text>
        </Box>




        <Box >
        <Heading sx={styles.mytitl}>10. Your Material
        </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Users posting material grant us rights for use; copyright ownership warranted.
            </li>
            </ul>
            </Text>
        </Box>





        <Box >
        <Heading sx={styles.mytitl}>11. System Security
        </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Users agree not to violate website security; unlawful actions may lead to prosecution.
            </li>
            </ul>
            </Text>
        </Box>





        <Box >
        <Heading sx={styles.mytitl}>12. Acceptable Use Policy
        </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Users agree not to post specific content types; spamming prohibited.
            </li>
            </ul>
            </Text>
        </Box>





        <Box >
        <Heading sx={styles.mytitl}>13. Confidential Information and Intellectual Property Rights
            </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Users agree to keep confidential information safe.
                </li>
                <li>Brinsol defends intellectual property rights; users limited in use.
                </li>
            </ul>
            </Text>
        </Box>





        <Box >
        <Heading sx={styles.mytitl}>14. Your Email Address
        </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Users ensure email/username legality; indemnify for misuse.
            </li>
            </ul>
            </Text>
        </Box>





        <Box >
        <Heading sx={styles.mytitl}>15. Indemnity
        </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Users indemnify Brinsol against third-party claims related to their use.
                </li>
            </ul>
            </Text>
        </Box>





        <Box >
        <Heading sx={styles.mytitl}>16. Miscellaneous Provisions
        </Heading>
            <Text style={{}} sx={styles.mydesc}>
            <ul>
                <li>Email communications are binding; free services carry no obligation.

            </li>
                <li>No third-party benefits; void terms adjusted; no waiver.
            </li>
                <li>Disputes mediated before arbitration/litigation.
            </li>
                <li>Not liable for breaches beyond reasonable control.
            </li>
                <li>Governed by UK law; UN Convention on Contracts excluded.
            </li>
            </ul>
            </Text>
        </Box>




        <Box >
            <Text style={{}} sx={styles.mydesc}>
            I acknowledge that I have read and understood Brinsol's terms and conditions, and I agree to their inclusion in our contract.
        </Text>
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
  )
}

export default terms;

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