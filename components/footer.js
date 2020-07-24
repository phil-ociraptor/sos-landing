import Head from 'next/head'
import Navbar from './Navbar';
import Fuse from 'fuse.js';
import links from '../links.json';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
function footer() {
    return (
        <div className="container" >
            <Head>
                <title>Summer of Shipping</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            </Head>

            <main>
                <div className="footer">
                    <div className="foot-tag">
                        <a>
                            <FontAwesomeIcon icon={faTwitter} />
                            Follow Us on Twitter!
                        </a>
                    </div>
                    <div className="foot-tag">
                        <a>
                            <FontAwesomeIcon icon={faDiscord} />
                            Join Our Discord!
                        </a>
                    </div>
                </div>
            </main>

            <style jsx>{`

      .footer {
        height: 100px;
        width: 100%;
        color: #333333;
      }

      .foot-tag {
        font-size: 18px;
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
export default footer;