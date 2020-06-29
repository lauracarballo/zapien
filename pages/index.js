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
          <div>Connecting #ethicalBrands</div>
          <div>on our mission to save the planet</div>
        </>
      }
      description="We connect ethical and sustainable brands with conscious creators. "
      image="/images/collage.jpg"
    />
    <DescriptionSection
      title="OUR MISSION"
      intro="Lorem ipsum dolor sit amet consectetur adipiscing, elit litora tristique fermentum mus, pharetra pretium pellentesque aliquam volutpat. Nec eleifend varius id consequat volutpat in lacinia suspendisse, et lectus cursus maecenas sociis duis sodales nisi"
    />
    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
      reverse
    >
      <h2>In business to save the planet</h2>
      <p>Lorem ipsum dadum taito dac</p>
      <Button name="I’m a Brand" />
    </MarketingSection>

    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
    >
      <h2>Promote Sustainability and Ethical Lifestyle</h2>
      <p>Lorem ipsum dadum taito dac</p>
      <Button name="Become a Conscious Creator" />
    </MarketingSection>
    <Footer />
  </>
);
