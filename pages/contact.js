import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Form, { Input, TextArea } from "../components/Form";
import { useForm } from "react-hook-form";

export default () => {
  const { register, errors, handleSubmit } = useForm();

  return (
    <>
      <Head title="Zapien" />
      <Nav />
      <section id="form-section" className="m50">
        <div className="form-intro container">
          <h2 className="title underline">Contact us</h2>
          <div className="content">
            <p>
              We are happy to hear from you. <br></br> Fill out the form and
              we’ll get in touch as soon as possible.
            </p>
          </div>
        </div>
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
          grid-template-columns: 40% 70%;
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
