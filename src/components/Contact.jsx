import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';
//images
import phoneImage from '../images/contactImg/phoneIcon.png';
import emailImage from '../images/contactImg/emailIcon.png';
import addressImage from '../images/contactImg/addressicon.png';

//materialUIComponents
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="contact">
      <div className="contactContent">
        <h1 className="contactContenTitle">CONTACT US</h1>
        <div className="contactContentInfo">
          <div className="contactContentInfoFlex">
            <img src={phoneImage} alt="photoShopImage" style={{ width: '2vh', height: '2vh', marginRight: '2vh' }}/>
            <p>+1 999 999 9999</p>
          </div>
          <div className="contactContentInfoFlex">
            <img src={emailImage} alt="photoShopImage" style={{ width: '2vh', height: '2vh', marginRight: '2vh' }}/>
            <p>sunsab@sunsab.com</p>
          </div>
          <div className="contactContentInfoFlex">
          <img src={addressImage} alt="photoShopImage" style={{ width: '2vh', height: '2vh', marginRight: '2vh' }}/>
            <p>Address: 1235 Street NW, Calgary, AB, Canada</p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contactContentInputContent">
          <TextField
            type="text"
            name="user_name"
            id="outlined-multiline-flexible-uncontrolled"
            className="customTextField"
            sx={{marginTop: '8vh', width: '60vh', color: 'black'}}
            label="Name"
            multiline
            rows={1}
          />
          <TextField
            type="email"
            name="user_email"
            id="outlined-multiline-flexible"
            className="customTextField"
            label="Email"
            multiline
            sx={{marginTop: '5vh', width: '60vh'}}
            rows={1}
            inputProps={{style: {textTransform : 'none'}}}
          />
           <TextField
            name="message"
            id="outlined-multiline-flexible"
            className="customTextField"
            label="Message"
            multiline
            sx={{marginTop: '5vh', width: '60vh'}}
            rows={12}
            inputProps={{style: {textTransform : 'none'}}}
          />
          <Button 
          type="submit"
          value="Send"
          variant="contained"
          sx={{marginTop: '5vh', width: '15vh', height: '5vh', color: 'black', 
          backgroundColor: '#FED136',
          '&:hover': {
            backgroundColor: '#FED136',
          },
          fontSize: '1.5rem',
          letterSpacing: '3px',
          fontFamily: "Montserrat",
          }}
          >SEND</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
