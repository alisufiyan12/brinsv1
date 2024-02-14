/** @jsx jsx*/
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 2,
    imgSrc: Performance,
    altText: 'Realtime Projects',
    title: 'Realtime Projects',
    text:
    'Unlike other communities here at Brinsol we work and record everything from scratch to let students know the real problems they can face.',
  },
  {
    id: 1,
    imgSrc: Partnership,
    altText: 'Best Teaching',
    title: 'Best Teaching',
    text:
      'Top-notch industry teaching practices are provided by people already working in the field and dealing with clients/students daily.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Community Hub',
    title: 'Community Hub',
    text:
      'Discord community setups for students to be in an environment of like-minded people who take risks and have the mindset of successful people.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Students Support',
    title: 'Students Support',
    text:
      "Support guides & moderators are available to make sure no student makes a mistake or takes a risk/path they don't understand before high-ticket deals.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Why us?"
          title="Meet the top standard"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
