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
    />
    <DescriptionSection
      title="GROW WITH US"
      intro="We will help you target conscious consumers and measure the real impact that your brand is having."
    />
    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
    >
      <h2>Promote Sustainability and Ethical Lifestyle</h2>
      <p>Lorem ipsum dadum taito dac</p>
      <Button name="Become a Conscious Creator" />
    </MarketingSection>

    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
      reverse
    >
      <h2>Promote Sustainability and Ethical Lifestyle</h2>
      <p>Lorem ipsum dadum taito dac</p>
      <Button name="Become a Conscious Creator" />
    </MarketingSection>
    <Footer />
  </>
);
