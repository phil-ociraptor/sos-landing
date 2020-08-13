import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Summer of Shipping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="inner-container">
        <h1 className="title">Summer of Shipping</h1>

        <p className="description">🦠 Has your internship been cancelled?</p>

        <p className="description">
          Are you planning on building anyways, but don't want to do it alone?
        </p>

        <p className="description">
          Then you're in the perfect spot. We're a community of college students
          and industry mentors who are building this summer. We learn from each
          other. We meet on Thursdays for demos, presentations, and networking.
          The end goal is to make you similarly competitive to those who
          completed internships over the summer. 🚀
        </p>

        <div className="call-to-action">
          <a
            className="button-primary"
            href="https://forms.gle/3N3CfqbH6YkM1DF67"
          >
            {' '}
            Join us!{' '}
          </a>

          <a
            className="button-secondary"
            href="https://forms.gle/ybJ7pdF5Q3axZbrbA"
          >
            {' '}
            Become a Mentor!{' '}
          </a>
        </div>

        <div className="grid">
          <a href="https://forms.gle/3N3CfqbH6YkM1DF67" className="card">
            <h3>Join us! &rarr;</h3>
            <p>Build with us this summer! </p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=tfbaDguurH0"
            className="card"
          >
            <h3>Kickoff Video &rarr;</h3>
            <p>Watch the kickoff on YouTube. Slides in the video description</p>
          </a>

          <a href="https://twitter.com/summer_of_ship" className="card">
            <h3>Twitter &rarr;</h3>
            <p>Stay up to date with us on Twitter</p>
          </a>

          <a href="https://forms.gle/ybJ7pdF5Q3axZbrbA" className="card">
            <h3>Become a Mentor &rarr;</h3>
            <p>Experienced dev? Want to help out with Code Reviews?</p>
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1MdlCGpAAMbPb4VsLJUJLk8zlZ1dM9O_euiw0jFP6AdU/edit?usp=sharing"
            className="card"
          >
            <h3>Team up &rarr;</h3>
            <p>
              Looking for collaborators? Find people at all stages of their
              projects
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          background-color: #212121;
          color: #adadad;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: Monaco, monospace;
        }

        .inner-container {
          max-width: 800px;
        }

        .call-to-action {
          width: 40%;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .call-to-action a {
          margin: 1rem 0;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          color: white;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.4;
          font-size: 1.2rem;
        }

        .description a {
          text-decoration: none;
          color: #4dd0e1;
        }

        .description a:hover {
          color: white;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          min-height: 12rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #4dd0e1;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .button-primary {
          color: rgba(33, 33, 33, 1);
          background-color: rgba(77, 208, 225, 1);
          border-radius: 10px;
          padding: 10px;
          font-size: 1.5rem;
          text-align: center;
        }

        .button-secondary {
          color: rgba(33, 33, 33, 1);
          background-color: rgba(77, 208, 225, 1);
          border-radius: 10px;
          padding: 10px;
          font-size: 1.5rem;
          text-align: center;
        }

        .button-primary:active,
        .button-primary:focus,
        .button-primary:hover {
          background-color: rgba(77, 208, 225, 0.75);
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .call-to-action {
            width: 45%;
            flex-direction: column;
          }

          .call-to-action a {
            margin: 1rem 0;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
