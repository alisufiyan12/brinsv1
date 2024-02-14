/** @jsx jsx*/
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import newcase1 from 'assets/finalcase1.png';
import newcase2 from 'assets/finalcase2.png';
import newcase3 from 'assets/finalcase3.png';

const data = [
  {
    id: 1,
    imgSrc: newcase1,
    altText: 'Ecommerce',
    postLink: '/case1',
    title: 'Rs.0 to Rs.3.6m in a Month',
    authorName: 'Meta, Google', 
    date: 'Last Updated: 29 Dec 2023',
    starCount: 5,
  },
  {
    id: 2,
    imgSrc: newcase2,
    altText: 'Creative',
    postLink: '/case2',
    title: 'Rs.4.6 Million in 2 Months',
    authorName: 'Tiktok, Meta',
    date: 'Last Updated: 16 Jan 2024',
    starCount: 4,
  },
  {
    id: 3,
    imgSrc: newcase3,
    altText: 'Startup',
    postLink: '/case3',
    title: 'Spent Rs.401k in 15 Days at 8.18x ROAS',
    authorName: 'Meta, Google, Snapchat',
    date: 'Last Updated: 18 Mar 2023',
    starCount: 5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection() {
  return (
    <section id="feature" sx={{ variant: 'section.blogg' }}>
      <Container>
        <SectionHeader
          title="Latest Case Studies"
          slogan="Scale Above Everything"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
