import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import transition from "../transition";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

function Contact() {
  const form = useRef();
  // const [emailError, setEmailError] = useState("");
  // const [submitStatus, setSubmitStatus] = useState("");

  // const handleEmailChange = (e) => {
  //   const emailValue = e.target.value;
  //   const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  //   if (!emailRegex.test(emailValue)) {
  //     setEmailError("Please enter a valid email address");
  //   } else {
  //     setEmailError("");
  //   }
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  //   const emailValue = form.current.user_email.value;

  //   if (!emailRegex.test(emailValue)) {
  //     setSubmitStatus("fail");
  //     setEmailError("Please enter a valid email address");
  //     return;
  //   }

  //   setSubmitStatus("loading");

  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_EMAILJS_SERVICE_ID,
  //       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  //       form.current,
  //       {
  //         publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  //       }
  //     )
  //     .then(
  //       () => {
  //         setSubmitStatus("success");
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         setSubmitStatus("fail");
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    <div id="contact" className="contact">
      <div className="contactContent">
        <h1 className="heading contactContenTitle">CONTACT US</h1>
        
        <div className="contactContentInfo">
          <div className="contactContentInfoFlex">
            <PhoneIcon style={{ marginRight: "10px", fontSize: '2rem' }} />
            <p>+1 403-992-9021</p>
          </div>
          <div className="contactContentInfoFlex">
            <EmailIcon style={{ marginRight: "10px", fontSize: '2rem' }} />
            <p>sales@sunsab.com</p>
          </div>
          {/* <div className="contactContentInfoFlex">
            <LocationOnIcon style={{ marginRight: "10px", fontSize: '2rem' }} />
            <p>Address: 1235 Street NW, Calgary, AB, Canada</p>
          </div> */}
        </div>

        {/* <form
          ref={form}
          onSubmit={sendEmail}
          className="contactContentInputContent"
        >
          <TextField
            type="text"
            name="user_name"
            id="outlined-multiline-flexible-uncontrolled"
            className="customTextField"
            sx={{ marginTop: "10px" }}
            label="Name"
            multiline
            rows={1}
            required
            InputLabelProps={{
              style: { fontSize: "14px" },
            }}
          />
          <TextField
            type="email"
            name="user_email"
            id="outlined-multiline-flexible"
            className="customTextField"
            label="Email"
            multiline
            sx={{ marginTop: "10px" }}
            rows={1}
            inputProps={{ style: { textTransform: "none" } }}
            required
            error={!!emailError}
            helperText={
              <span style={{ fontSize: "14px" }}>{emailError}</span> // Change font size here
            }
            onChange={handleEmailChange}
            InputLabelProps={{
              style: { fontSize: "14px" },
            }}
          />
          <TextField
            name="message"
            id="outlined-multiline-flexible"
            className="customTextField"
            label="Message"
            multiline
            sx={{ marginTop: "10px"}}
            rows={12}
            inputProps={{ style: { textTransform: "none" } }}
            InputLabelProps={{
              style: { fontSize: "14px" },
            }}
          />
          <div className="contact-button">
            <Button
              type="submit"
              value="Send"
              variant="contained"
            >
              {submitStatus === "loading" ? "Loading..." : "SEND"}
            </Button>
          </div>
          {submitStatus === "success" && (
            <p style={{ fontSize: "16px", marginTop: "20px", color: "green" }}>
              Email sent successfully!
            </p>
          )}
          {submitStatus === "fail" && (
            <p style={{ fontSize: "16px", marginTop: "20px", color: "red" }}>
              Failed to send email. Please try again.
            </p>
          )}
        </form> */}
      </div>
    </div>
  );
}

export default transition(Contact);
