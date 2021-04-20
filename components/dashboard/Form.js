import Button from "./Button";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { forwardRef, useState } from "react";

const animatedComponents = makeAnimated();

export const Input = forwardRef(
  ({ name, type = "text", error, className, ...props }, ref) => {
    return (
      <>
        <input
          id={name}
          name={name}
          className={className}
          type={type}
          ref={ref}
          {...props}
        />

        {error && <div className="error">{error}</div>}
        <style jsx>{`
          input {
            width: 100%;
            border-radius: 3px;
            border: 1px solid rgb(223, 225, 230);
            font-weight: inherit;
            font-size: inherit;
            padding: 10px 15px;
            line-height: inherit;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
              rgba(9, 30, 66, 0.31) 0px 0px 1px;
            border-color: ${error ? "#ca3c25" : "#ddd"};
          }

          .error {
            text-align: right;
            font-size: 12px;
            color: #ca3c25;
          }

          @media screen and (max-width: 768px) {
          }
        `}</style>
      </>
    );
  }
);

export const TextArea = forwardRef(
  ({ large, defaultValue, name, error, placeholder }, ref) => {
    return (
      <>
        <textarea
          id={name}
          name={name}
          defaultValue={defaultValue}
          rows="4"
          ref={ref}
          placeholder={placeholder}
        />

        {error && <div className="error">{error}</div>}
        <style jsx>{`
          textarea {
            font-family: inherit;
            width: 100%;
            height: ${large ? "90px" : "auto"};
            border-radius: 3px;
            border: 1px solid rgb(223, 225, 230);
            font-weight: inherit;
            font-size: inherit;
            padding: 10px 15px;
            line-height: inherit;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
              rgba(9, 30, 66, 0.31) 0px 0px 1px;
            border-color: ${error ? "#ca3c25" : "#ddd"};
          }

          .error {
            text-align: right;
            font-size: 12px;
            color: #ca3c25;
          }

          @media screen and (max-width: 768px) {
          }
        `}</style>
      </>
    );
  }
);

export const Selector = forwardRef(
  ({ defaultValue, name, options, ...props }, ref) => {
    // const options = [
    //   { label: "Apple", value: "Apple" },
    //   { label: "Banana", value: "Banana" },
    //   { label: "Cherry", value: "Cherry" },
    // ];

    return (
      <>
        <CreatableSelect
          id={name}
          name={name}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isClearable={false}
          defaultValue={defaultValue}
          options={options}
          className="user__edit-input"
          styles={{
            dropdownIndicator: () => ({ display: "none" }),
            indicatorSeparator: () => ({ display: "none" }),
          }}
          ref={ref}
          {...props}
        />

        <style jsx>{`
          .user__edit-input {
            border-radius: 3px;
            border: 1px solid rgb(223, 225, 230);
            font-weight: inherit;
            font-size: inherit;
            padding: 5px 10px;
            line-height: inherit;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
              rgba(9, 30, 66, 0.31) 0px 0px 1px;
          }
        `}</style>
      </>
    );
  }
);

const Form = ({ onSubmit, children }) => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    event.persist();
    try {
      await onSubmit(event);
      event.target.reset();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        {children}
        <div className="form-row button">
          <Button disabled={loading} type="submit" style={{ width: "100%" }}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </fieldset>
      <style jsx>{`
        fieldset {
          border: none;
          margin: 0;
          padding: 40px;
        }

        .button {
          display: flex;
          justify-content: flex-end;
          margin-top: 25px;
        }
      `}</style>
    </form>
  );
};

export default Form;
