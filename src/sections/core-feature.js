/** @jsx jsx*/
import { jsx, Container, Box } from 'theme-ui';
import { Link } from 'react-scroll';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import FeatureThumb from 'assets/core-feature-rounded.png';
import shapePattern from 'assets/shape-pattern2.png';

const data = {
  subTitle: 'our services',
  title: 'Increase Your Reach, Explode Your Sales.',
  description: "Our tailored approach to brand success means better clicks, higher quality traffic, scroll-stopping ads, better ROAS and ultimately... more profit.",
  btnName: 'Start Application',
  btnURL: 'https://form.jotform.com/240232603540442',
};

export default function CoreFeature() {
  return (
    <section id='coresec' sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image styles={{ Radius: '100px'}} src={FeatureThumb} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 150],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
