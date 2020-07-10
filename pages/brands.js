import Head from "../components/Head";
import Nav from "../components/Nav";
import MarketingSection from "../components/MarketingSection";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import DescriptionSection from "../components/DescriptionSection";
import Form from "../components/Form";

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
          <div>Start today</div>
        </>
      }
    />
    <DescriptionSection
      title="GROW WITH US"
      intro={
        <>
          <div>Connect with</div>
          <div>Conscious Creators </div>
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
      backImage="/images/begin.jpeg"
      frontImage="/images/light.jpeg"
      reverse
    >
      <h2 className="underline">Prepare your campaign</h2>
      <p>
        Create your briefing and share it into your profile. <br></br>
        We created a staging area in which our team will review the details of
        your campaign to make sure it aligns with our core values. Once you've
        been successfully reviewed, we'll share your briefing with all conscious
        influencers.
      </p>
    </MarketingSection>

    <MarketingSection
      backImage="/images/blogger.jpeg"
      frontImage="/images/blogger2.jpeg"
    >
      <h2 className="underline">Meet our conscious creators</h2>
      <p>
        Our network of conscious influencers and content creators will have a
        look at the briefing and apply to your campaign. <br></br> Conscious
        influencers are the voices powering change within our communities and we
        are giving you a chance to build meaningful relationships with them.
      </p>
    </MarketingSection>
    <MarketingSection
      backImage="/images/meeting2.jpeg"
      frontImage="/images/meeting.jpeg"
      reverse
    >
      <h2 className="underline">Start your campaign</h2>
      <p>
        Contact the conscious influencers and content creators who you want to
        work with and send them all the required details for a successful
        campaign.
      </p>
    </MarketingSection>
    <MarketingSection
      backImage="/images/analytics.jpeg"
      frontImage="/images/analytics2.jpeg"
    >
      <h2 className="underline">Track your campaign</h2>
      <p>
        Our technology will give you access to all the data necessary to track
        your campaign. All the content gets reviewed through our dashboard so
        your brand can analyse the overall sentiment of the campaign.
      </p>
    </MarketingSection>
    <section id="form-section">
      <div className="form-intro container">
        <h2 className="title underline">Get to know us!</h2>
        <div className="content">
          <p>
            We are happy to hear from you. <br></br> Fill out the form below and
            we’ll get in touch as soon as possible.
          </p>
        </div>
      </div>
      <div className="forms">
        <Form />
      </div>

      <style jsx>{`
        #form-section {
          display: grid;
          grid-template-columns: 40% 70%
        }
        .form-intro {
          grid-column: 1;
          width: 80%;
          padding: 3vw;
        }
        .forms {
          grid-column: 2;
          width: 83%;
          padding: 5vw;
        }
        .title {
          text-align: left;
          font-size: 35px;
        }
        .content {
          text-align: left
          font-size: 18px;
        }
      `}</style>
    </section>

    <Footer />
  </>
);
