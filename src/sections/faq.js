import React from 'react';
import { Box, Button, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';
import SectionHeader from 'components/section-header';

const accordionData = [
  {
    isExpanded: false,
    title: 'What services does Brinsol offer?',
    contents: (
      <div>
        Brinsol specializes in comprehensive online marketing solutions, 
        including digital advertising, SEO, social media management, and 
        Shopify store development. We tailor our services to meet the unique 
        needs of each client.
        </div>
    ),
  },
  {
    isExpanded: true,
    title: 'How much does it cost to hire Brinsol for online marketing services?',
    contents: (
      <div>
        Our pricing is tailored to individual client needs. We offer flexible 
        packages to accommodate various budgets, ensuring cost-effectiveness 
        while delivering high-quality results. Apply now for a personalized quote.     
        </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can I hire Brinsol for a one-time project or do you require ongoing commitments?',
    contents: (
      <div>
        We offer both one-time projects and ongoing services. Whether you 
        need a single campaign or continuous support, Brinsol can customize a 
        solution that fits your requirements.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How does Brinsol handle client communication and updates?',
    contents: (
        <div>
        We believe in transparent and open communication. Clients receive 
        regular updates on project progress, and our team is readily 
        available for any questions or concerns. We prioritize building 
        strong, collaborative relationships.
      </div>
    ),
},
{
    isExpanded: false,
    title: "Can Brinsol help with ongoing maintenance and updates for Shopify stores?",
    contents: (
      <div>
        Absolutely. Brinsol provides ongoing support, maintenance, and 
        updates to ensure your Shopify store remains secure, up-to-date, 
        and aligned with industry best practices.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box  sx={{ variant: 'section.faqq' }}>
      <Container>
        <SectionHeader
          slogan="Frequently Asked Questions"
          title="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any question? Please ask here we are ready to support
            </Heading>
            <Text as="p">
              If your question is not listed here, please feel free to
              reach our client's support.
            </Text>
            <Link path="https://api.whatsapp.com/send?phone=00923259594093">
              <Button style={{marginTop: '25px'}} variant="primary">
              Get Support
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#ea3a60',
    color: '#fff',
    borderRadius: '45px',
    fontSize: ['14px', null, null, 2],
    fontWeight: 700,
    p: '6.5px 19px',
    padding: ['12px 20px', null, '15px 30px'],
    letterSpacings: '-0.15px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
