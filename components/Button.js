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
        background-color: white;
        color: #036200;
        padding: 5px 35px;
        border-radius: 4px;
        border: 2px solid #036200;
      }

      .button:hover {
        background-color: #036200;
        color: white;
      }
    `}</style>
  </>
);

export default Button;
