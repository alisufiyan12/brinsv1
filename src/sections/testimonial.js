/** @jsx jsx*/
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from 'assets/testimonial/avatar1.png';
import Avatar2 from 'assets/testimonial/avatar2.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';

import Avatar5 from 'assets/testimonial-1-1.png';
import Avatar6 from 'assets/testimonial-1-2.png';
import Avatar7 from 'assets/testimonial-1-3.png';
import Avatar8 from 'assets/testimonial-1-4.png';
import Avatar9 from 'assets/testimonial-1-5.png';
import Avatar10 from 'assets/testimonial-1-6.png';
import Avatar11 from 'assets/testimonial-1-7.png';
import Avatar12 from 'assets/testimonial-1-8.png';
import Avatar13 from 'assets/testimonial-1-9.png';
import Avatar14 from 'assets/testimonial-1-10.png';

const data = [
  {
    id: 1,
    title: 'E-commerce Setup',
    description:
      'Brinsol transformed our online presence! Their strategic approach to digital marketing propelled our business to new heights. Exceptional service, highly recommend.',
    avatar: Avatar2,
    name: 'Abdullah Ahad',
    designation: '@abdullah_ahad_12',
    review: 5,
  },
  {
    id: 2,
    title: 'E-commerce Entrepreneur',
    description:
    "Brinsol's Shopify expertise is unmatched. They created a seamless online store that exceeded my expectations. A reliable partner for any e-commerce venture.",
    avatar: Avatar4,
    name: 'Omer Saeed',
    designation: '@omer_saeed_12',
    review: 5,
  },
  {
    id: 3,
    title: 'Small Business Owner',
    description:
      'Choosing Brinsol was a game-changer for my small business. Their personalized marketing strategies delivered real results. A dedicated team committed to success.',
    avatar: Avatar3,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 4,
    title: 'Fashion Boutique Owner',
    description:
      "Brinsol's creative flair brought my brand to life. From social media campaigns to a stunning Shopify store, their work speaks volumes. Truly impressed!",
    avatar: Avatar14,
    name: 'Alaf Arsalan',
    designation: '@alaf_arsalan',
    review: 4,
  },
  {
    id: 5,
    title: 'EStartup Enthusiast',
    description:
      "Brinsol's startup-friendly pricing made their services accessible. Their digital marketing kick-started our visibility, proving invaluable to our early growth.",
    avatar: Avatar1,
    name: 'Fatima Aqeel',
    designation: '@fatima_112',
    review: 5,
  },
  {
    id: 6,
    title: 'Health and Wellness Blogger',
    description:
      "Brinsol's SEO expertise boosted my blog's visibility. Their team understands the nuances of online marketing, providing tailored solutions that work.",
    avatar: Avatar6,
    name: 'Zara Irshad',
    designation: '@zara_irshad',
    review: 5,
  },
  {
    id: 7,
    title: 'Tech Industry Professional',
    description:
    "Brinsol seamlessly integrated our complex tech offerings into an intuitive Shopify store. Their attention to detail and technical proficiency set them apart.",
    avatar: Avatar8,
    name: 'Bilal Khan',
    designation: '@bilal_khan',
    review: 5,
  },
  {
    id: 8,
    title: 'Local Retailer',
    description:
    "Brinsol's commitment to local businesses is evident. Their marketing strategies helped us connect with our community, driving foot traffic and sales.",
    avatar: Avatar5,
    name: 'Murym Rukhsar',
    designation: '@marium',
    review: 4,
  },
  {
    id: 9,
    title: 'Service Industry Entrepreneur',
    description:
    "Brinsol's one-time project option suited my service-oriented business perfectly. They delivered a standout campaign that continues to generate leads.",
    avatar: Avatar12,
    name: 'Sana Javaid',
    designation: '@javaid112',
    review: 5,
  },
  {
    id: 10,
    title: 'Artisan Crafts Seller',
    description:
    "Brinsol's creativity brought my handmade crafts to a global audience. Their dedication to showcasing our brand made a significant impact on sales.",
    avatar: Avatar9,
    name: 'Ahmad Saad',
    designation: '@saadahmad',
    review: 4,
  },
  {
    id: 11,
    title: 'Real Estate Professional',
    description:
    "Brinsol's digital marketing played a pivotal role in our property listings' visibility. Their strategies attracted quality leads, proving their expertise in the real estate sector.",
    avatar: Avatar11,
    name: 'Hira Kai',
    designation: '@kai_hira_1',
    review: 5,
  },
  {
    id: 12,
    title: 'Event Planner',
    description:
    "Brinsol's attention to detail made them the perfect partner for our event planning business. Their marketing efforts resulted in increased bookings and client satisfaction.",
    avatar: Avatar10,
    name: 'Abdullah Afaq',
    designation: '@abdullah_hussain',
    review: 5,
  },
  {
    id: 13,
    title: 'Food Industry Entrepreneur',
    description:
    "Brinsol's expertise in online marketing transformed our restaurant's online presence. They understand the nuances of the food industry, delivering tangible results",
    avatar: Avatar7,
    name: 'Amina',
    designation: '@amina94',
    review: 5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
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

export default function TestimonialCard() {
  return (
    <section id="pricing" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader 
        slogan="Testimonials" 
        title="What Our Clients Say" 
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
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
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
