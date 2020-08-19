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
            <div>Connect with</div>
            <div>Conscious Influencers</div>
          </>
        }
        description={
          <div className="center">
            <StyledLink
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                const formSection = document.getElementById("contact");
                const location = formSection.getBoundingClientRect();
                scrollTo({
                  top: location.top,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              Get started
            </StyledLink>
          </div>
        }
      ></Hero>

      <DescriptionSection
        title="MAKE A DIFFERENCE"
        intro="Launch your next campaign with us"
        description={
          <>
            <div>We will help you target conscious consumers and</div>
            <div>measure the real impact that your brand is having</div>
          </>
        }
      />
      <div className="marketing_title center m50">
        <h3 className="underline">HOW IT WORKS</h3>
      </div>
      <MarketingSection
        backImage="/images/begin.jpeg"
        frontImage="/images/light.jpeg"
        reverse
      >
        <h2 className="underline">01. Prepare your campaign</h2>
        <p>
          Create a briefing for our conscious influencers and content creators.
          Our team will review the details of your briefing, once it's been
          approved, we'll share your campaign on the platform.
        </p>
      </MarketingSection>
      <MarketingSection
        backImage="/images/blogger.jpeg"
        frontImage="/images/blogger2.jpeg"
      >
        <h2 className="underline">02. Meet conscious creators</h2>
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
        <h2 className="underline">03. Start your campaign</h2>
        <p>
          Review the applications and choose the people you want to work. Gather
          all the required details for launching your campaign and we'll help
          you kick it off.
        </p>
      </MarketingSection>
      <MarketingSection
        backImage="/images/analytics.jpeg"
        frontImage="/images/analytics2.jpeg"
      >
        <h2 className="underline">04. Track your campaign</h2>
        <p>
          Our technology will give you access to all the data necessary to track
          your campaign. All the content gets reviewed through our dashboard so
          your brand can analyse the overall sentiment and success of the
          campaign.
        </p>
      </MarketingSection>
      <section id="contact" className="form-section container">
        <div className="form-intro">
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
            onSubmit={handleSubmit(async (data) => {
              const request = await fetch("/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type: "BRAND", ...data }),
              });
              const { submitted } = await request.json();
              if (submitted) {
                setSubmitted(true);
              }
            })}
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
              type="email"
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
        .form-section {
          display: grid;
          grid-template-columns: 40% 60%;
        }
        .form-intro {
          grid-column: 1;
          width: 80%;
        }
        .forms {
          grid-column: 2;
          width: 95%;
          
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
          .form-section {
            display: grid;
            grid-template-columns: 40% 60%;
            grid-template-rows: 25% 70%;
          }
          .form-intro {
            grid-column: 1 / 3;
            grid-row: 1;
            width: 80%;
          }
          .forms {
            grid-column: 1 / 3;
            grid-row: 2;
            width: 100%;
            padding-top: 50px;
          }
        }
        
      `}</style>
      </section>
      <Footer />
    </>
  );
};
