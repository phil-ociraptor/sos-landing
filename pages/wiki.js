import Head from 'next/head'
import Navbar from '../components/Navbar';
import Fuse from 'fuse.js';
import links from '../links.json';
import React, { useState } from 'react';

function wiki() {

  const [query, setQuery] = useState('');
  const [test, setTest] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setQuery(test);
  }

  const fuse = new Fuse(links, {
    keys: [
      'title',
      'description',
      'type'
    ]
  })

  function searchInput({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  const results = fuse.search(query);

  const linkResult = query ? results.map(result => result.item) : links;

  return (
    <div className="container" >
      <Head>
        <title>Summer of Shipping</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Navbar />
        <div className="searchbox">
          <form className="search" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Wiki.." value={test} onChange={e => setTest(e.target.value)} />
            <input type="submit" value="Search"/>
          </form>
        </div>

        <div className="links">
          {linkResult.map(card => {
            const { title, description, link } = card;
            return (
              <a key={title} className="card" href={link}>
                <h3>{title}</h3>
                <p>{description}</p>
              </a>
            )
          })}
        </div>

      </main>

      <style jsx>{`

      .searchbox {
        margin-top: 16rem;
        width: 100%;
        text-align: center;
      }

      ::placeholder {
        color: #c7c7c7;
      }

      input {
        text-align: center;
        margin: .25em;
        border-style: hidden;
        background-color: #313131;
        padding: 12px;
        font-size: 24px;
        outline: none;
        color: #eaeaea;
        cursor: pointer;
        transition: transform 0.25s ease;
        box-shadow: 4px 4px rgba(0, 0, 0, 0.3);
      }

      input:hover,
      input:focus,
      input:active {
        transform: scale(1.02);
      }

      .links {
        justify-content: center;
        align-items: left;
        display: grid;
        grid-template-columns: repeat( auto-fit, 300px );
        margin-top: 3em;
      }

      .card {
        min-height: 20em;
        margin: 1em;
        padding: 1.5rem;
        text-align: center;
        background: #272727;
        color: #e0e0e0;
        word-wrap: break-word;
        text-decoration: none;
        text-align: center;
        box-shadow: 10px 10px rgba(0, 0, 0, 0.3);
        transition: transform 0.25s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        transform: scale(1.05);
      }
      .card h3 {
        font-weight: 400;
        font-size: 24px;
      }
      .card p {
        margin: 0;
        font-weight: 200;
        font-size: 20px;
        line-height: 1.5;
      }
      `}</style>

      <style jsx global>{`
      body {
        background: #181818;
        font-family: 'Roboto', sans-serif;
      }
      `}
      </style>
    </div >
  );
}
export default wiki;