import Head from "../components/Head";
import Nav from "../components/Nav";
import MarketingSection from "../components/MarketingSection";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import DescriptionSection from "../components/DescriptionSection";

export default () => (
  <>
    <Head title="Zapien" />
    <Nav />
    <Hero
      title={
        <>
          <div>Get ready to launch your next</div>
          <div>campaign with us</div>
        </>
      }
      description={
        <>
          <div>Meet our team of Conscious Creators</div>
        </>
      }
    />
    <DescriptionSection
      title="GROW WITH US"
      intro={
        <>
          <div>Meet our team </div>
          <div>of Conscious Creators </div>
        </>
      }
      description={
        <>
          <div>We will help you target conscious consumers and</div>
          <div>measure the real impact that your brand is having</div>
        </>
      }
    />
    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
      reverse
    >
      <h2 className="underline">Prepare your campaign</h2>
      <div>
        Post your briefing and our team will review your brand and your
        products.
      </div>
      <div>We want to make sure that all products meet our eco criteria</div>
    </MarketingSection>

    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
    >
      <h2 className="underline">Meet our conscious creators</h2>
      <div>
        Eco influencers and conscious creators will apply to your campaign
      </div>
      <div>
        You will be able to view their profiles and choose those who best fit
        you
      </div>
    </MarketingSection>
    <MarketingSection
      backImage="/images/meeting2.jpeg"
      frontImage="/images/meeting.jpeg"
      reverse
    >
      <h2 className="underline">Start your campaign</h2>
      <div>Once matched, you´re ready to start your campaign</div>
      <div>
        Contact the influencers and send all of the required details for a
        successfull campaign
      </div>
    </MarketingSection>
    <MarketingSection
      backImage="/images/analytics.jpeg"
      frontImage="/images/analytics2.jpeg"
    >
      <h2 className="underline">Track your campaign</h2>
      <div>
        Our technology tracks the success of the campaign and provides a
        dashboard to view likes, comments and overall sentiment
      </div>
    </MarketingSection>
    <Footer />
  </>
);
