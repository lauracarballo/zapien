import Head from "../components/Head";
import Nav from "../components/Nav";
import MarketingSection from "../components/MarketingSection";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default () => (
  <>
    <Head title="Zapien" />
    <Nav />
    <Hero
      title={
        <>
          <div>Connecting #ethical #brands</div>
          <div>on our mission to save the planet</div>
        </>
      }
      description="We connect ethical and sustainable brands with conscious creators. "
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
