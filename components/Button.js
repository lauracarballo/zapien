import Link from "next/link";

const Button = ({ secondary, type = "button", href, children, ...props }) => (
  <>
    {href ? (
      <Link href={href}>
        <a
          className={secondary ? "secondary__button" : "primary__button"}
          {...props}
        >
          {children}
        </a>
      </Link>
    ) : (
      <button
        type={type}
        className={secondary ? "secondary__button" : "primary__button"}
        {...props}
      >
        {children}
      </button>
    )}

    <style jsx>{`
      .primary__button {
        display: inline-block;
        position: relative;
        background-color: #2d6f2b;
        color: #fff;
        text-transform: uppercase;
        padding: 12px 35px;
        border-radius: 1px;
        border: none;
        overflow: hidden;
        transition: all 0.3s;
        z-index: 1;
      }

      .primary__button:hover {
        color: #fff;
      }

      .primary__button:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: #3b8739;
        color: white;
        transition: all 0.5s;
        z-index: -1;
      }

      .primary__button:hover:before {
        width: 100%;
      }

      .primary__button:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2d6f2b;
        color: #fff;
        z-index: -2;
      }

      .secondary__button {
        display: inline-block;
        position: relative;
        background-color: transparent;
        color: #2d6f2b;
        text-transform: uppercase;
        padding: 10px 33px;
        border-radius: 1px;
        border: 2px solid #2d6f2b;
        overflow: hidden;
        transition: all 0.3s;
        z-index: 1;
      }

      .secondary__button:hover {
        color: #2d6f2b;
      }

      .secondary__button:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(59, 135, 57, 0.2);
        transition: all 0.5s;
        z-index: -1;
      }

      .secondary__button:hover:before {
        width: 100%;
      }

      .secondary__button:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        z-index: -2;
      }
      @media screen and (max-width: 768px) {
        .primary__button {
          font-size: 12px;
          padding: 12px 18px;
        }
        .secondary__button {
          font-size: 12px;
          padding: 10px 12px;
        }
      }
    `}</style>
  </>
);

export default Button;
