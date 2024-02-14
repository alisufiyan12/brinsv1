import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import { VideoProvider } from 'contexts/video/video.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';
import Mainbanner from '../sections/main-banner';
import FAQ from '../sections/faq';
import CtaThree from 'sections/cta-three';
import Featured from 'sections/featured';
import Clients from 'sections/clients';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
        <Layout>
          <SEO title="Brinsol" />
          <Banner />
          <CtaThree />
          <Clients />
          <CoreFeature />
          <Mainbanner/>
          <BlogSection />
          {/*<Feature />*/}
          {/*<KeyFeature /> */}
          {/*<ServiceSection />*/}
          {/*<Featured />*/}
          <WorkFlow />
          {/*<Package /> */}
          {/*<TeamSection />*/}
          <TestimonialCard />
          <FAQ />
          <Subscribe />
        </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
