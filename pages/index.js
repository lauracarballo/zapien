import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import Head from "../components/Head";
import Nav from "../components/Nav";
import MainHero from "../components/MainHero";
import DescriptionSection from "../components/DescriptionSection";
import MarketingSection from "../components/MarketingSection";
import Footer from "../components/Footer";
import StyledLink from "../components/StyledLink";

export default () => (
  <>
    <Head title="Zapien - Connecting ethical brands with conscious influencers" />
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
      <StyledLink href="/brands">I'm a Brand</StyledLink>
    </MarketingSection>

    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
    >
      <h2 className="underline">Promote a Sustainable and Ethical Lifestyle</h2>
      <p>
        Zapien is a community that incentives influencers and content creators
        to create content that empowers positive change.
      </p>
      <StyledLink href="/creators">I'm a Conscious Creator</StyledLink>
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

      .inline-styling {
        font-weight: 400;
      }

      @media screen and (max-width: 768px) {
        .inline-styling {
          margin-botton: 10px;
        }

        .hashtag-icon {
          font-size: 35px;
        }
        .hashtag-text {
          font-size: 36px;
        }
        .set-height {
          height: 90px;
        }
      }
    `}</style>
  </>
);
