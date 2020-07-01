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
      <div>Once you sign up our team will review your profile. </div>
      <div>
        We want to make sure that all content creators promote and share our
        values.
      </div>
      <div>Once youre accepted youre ready to start!</div>
    </MarketingSection>

    <MarketingSection
      backImage="/images/think-outside-the-box.jpeg"
      frontImage="/images/instagram.jpeg"
    >
      <h2 className="underline">Apply to campaigns</h2>
      <div>Once you sign up our team will review your profile. </div>
      <div>
        We want to make sure that all content creators promote and share our
        values.
      </div>
      <div>Once youre accepted youre ready to start!</div>
    </MarketingSection>
    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
      reverse
    >
      <h2 className="underline">Craft your content</h2>
      <div>Once you sign up our team will review your profile. </div>
      <div>
        We want to make sure that all content creators promote and share our
        values.
      </div>
      <div>Once youre accepted youre ready to start!</div>
    </MarketingSection>
    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
    >
      <h2 className="underline">Make the world a better place</h2>
      <div>Once you sign up our team will review your profile. </div>
      <div>
        We want to make sure that all content creators promote and share our
        values.
      </div>
      <div>Once youre accepted youre ready to start!</div>
    </MarketingSection>
    <Footer />
  </>
);
