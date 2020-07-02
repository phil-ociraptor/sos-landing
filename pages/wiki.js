import Head from 'next/head'
import Navbar from '../components/Navbar';
import Fuse from 'fuse.js';
import links from '../links.json';
import React, { useState } from 'react';

function wiki() {

  const [query, setQuery] = useState('');

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
        <img src="undraw_operating_system_4lr6.svg" className="svg" />
        <Navbar />
        <div className="searchbox">
          <form className="search">
            <input type="text" placeholder="Search Wiki.." value={query} onChange={searchInput} />
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
        margin-top: 8rem;
        width: 100%;
        text-align: center;
      }

      ::placeholder {
        color: #c7c7c7;
      }

      input {
        text-align: center;
        border-radius: 30px;
        border-style: hidden;
        background-color: #4c4a63;
        padding: 10px;
        font-size: 24px;
        outline: none;
        color: #eaeaea;
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
        background: #4c4a63;
        color: #c0bfcf;
        word-wrap: break-word;
        text-decoration: none;
        text-align: center;
        border-radius: 15px;
        box-shadow: 10px 10px rgba(0, 0, 0, 0.3);
        transition: transform 0.25s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        background: linear-gradient(90deg, #3bbfe8 0%, #3cbfe7 49.29%, #2a85ef 100%);
        transform: scale(1.05);
        box-shadow: none;
        color: white;
      }
      .card h3 {
        font-weight: 600;
        font-size: 24px;
      }
      .card p {
        margin: 0;
        font-weight: 200;
        font-size: 20px;
        line-height: 1.5;
      }

      .svg {
        z-index: -1;
        position: fixed;
        width: 55%;
        height: auto;
        bottom: 1em;
        right: 1em;
      }
      `}</style>

      <style jsx global>{`
      body {
        background: #262534;
        font-family: 'Roboto', sans-serif;
      }
      `}
      </style>
    </div >
  );
}
export default wiki;