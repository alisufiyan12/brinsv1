/** @jsx jsx*/
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaUserCircle ,FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

import Member7 from 'assets/team/member-7.png';
import Member8 from 'assets/team/member-8.png';
import Member9 from 'assets/team/member-9.png';

const data = [
  {
    id: 1,
    imgSrc: Member8,
    altText: 'Ali Sufiyan',
    title: 'Ali Sufiyan',
    designation: 'Web Design & Marketing',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/alisufiyan123',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/muhammad-ali-sufiyan-544959209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/ali_sufiyan_123?igsh=MWh3NWRseHNnZ243bA==',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member7,
    altText: 'Khubaib Usama',
    title: 'Khubaib Usama',
    designation: 'Lead Gen & Product Research',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/profile.php?id=100083637444657&mibextid=ZbWKwL',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/iamkhubaib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/khubaib_usama_27?igsh=ODA1NTc5OTg5Nw==',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member9,
    altText: 'Asadullah Malik',
    title: 'Asadullah Malik',
    designation: 'Support & Finance Management',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/profile.php?id=100023588018484&mibextid=hIlR13',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://x.com/Tinstat47?t=PGfW0Dlj_elZ9PaEEcsHUQ&s=09',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/malik__asad_47?igsh=MTl2bDZseGFxM3c4cA==',
        icon: <FaInstagram />,
      },
    ],
  }
];

export default function TeamSection() {
  return (
    <section sx={{variant: 'section.teamm'}}>
      <Container >
        <SectionHeader
          slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
