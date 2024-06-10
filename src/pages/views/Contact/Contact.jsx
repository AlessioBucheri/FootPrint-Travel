// src/pages/views/Contact/Contact.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  ContactContainer,
  ContactTitle,
  ContactDescription,
  ContactList,
  ContactListItem,
  ContactListItemImage,
  CopySuccess,
  StyledLink,
} from "../../../Styles/ContactStyles";

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
    <ContactContainer id='contact'>
      <Helmet>
        <title>FootPrint Travel - Contact</title>
        <meta name='contact' content='FootPrint Travel' />
      </Helmet>
      <div>
        <ContactTitle>Keep in Touch!</ContactTitle>
        <ContactDescription>You can find me here:</ContactDescription>
      </div>
      <ContactList>
        <StyledLink>
          <ContactListItem onClick={copyToClipboard}>
            <ContactListItemImage src='/email--icon.png' alt='Email Icon' />
            alessio.j.1993@gmail.com
            {copySuccess && <CopySuccess>Email copiata!</CopySuccess>}
          </ContactListItem>
        </StyledLink>
        <StyledLink
          href='https://github.com/AlessioBucheri'
          target='_blank'
          rel='noreferrer noopener'
        >
          <ContactListItem>
            <ContactListItemImage src='/github-logo.png' alt='Github Icon' />
            AlessioBucheri
          </ContactListItem>
        </StyledLink>
        <StyledLink
          href='https://www.linkedin.com/in/alessio-bucheri-462721214/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <ContactListItem>
            <ContactListItemImage
              src='/linkedin--icon.png'
              alt='Linkedin Icon'
            />
            Alessio Bucheri
          </ContactListItem>
        </StyledLink>
      </ContactList>
    </ContactContainer>
  );
}
