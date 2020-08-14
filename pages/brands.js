import { useState } from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import MarketingSection from "../components/MarketingSection";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import DescriptionSection from "../components/DescriptionSection";
import Form, { Input } from "../components/Form";
import { useForm } from "react-hook-form";
import StyledLink from "../components/StyledLink";

export default () => {
  const { register, errors, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
  return (
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
          <StyledLink className="center" href={"#form-section"}>
            <div>Get started</div>
          </StyledLink>
        }
      ></Hero>

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
        <h2 className="underline">Step 1: Prepare your campaign</h2>
        <p>
          Create your briefing and share it into your profile. <br></br>
          We created a staging area in which our team will review the details of
          your campaign to make sure it aligns with our core values. Once you've
          been successfully reviewed, we'll share your briefing with all
          conscious influencers.
        </p>
      </MarketingSection>
      <MarketingSection
        backImage="/images/blogger.jpeg"
        frontImage="/images/blogger2.jpeg"
      >
        <h2 className="underline">Step 2: Meet conscious creators</h2>
        <p>
          Our network of conscious influencers and content creators will have a
          look at the briefing and apply to your campaign. <br></br> Conscious
          influencers are the voices powering change within our communities and
          we are giving you a chance to build meaningful relationships with
          them.
        </p>
      </MarketingSection>
      <MarketingSection
        backImage="/images/meeting2.jpeg"
        frontImage="/images/meeting.jpeg"
        reverse
      >
        <h2 className="underline">Step 3: Start your campaign</h2>
        <p>
          Contact conscious influencers and content creators who you want to
          work with and send them all the required details for a successful
          campaign.
        </p>
      </MarketingSection>
      {/* <MarketingSection
        backImage="/images/analytics.jpeg"
        frontImage="/images/analytics2.jpeg"
      >
        <h2 className="underline">Track your campaign</h2>
        <p>
          Our technology will give you access to all the data necessary to track your campaign. All
          the content gets reviewed through our dashboard so your brand can analyse the overall
          sentiment of the campaign.
        </p>
      </MarketingSection> */}
      <section id="form-section">
        <div className="form-intro container">
          <h2 className="title underline">Get to know us!</h2>
          <div className="content">
            <p>
              We are happy to hear from you. <br></br> Fill out the form below
              and we’ll get in touch as soon as possible.
            </p>
          </div>
        </div>
        <div className="forms">
          <Form
            onSubmit={(event) => {
              event.persist();
              handleSubmit(async (data) => {
                console.log(data);
                const request = await fetch("/api/form", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });
                const { submitted } = await request.json();
                if (submitted) {
                  setSubmitted(true);
                  event.target.reset();
                }
              })(event);
            }}
          >
            {submitted && "Thanks for contacting us, we'll be in touch soon."}
            <Input
              name="name"
              label="Name"
              ref={register({ required: true })}
              error={errors.name && "Your name is required"}
            />
            <Input
              name="email"
              label="Email"
              ref={register({ required: true })}
              error={errors.email && "Please enter a valid email address"}
            />
            <Input
              name="companyName"
              label="Company"
              ref={register({ required: true })}
              error={errors.companyName && "Your company name is required"}
            />
            <Input
              name="website"
              label="Company Website"
              ref={register}
              error={errors.website}
            />
          </Form>
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
         @media screen and (max-width: 768px) {
          #form-section {
            display: grid;
            grid-template-columns: 40% 60%;
            grid-template-rows: 25% 70%;
          }
          .form-intro {
            grid-column: 1 / 3;
            grid-row: 1;
            width: 80%;
            padding: 0;
          }
          .forms {
            grid-column: 1 / 3;
            grid-row: 2;
            width: 100%;
            padding: 5vw;
          }
        }
        
      `}</style>
      </section>
      <Footer />
    </>
  );
};
