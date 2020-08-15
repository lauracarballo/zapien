import Link from "next/link";

const Button = ({ type = "button", href, children, ...props }) => (
  <>
    {href ? (
      <Link href={href}>
        <a className="button" {...props}>
          {children}
        </a>
      </Link>
    ) : (
      <button type={type} className="button" {...props}>
        {children}
      </button>
    )}

    <style jsx>{`
      .button {
        position: relative;
        background-color: #2d6f2b;
        color: #fff;
        text-transform: uppercase;
        padding: 15px 40px;
        border-radius: 1px;
        border: none;
        overflow: hidden;
        transition: all 0.3s;
        z-index: 1;
      }

      .button:hover {
        color: #fff;
      }

      .button:before {
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

      .button:hover:before {
        width: 100%;
      }

      .button:after {
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
    `}</style>
  </>
);

export default Button;
