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
          font-size: 35px;
          padding-bottom: 15px;
          margin-top: 0px;
          line-height: 48px;
        }

        h3 {
          font-size: 25px;
          margin-top: 50px;
        }

        a {
          color: #333;
          text-decoration: none;
        }

        p {
          line-height: 28px;
          font-size: 16px;
        }

        a:hover:not(.logo) {
          color: black;
        }

        ol,
        ul {
          list-style: none;
          margin: 0px;
        }

        .m50 {
          margin: 50px 0;
        }

        .underline {
          position: relative;
          padding-bottom: 0;
        }

        .underline:after {
          content: "";
          width: 100%;
          height: 8px;
          background: #8cbf8a;
          position: absolute;
          bottom: -15px;
          left: 0;
          max-width: 250px;
        }

        .center {
          display: grid;
          place-items: center;
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
          padding-right: 20px;
          padding-left: 20px;
        }

        .legal > p {
          font-size: 15px;
          margin-top: 10px;
        }

        @media screen and (max-width: 768px) {
          .container {
            padding-right: 30px;
            padding-left: 30px;
          }
          h1 {
            font-weight: 700;
            font-size: 35px;
          }
          h2 {
            font-weight: 700;
            font-size: 30px;
            padding-bottom: 15px;
            margin-top: 0px;
            line-height: 40px;
          }

          p {
            margin-top: 30px;
            line-height: 20px;
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;
