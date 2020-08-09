import Button from "./Button";
import { forwardRef } from "react";

export const Input = forwardRef(
  ({ name, label, type = "text", error }, ref) => {
    return (
      <div className="form-row">
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} type={type} ref={ref} />
        {error}
        <style jsx>{`
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

          @media screen and (max-width: 768px) {
            .form-row {
              display: flex;
              flex-wrap: wrap;
              padding: 6px 0;
              max-width: 600px;
            }
          }
        `}</style>
      </div>
    );
  }
);

export const TextArea = forwardRef(({ name, label, error }, ref) => {
  return (
    <div className="form-row">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} rows="4" ref={ref} />
      {error}
      <style jsx>{`
        .form-row {
          display: flex;
          padding: 6px 0;
          max-width: 600px;
        }
        .form-row > label {
          font-size: 16px;
          line-height: 30px;
          margin-right: 20px;
          flex: 35%;
        }
        .form-row > textarea {
          background-color: #f6f9fc;
          font-family: inherit;
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

        @media screen and (max-width: 768px) {
          .form-row {
            display: flex;
            flex-wrap: wrap;
            padding: 6px 0;
            max-width: 600px;
          }
        }
      `}</style>
    </div>
  );
});

const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        {children}
        <div className="form-row button">
          <Button type="submit">Submit</Button>
        </div>
      </fieldset>
      <style jsx>{`
        form {
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
        }

        fieldset {
          border: none;
          margin: 0;
          padding: 40px;
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
