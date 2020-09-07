import Link from "next/link";

const Button = ({ type = "button", href, children, ...props }) => (
  <>
    {href ? (
      <Link href={href}>
        <a className="primary__button" {...props}>
          {children}
        </a>
      </Link>
    ) : (
      <button className="primary__button" type={type} {...props}>
        {children}
      </button>
    )}

    <style jsx>{`
      .primary__button {
        display: inline-block;
        position: relative;
        background-color: #fff;
        color: black;
        font-size: 12px;
        text-transform: uppercase;
        padding: 10px 20px;
        border-radius: 5px;
        border: 2px solid #8cbf8a;
      }
    `}</style>
  </>
);

export default Button;
