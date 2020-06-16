import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Summer of Shipping</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <main>

        <img src="undraw_operating_system_4lr6.svg" className="SVG" />
        <div className="grid">

          <div className="socialcontainer">
          <p className="PageTitle">WIKI PAGE</p>
            <ul>
              <li>
                <a href="https://forms.gle/3N3CfqbH6YkM1DF67" className="social">
                DISCORD
                </a>
              </li>

              <li>
                <a href="https://forms.gle/3N3CfqbH6YkM1DF67" className="social">
                TWITTER
                </a>
              </li>

              <li>
                <a href="https://forms.gle/3N3CfqbH6YkM1DF67" className="social">
                LINKEDIN
                </a>
              </li>
            </ul>
          </div>

          <div className="cardcontainer">
            <a href="https://forms.gle/3N3CfqbH6YkM1DF67" className="card">
              <h3>Join us! &rarr;</h3>
              <p>Build with us this summer! </p>
            </a>

            <a href="https://www.youtube.com/watch?v=tfbaDguurH0" className="card">
              <h3>Kickoff Video &rarr;</h3>
              <p>Watch the kickoff on YouTube. Slides in the video description</p>
            </a>

            <a href="https://forms.gle/ybJ7pdF5Q3axZbrbA" className="card">
              <h3>Become a Mentor &rarr;</h3>
              <p>Experienced dev? Want to help out with Code Reviews?</p>
            </a>

            <a href="https://docs.google.com/spreadsheets/d/1MdlCGpAAMbPb4VsLJUJLk8zlZ1dM9O_euiw0jFP6AdU/edit?usp=sharing" className="card">
              <h3>Team up &rarr;</h3>
              <p>Looking for collaborators? Find people at all stages of their projects</p>
            </a>
          </div>
        </div>

        <div className="Navigation">
          <div className="SoS-Text">
            <h1>SUMMER OF SHIPPING</h1>
            <img src="Ship Logo.svg" className="SoS-logo" />
          </div>
          <div className="Tabs">
            <a href="https://forms.gle/3N3CfqbH6YkM1DF67">
              HOME
            </a>

            <a href="https://forms.gle/3N3CfqbH6YkM1DF67">
              WIKI
            </a>

            <a href="https://forms.gle/3N3CfqbH6YkM1DF67">
              PROJECTS
            </a>

            <a href="https://forms.gle/3N3CfqbH6YkM1DF67">
              MATCH MAKING
            </a>
          </div>
        </div>
      </main>

      <style jsx>{`
      .SVG {
        z-index: -1;
        position: fixed;
        width: 55%;
        height: auto;
        bottom: 1em;
        right: 1em;
      }

      .Navigation {
        white-space: nowrap;
        position: fixed;
        display: flex;
        justify-content:space-between;
        align-items: center;
        top: 0px;
        left: 0px;
        padding: 1em;
        width: 100%;
        height: 40px;
        background: #4C4A63;
        box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
      }

      .SoS-logo {
        width: 10%;
        height: auto;
        padding-left: 1em;
      }

      .SoS-Text {
        padding-left: .5em;
        display: flex;
      }

      .SoS-Text h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        color: #EAEAEA;
      }

      .Tabs {
        display: flex;
        width: auto;
        font-size: 32px;
      }

      .Tabs a {
        padding-right: 1em;
        text-decoration: none;
        font-weight: 200;
        color: #EAEAEA;
        transition: transform .6s ease;
      }

      .Tabs a:hover {
        color: #4dd0e1;
        transform: scale(1.05);
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 100%;
        margin-top: 10rem;
        justify-content:space-around; 
      }

      .cardcontainer {
        display: grid;
        justify-content: center;
        width: 60%;
        grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
      }

      .card {
        background: linear-gradient(90deg, #3BBFE8 0%, #3CBFE7 49.29%, #2A85EF 100%);
        border-radius: 10px;
        padding: 1em;
        margin: 2em;
        height: 12em;
        text-decoration: none;
        color: #EAEAEA;
        box-shadow: 7.3118px 8.77416px 5.84944px rgba(0, 0, 0, 0.25);
        transition: transform .6s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        transform: scale(1.03);
      }

      .card h3 {
        font-size: 24px;
      }

      .card p {
        font-size: 20px;
        font-weight: 400;
      }

      .socialcontainer {
        justify-content: center;
        text-align: center;
      }

      .socialcontainer li {
        list-style: none;
        margin: 6em;
        transition: transform .3s ease;
      }

      .social {
        font-weight: 700;
      }

      .socialcontainer li:hover,
      .socialcontainer li:focus,
      .socialcontainer li:active {
        transform: scale(1.05);
      }

      .social {
        background: #4C4A63;
        border-radius: 10px;
        padding: 1em;
        margin: 2em;
        height: 1em;
        text-decoration: none;
        color: #EAEAEA;
        box-shadow: 7.3118px 8.77416px 5.84944px rgba(0, 0, 0, 0.25);
      }

      .PageTitle {
        white-space: nowrap;
        font-size: 52px;
        font-weight: 500;
        color: #EAEAEA;
      }
      `}</style>

      <style jsx global>{`
      body {
        background: #262534;
        font-family: 'Raleway';
      }
      `}</style>
    </div>
  )
}
