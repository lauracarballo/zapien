import Head from "../components/Head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import DescriptionSection from "../components/DescriptionSection";
import Form, { Input } from "../components/Form";
import { useForm } from "react-hook-form";

export default () => {
  const { register, errors, handleSubmit } = useForm();

  return (
    <>
      <Head title="Zapien" />
      <Nav />
      <Hero
        title={
          <>
            <div>Collaborate with brands that</div>
            <div>make a difference</div>
          </>
        }
        description={
          <>
            <a
              onClick={(event) => {
                event.preventDefault();
                const formSection = document.getElementById("form-section");
                const location = formSection.getBoundingClientRect();
                scrollTo({
                  top: location.top,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              href="#form-section"
            >
              Promote a better lifestyle
            </a>
          </>
        }
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
          <Form onSubmit={handleSubmit((data) => console.log(data))}>
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
              name="instagram-name"
              label="Instagram"
              ref={register({ required: true })}
              placeholder="@username"
              error={errors.email && "Tell us your Instagram name"}
            />
          </Form>
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
      `}</style>
    </>
  );
};
