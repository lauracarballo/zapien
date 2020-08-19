import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Form, { Input, TextArea } from "../components/Form";
import { useForm } from "react-hook-form";

export default () => {
  const { register, errors, handleSubmit } = useForm();

  return (
    <>
      <Head title="Zapien - Contact" />
      <Nav />
      <section id="form-section" className="container">
        <div className="form-intro">
          <h2 className="title underline">Contact us</h2>
          <div className="content">
            <p>
              All feedback is welcome!
              <br /> Fill out the form and we’ll get in touch as soon as
              possible.
            </p>
          </div>
        </div>
        <div className="forms">
          <Form
            onSubmit={handleSubmit((data) =>
              fetch("/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              })
            )}
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
            <TextArea
              name="message"
              label="Message"
              ref={register({ required: true })}
              error={errors.message && "Please enter your message"}
            />
          </Form>
        </div>

        <style jsx>{`
        #form-section {
          display: grid;
          grid-template-columns: 40% 60%;
          margin-top: 50px;
        }
        .form-intro {
          grid-column: 1;
          width: 80%;
        }
        .forms {
          grid-column: 2;
          width: 100%; 
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
          }
          .forms {
            grid-column: 1 / 3;
            grid-row: 2;
            width: 100%;
            padding-top: 25px;
          }
        }
        
      `}</style>
      </section>
      <Footer />
    </>
  );
};
