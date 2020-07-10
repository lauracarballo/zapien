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
          <div>Be creative</div>
          <div>for the planet</div>
        </>
      }
      description={
        <>
          <div>Campaign for brands that share your values</div>
        </>
      }
      backgroundImage="/images/camera.jpeg"
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
      backImage="/images/zero-waste.jpeg"
      frontImage="/images/smile.jpeg"
      reverse
    >
      <h2 className="underline">Sign up with us</h2>
      <p>
        Zapien is a community for conscious influencers and content creators who
        empower positive change with their daily content. <br />
        We don’t care about follower counts or number of likes on your photos
        but we do review all profiles to make sure your profile aligns with our
        values.
      </p>
    </MarketingSection>

    <MarketingSection
      backImage="/images/think-outside-the-box.jpeg"
      frontImage="/images/instagram.jpeg"
    >
      <h2 className="underline">Apply to campaigns</h2>
      <p>
        Ethical and sustainable brands will post their briefings on Zapien.{" "}
        <br />
        Through your personalise profile you'll be able to apply for campaigns
        and connect with them. <br /> Zapien gives you the chance to work along
        ethical and sustainable brands that match your area of expertise.
      </p>
    </MarketingSection>
    <MarketingSection
      backImage="/images/pic-on-pic.jpeg"
      frontImage="/images/boxed-bottle.jpeg"
      reverse
    >
      <h2 className="underline">Craft your content</h2>
      <p>
        After being selected for a campaign, it's your time to get creative!{" "}
        <br />
        Your content has the ability to influence consumers towards better
        consumer choices and can spread awareness on multiple topics. When that
        power is used wisely it can help promote products with a positive impact
        on the planet.
      </p>
    </MarketingSection>
    <MarketingSection
      backImage="/images/jump.jpeg"
      frontImage="/images/heart-hands.jpeg"
    >
      <h2 className="underline">Make the world a better place</h2>
    </MarketingSection>
    <Footer />
  </>
);
