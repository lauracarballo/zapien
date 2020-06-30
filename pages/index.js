import Head from "../components/Head";
import Nav from "../components/Nav";
import MainHero from "../components/MainHero";
import DescriptionSection from "../components/DescriptionSection";
import MarketingSection from "../components/MarketingSection";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default () => (
  <>
    <Head title="Zapien" />
    <Nav />
    <MainHero
      title={
        <>
          <div>Connecting</div>
          <div>Ethical Brands with</div>
          <div>Conscious Creators</div>
          <div>to save the planet</div>
        </>
      }
      description="We connect ethical and sustainable brands with conscious creators. "
      image="/images/collage.jpg"
    />
    <DescriptionSection
      title="OUR MISSION"
      intro={
        <>
          <div>Reach and grow</div>
          <div>your conscious audience</div>
        </>
      }
      description={
        <>
          <div>Engage with an audience that cares about the planet</div>
          <div>and help build a community of conscious consumers</div>
        </>
      }
    />
    <MarketingSection
      backImage="/images/soap-handmade.jpeg"
      frontImage="/images/organic-food.jpeg"
      reverse
    >
      <h2 className="underline">In business to save the planet</h2>
      <p>
        Work with influencers and content creators that share the same values as
        your brand.
      </p>
      <Button name="I’m a Brand" />
    </MarketingSection>

    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
    >
      <h2 className="underline">
        Promote Sustainability and Ethical Lifestyle
      </h2>
      <p>
        Zapien is a community that incentives influencers and content creators
        to create content that empowers positive change.
      </p>
      <Button name="Become a Conscious Creator" />
    </MarketingSection>
    <Footer />
  </>
);
