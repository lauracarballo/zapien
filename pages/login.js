import Button from "../components/Button";
import Form, { Input } from "../components/Form";
import { useForm } from "react-hook-form";

export default () => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <div className="page-login">
      <div className="login">
        <div className="login__content">
          <h1 className="login__content__title">Zapien</h1>
          <h2 className="login__content__undertitle">Login</h2>
          <p>Brands and creators can log in here</p>
          <Input
            name="email"
            type="email"
            label="Email"
            ref={register({ required: true })}
            error={errors.email && "Please enter a valid email address"}
          />
          <Button type="submit">Login</Button>
        </div>
      </div>
      <style jsx>{`
        .page-login {
          background-image: url("/images/background-login.jpg");
          background-size: cover;
          height: 100vh;
        }

        .page-login:before {
          background-color: rgba(0, 0, 0, 0.3);
          position: absolute;
          height: 100vh;
          width: 100%;
          content: "";
          z-index: 1;
        }

        .login {
          position: relative;
          display: grid;
          place-items: center;
          height: 100%;
          z-index: 2;
        }

        .login__content {
          background-color: #fff;
          text-align: center;
          padding: 50px;
          border-radius: 5px;
        }

        .login__content__title {
          color: #036100;
        }
      `}</style>
    </div>
  );
};
