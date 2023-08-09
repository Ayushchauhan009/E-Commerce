import React from "react";
import {
  Navbar,
  Header,
  Request,
  Partners,
  ImageScroller,
  Approach,
  Sellers,
  CaseStudies,
  Technologies,
  Testimonials,
  Contact,
  Footer,
} from "../components";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Request />
      <Partners />
      <ImageScroller />
      <section id="ourapproach">
        <Approach />
      </section>

      <Sellers />
      <CaseStudies />
      <Technologies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
