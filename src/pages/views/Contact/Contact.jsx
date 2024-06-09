import React from "react";
import { useState } from "react";

import "./Contact.css";

export default function Contact() {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("alessio.j.1993@gmail.com")
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div id='contact' className='contact-container child'>
      <div className='contact--container--inner'>
        <h1 className='contact--title'>Keep in Touch!</h1>
        <p className='contact--description'>You can find me here:</p>
      </div>
      <ol className='contact--list'>
        <li onClick={copyToClipboard}>
          <img
            className='contact--icon'
            src='/email--icon.png'
            alt='Email Icon'
          />
          alessio.j.1993@gmail.com
          {copySuccess && <span className='copy-success'>Email copiata!</span>}
        </li>
        <a
          href='https://github.com/AlessioBucheri'
          target='blank'
          rel='noreferrer noopen'
        >
          <li>
            <img
              className='contact--icon'
              src='/github-logo.png'
              alt='Github Icon'
            />
            AlessioBucheri
          </li>
        </a>
        <a
          href='https://www.linkedin.com/in/alessio-bucheri-462721214/'
          target='blank'
          rel='noreferrer noopen'
        >
          <li className='linkedin--contact'>
            <img
              className='contact--icon'
              src='/linkedin--icon.png'
              alt='Linkedin Icon'
            />
            Alessio Bucheri
          </li>
        </a>
      </ol>
    </div>
  );
}
