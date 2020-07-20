import { useForm } from "react-hook-form";
import Button from "./Button";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <div className="form-row">
          <label className="firstName" htmlFor="firstName">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            ref={register({ required: true, maxLength: 20 })}
          />
        </div>
        <div className="form-row">
          <label className="lastName" htmlFor="lastName">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            ref={register({ required: true, maxLength: 20 })}
          />
        </div>
        <div className="form-row">
          <label className="email" htmlFor="email">
            Work Email
          </label>
          <input
            name="email"
            type="email"
            ref={register({ required: true, maxLength: 20 })}
          />
        </div>
        <div className="form-row">
          <label className="companyName" htmlFor="companyName">
            Company
          </label>
          <input
            name="companyName"
            type="text"
            ref={register({ required: true, maxLength: 20 })}
          />
        </div>
        <div className="form-row">
          <label className="website" htmlFor="website">
            Company Website
          </label>
          <input
            name="website"
            type="text"
            ref={register({ required: true, maxLength: 20 })}
          />
        </div>
        <div className="form-row button">
          <Button href="/">Submit</Button>
        </div>
      </fieldset>
      <style jsx>{`
        .form-container {
          padding: 40px 0;
        }

        form {
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
        }

        fieldset {
          border: none;
          margin: 0;
          padding: 40px;
        }

        .form-row {
          display: flex;
          padding: 6px 0;
          max-width: 600px;
        }
        .form-row > label {
          font-size: 16px;
          line-height: 30px;
          margin-right: 20px;
          align-self: center;
          flex: 35%;
        }
        .form-row > input {
          background-color: #f6f9fc;
          font-size: 15px;
          color: grey;
          padding: 10px 20px;
          flex: 60%;
          align-self: center;
          border: none;
          outline: none;
          width: auto;
          border-radius: 4px;
        }
        .button {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </form>
  );
};

export default Form;
