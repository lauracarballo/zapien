import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
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
        <div className="set-height">
          <div className="inline-styling">Promote</div>
          <div className="typist">
            <div className="hashtag-icon">#</div>
            <TypistLoop interval={300}>
              {[
                "Sustainability",
                "EthicalBrands",
                "ClimateChange",
                "FairTrade",
                "HumanRights",
              ].map((text) => (
                <Typist cursor={{ show: false }} key={text} startDelay={300}>
                  <div>
                    <div className="hashtag-text">{text}</div>
                    <Typist.Backspace count={text.length} delay={1500} />
                  </div>
                </Typist>
              ))}
            </TypistLoop>
          </div>
        </div>
      }
      description="A network that connects ethical and sustainable brands with conscious influencers and creators. "
      image="/images/collage.jpg"
    />
    <DescriptionSection
      title="OUR MISSION"
      intro={
        <>
          <div>Reach and grow</div>
          <div>a conscious audience</div>
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
      <h2 className="underline">Business made for the planet</h2>
      <p>
        Work with influencers and content creators that share the same values as
        your brand.
      </p>
      <Button href="/brands">I'm a Brand</Button>
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
      <Button href="/creators">I'm a Conscious Creators</Button>
    </MarketingSection>
    <Footer />
    <style jsx>{`
      .typist {
        display: flex;
      }

      .hashtag-icon {
        font-size: 60px;
      }

      .hashtag-text {
        font-size: 56px;
      }
      .set-height {
        height: 120px;
      }
      .inline-styling {
        font-weight: 400;
      }
    `}</style>
  </>
);
