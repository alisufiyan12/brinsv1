/** @jsx jsx*/
import { jsx, Image, Box, Heading, Text, Flex, Link } from 'theme-ui';
import VideoBtn from './video-btn';
import VideoBtn1 from './video-btn1';
import VideoBtn2 from './video-btn2';
import eyeIcon from 'assets/eye-2.svg';
import { FaStar } from 'react-icons/fa';
import eyeeye from 'assets/pp-eye.png';

const section_arr = ['VideoBtn', 'VideoBtn1', 'VideoBtn2',]

const star_data = [
  {
    id: 1,
    starCount: 5
  },
  {
    id: 1,
    starCount: 4
  },
  {
    id: 1,
    starCount: 5
  },
];

export default function PostCard({
  src,
  alt,
  postLink,
  title,
  authorName,
  date,
  starCount,
  icon
}) {
  return (
    <Box sx={styles.card}>

      <Box sx={styles.fevCard.image}>
        <a href={postLink}>
        <Image style={{}} src={src} alt={alt} />
        </a>
        {section_arr.map((item) =>(
          <item  item={item}/>
          ))}
      </Box>
      <Flex sx={styles.postContent}>     
          <Box
          sx={styles.fevCard.stars}
          className={`starCount-${starCount}`}
          > 
          {/*<FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        <FaStar /> */}
          <Text style={{fontStyle: 'italic'}} as="span">{date}</Text>
          </Box>        
        <Heading style={{cursor: 'pointer'}} sx={styles.title}>
          <Link href={postLink} variant="blog">
            {title}
          </Link>
        </Heading>
        <Flex sx={styles.postFooter}>
          <Text as="p">
          <Image src={eyeIcon} sx={styles.studentswatch} alt=""/> {authorName}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const styles = {
  studentswatch:{
    marginRight: '10px',
  },
  
  fevCard: {
    backgroundColor: '#fff',
    transition: '500ms',
    border: '1px solid #F3F4F5',
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    width: '100%',
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    },
    image: {
      position: 'relative',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      overflow: 'hidden',
      width: '100%',
      display: 'flex',
      img: {
        display: 'block',
        width: '100%',
        filter: 'blur(0px)',
        '&:hover': {
          transition: 'all 0.25s',          
          filter: 'blur(2px)',
        },
      },
      '.videoBtn': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    content: {
      padding: ['10px 20px 20px', null, null, '10px 30px 20px'],
      h3: {
        fontSize: ['18px', null, null, '16px', null, '18px', '20px'],
        lineHeight: 1.5,
        color: 'black',
        margin: 0,
        fontWeight: 700,
        marginTop: '5px',
        marginBottom: '10px',
        a: {
          cursor: 'pointer',
          transition: '500ms',
          '&:hover': {
            color: 'primary',
          },
        },
      },
      p: {
        margin: 0,
        color: '#343D48',
        opacity: 0.8,
        display: 'flex',
        alignItems: 'center',
        fontSize: ['14px', null, null, '16px'],
        img: {
          marginRight: '15px',
        },
      },
    },
    stars: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '15px',
      color: '#0F2137',
      opacity: 0.8,
      marginTop: ['0px', null, '10px'],
      svg: {
        color: '#FFCE1F',
        fontSize: ['14px', null, null, '16px'],
        opacity: 1,
        '&:last-of-type': {
          marginRight: '10px',
        },
      },
      'svg + svg': {
        marginLeft: '5px',
      },
      '&.starCount-4': {
        'svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-3': {
        'svg:nth-of-type(4), svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-2': {
        'svg:nth-of-type(3), svg:nth-of-type(4), svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-1': {
        'svg:nth-of-type(2), svg:nth-of-type(3), svg:nth-of-type(4), svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-0': {
        svg: {
          color: '#F0ECDF',
        },
      },
    },
  },
  card: {
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(38,78,118,0.12)',
    borderRadius: '7px',
    m: '0 15px 40px',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0px 5px 20px rgba(38,78,118,0.15)',
    },
  },

  thumbnail: {
    borderRadius: '7px 7px 0 0',
    overflow: 'hidden',
    display: 'flex',
    img: {
      width: '100%',
    },
  },
  postContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: ['15px 20px', '25px 30px'],
  },
  title: {
    paddingTop: '6px',
    fontSize: [3, null, null, null, null, 4],
    color: 'heading',
    lineHeight: [1.4, 1.5],
    fontWeight: 700,
    mb: [1, 2, 2],
    pr: [0, null, null, null, 5],
  },
  postFooter: {
    width: '100%',
    justifyContent: 'space-between',
    alignItem: 'center',
    name: {
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'primary',
      lineHeight: 1.4,
    },
    date: {
      fontSize: ['14px', null, 2],
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
};
