function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        html {
          box-sizing: border-box;
          font-weight: 400;
          font-size: 15px;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        img {
          max-width: 100%;
          height: auto;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
          color: #000;
        }
        h1 {
          font-weight: 700;
          font-size: 45px;
        }

        h2 {
          font-weight: 700;
          font-size: 38px;
          padding-bottom: 15px;
          margin-top: 0px;
          line-height: 48px;
        }

        a {
          color: #333;
          text-decoration: none;
        }

        p {
          margin-top: 30px;
          line-height: 28px;
          font-size: 18px;
        }

        a:hover:not(.logo) {
          color: black;
        }

        ol,
        ul {
          list-style: none;
          margin: 0px;
        }

        .underline {
          position: relative;
        }

        .underline:after {
          content: "";
          width: 100%;
          height: 8px;
          background: #8cbf8a;
          position: absolute;
          bottom: -15px;
          left: 0;
          max-width: 150px;
        }

        .logo {
          text-align: left;
          color: #036100;
          font-weight: bold;
          font-size: 25px;
        }

        .container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding-right: 55px;
          padding-left: 55px;
        }
      `}</style>
    </div>
  );
}

export default Layout;
