import { useState } from "react";
import { useForm } from "react-hook-form";

import Head from "../components/Head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import DescriptionSection from "../components/DescriptionSection";
import Form, { Input } from "../components/Form";

export default () => {
  const { register, errors, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Head title="Zapien - Sign up as a Conscious Creator" />
      <Nav />
      <Hero
        title={
          <>
            <div>Collaborate with brands that</div>
            <div>make a difference</div>
          </>
        }
        description={<a href="#form-section">Promote a better lifestyle</a>}
      />
      <DescriptionSection
        title="JOIN US TODAY"
        description={
          <>
            <div className="description_size_s">
              <p>
                <strong>Thank you for your interest in joining Zapien</strong>
              </p>
              <p>
                We verify and score every profile that joins Zapien focusing on
                your posts, followers, interactions and comments.
              </p>
              <p>
                Your <strong>follower counts</strong> or
                <strong> number of likes</strong> on your photos are{" "}
                <strong>not important to us.</strong>
              </p>
              <p>
                We care if your profile aligns with our vision of sustainability
                and creating a better world.
              </p>
              <p>Sign up below and we’ll get back to you as soon as we can.</p>
            </div>
          </>
        }
      />
      <section id="form-section" className="m50">
        <div className="forms">
          {submitted ? (
            <div>
              Thank you for your interest in Zapien, we'll be in touch soon!
            </div>
          ) : (
            <Form
              onSubmit={handleSubmit(async (data) => {
                const request = await fetch("/api/form", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ type: "CREATOR", ...data }),
                });
                const { submitted } = await request.json();
                if (submitted) {
                  setSubmitted(true);
                }
              })}
            >
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
                name="website"
                label="Instagram"
                ref={register({ required: true })}
                placeholder="@username"
                error={errors.website && "Tell us your Instagram name"}
              />
            </Form>
          )}
        </div>
      </section>

      <Footer />
      <style jsx>{`
        #form-section {
          display: grid;
          place-items: center;
        }

        .forms {
          width: 600px;
        }

        .title {
          text-align: left;
          font-size: 35px;
        }
        .content {
          text-align: left;
          font-size: 18px;
        }

        .description_size_s > p {
          font-size: 16px;
        }

        .center {
          text-align: center;
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
            padding: 0;
          }
          .forms {
            grid-column: 1 / 3;
            grid-row: 2;
            width: 100%;
            padding: 5vw;
          }
      `}</style>
    </>
  );
};
