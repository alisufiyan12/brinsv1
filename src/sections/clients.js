/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Heading, Container, Text } from 'theme-ui';
import { Link } from 'components/link';
import { FaAngleRight, FaPlay } from 'react-icons/fa';

import Image from 'components/image';
import clients from 'assets/clients-3.png';

const Clients = () => {
  return (
    <section id="clients" sx={styles.section}>
        <Box sx={styles.services} id="services">
      <Container>
        <p sx={styles.mypp}>QUALITY COLLABORATIONS</p>
      <Heading sx={styles.mytt}>
      We've Worked With Industry <br /> Leading Brands. 
        </Heading>
        <Text sx={styles.mydesc} as="p">
        In recognition of consistently generating exceptional client results.
        </Text>
        <Flex as="figure" sx={styles.illustration}>
          <Image src={clients} alt="clients" />
        </Flex>
      </Container>
          </Box>
    </section>
  );
};

export default Clients;

const styles = {
  mydesc: {
  fontSize: ['15px', 2, null, null, null, '17px', null, 3],
  fontWeight: 400,
  lineHeight: [1.85, null, null, 2, null, '2.2'],
  color: 'text_secondary',
  mb: '30px',
},
    mypp:{
      fontSize: [0, null, 1],
      color: 'primary',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px'],
    },
    mytt:{
        fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
        color: 'heading_secondary',
        lineHeight: [1.3, null, null, null, 1.2],
        fontWeight: '700',
        letterSpacing: '-.5px',
        mb: 5,

    },
    link: {
        color: 'primary',
        fontSize: [1, null, 2],
        display: 'inline-block',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        mt: ['15px', null, null, null, '0px'],
        mb: ['20px', null, null, '50px'],
        svg: {
          position: 'relative',
          top: '3px',
        },
      },
    video: {
        pt: [80, null, null, null, null, null, 110],
        textAlign: 'center',
        h1:{
          fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
          color: 'heading_secondary',
          lineHeight: [1.3, null, null, null, 1.2],
          fontWeight: '700',
          letterSpacing: '-.5px',
          mb: 5,
        },
        h3: {
          margin: 0,
          color: 'black',
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

    blockTitle: {
        textAlign: 'center',
      },
    services: {
        pt: ['20px', null, null, null, null, null, '140px'],
      },
      blockTitle: {
        textAlign: 'center',
      },
  section: {
    pt: [2, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
    textAlign: 'center',
    h3: {
        margin: 0,
        color: 'black',
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
  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: [3, null, null, 0],
  },
};
