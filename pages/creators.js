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
          <div>Start now</div>
        </>
      }
      backgroundImage="/images/camera.jpeg"
    />
    <DescriptionSection
      title="GROW WITH US"
      intro={
        <>
          <div>Create content that</div>
          <div>inspires positive change</div>
        </>
      }
      description={
        <>
          <div>Work along brands that share your values</div>
          <div>and improve your social impact</div>
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
        Follower counts or number of likes is not a filter for us.
        <br />
        Our main concern is building a community of conscious influencers and
        content creators that empower positive change with their daily content.
      </p>
    </MarketingSection>

    <MarketingSection
      backImage="/images/think-outside-the-box.jpeg"
      frontImage="/images/instagram.jpeg"
    >
      <h2 className="underline">Apply to campaigns</h2>
      <p>
        Through your personalized profile you'll be able to view and connect
        with ethical and sustainable brands that care for the planet as much as
        you do.
      </p>
    </MarketingSection>
    <MarketingSection
      backImage="/images/pic-on-pic.jpeg"
      frontImage="/images/boxed-bottle.jpeg"
      reverse
    >
      <h2 className="underline">Craft your content</h2>
      <p>
        After being selected for a campaign, it's all about getting creative!{" "}
        <br />
        Share, post and reach out to consumers to influence them towards better
        choices.
      </p>
    </MarketingSection>
    <MarketingSection
      backImage="/images/jump.jpeg"
      frontImage="/images/heart-hands.jpeg"
    >
      <h2 className="underline">Make the world a better place</h2>
      <p>
        Your content has the ability to spread awareness on social and climate
        issues. When that power is used wisely it can help promote products with
        a positive impact on the planet.
      </p>
    </MarketingSection>
    <Footer />
  </>
);
