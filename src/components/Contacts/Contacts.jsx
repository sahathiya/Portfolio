import React, { useContext, useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";

import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";
import "./Contacts.css";

import emailjs from "@emailjs/browser";
function Contacts() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { theme } = useContext(ThemeContext);

  const handleClose = (event, reason) => {
    console.log('hhhhhh');
    
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleContactForm = (e) => {
    e.preventDefault();

    const serviceId = "service_dfo39gk";
    const templateId = "template_20govtg";
    const publicKey = "3HIyRqzp7ahgXnUBX";
    const templateparams = {
      name: name,
      email: email,
      to_name: "Fathima sahathiya serin",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateparams, publicKey)
      .then((res) => {
        console.log("SUCCESS!", res);

        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setErrMsg("");
        setOpen(false);
      })
      .catch((error) => {
        console.log("error in email send", error);
        setErrMsg("Enter all the fields");
        setOpen(true);
      });
  };

  return (
    <div
      className="contacts"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form onSubmit={handleContactForm}>
              <div className="input-container">
                <label
                  htmlFor="Name"
                  // className={classes.label}
                  className="label "
                >
                  Name
                </label>
                <input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="Name"
                  // className={`form-input ${classes.input}`}
                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label
                  htmlFor="Email"
                  // className={classes.label}
                  className="label "
                >
                  Email
                </label>
                <input
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="Email"
                  // className={`form-input ${classes.input}`}

                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label
                  htmlFor="Message"
                  // className={classes.label}
                  className="label "
                >
                  Message
                </label>
                <textarea
                  placeholder="Type your message...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="Message"
                  // className={`form-message ${classes.message}`}
                  className="form-message "
                />
              </div>

              <div className="submit-btn">
                <button
                  type="submit"
                  // className={classes.submitBtn}
                  className="submitBtn "
                >
                  <p style={{ color: theme.secondary }}>
                    {!success ? "Send" : "Sent"}
                  </p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={{
                        color: theme.secondary,
                        animation: !success
                          ? "initial"
                          : "fly 0.8s linear both",
                        position: success ? "absolute" : "initial",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={{
                        color: theme.secondary,
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <React.Fragment>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={handleClose}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: "var(--primaryFont)",
                }}
                message={errMsg}
              />
            </Snackbar>
          </div>

          <div className="contacts-details">
            <a
              href={`mailto:${contactsData.email}`}
              className="personal-details"
            >
              <div
                //  className={classes.detailsIcon}
                className="detailsIcon "
              >
                <FiAtSign style={{ color: theme.secondary }} />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className="personal-details">
              <div
                // className={classes.detailsIcon}
                className="detailsIcon "
              >
                <FiPhone style={{ color: theme.secondary }} />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
            </a>
            <div className="personal-details">
              <div
                // className={classes.detailsIcon}
                className="detailsIcon "
              >
                <HiOutlineLocationMarker style={{ color: theme.secondary }} />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
            </div>

            <div className="socialmedia-icons">
              {socialsData.twitter && (
                <a
                  href={socialsData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  // className={classes.socialIcon}
                  className="socialIcon"
                >
                  <FaTwitter
                    aria-label="Twitter"
                    style={{ color: theme.secondary }}
                  />
                </a>
              )}
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noreferrer"
                  // className={classes.socialIcon}
                  className="socialIcon"
                >
                  <FaGithub
                    aria-label="GitHub"
                    style={{ color: theme.secondary }}
                  />
                </a>
              )}
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  // className={classes.socialIcon}
                  className="socialIcon"
                >
                  <FaLinkedinIn
                    aria-label="LinkedIn"
                    style={{ color: theme.secondary }}
                  />
                </a>
              )}
              {socialsData.instagram && (
                <a
                  href={socialsData.instagram}
                  target="_blank"
                  rel="noreferrer"
                  // className={classes.socialIcon}
                  className="socialIcon "
                >
                  <FaInstagram
                    aria-label="Instagram"
                    style={{ color: theme.secondary }}
                  />
                </a>
              )}

              {socialsData.facebook && (
                <a
                  href={socialsData.facebook}
                  target="_blank"
                  rel="noreferrer"
                  // className={classes.socialIcon}
                  className="socialIcon "
                >
                  <FaFacebook
                    aria-label="CodePen"
                    style={{ color: theme.secondary }}
                  />
                </a>
              )}
              {socialsData.leetcode && (
                <a
                  href={socialsData.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  // className={classes.socialIcon}
                  className="socialIcon"
                >
                  <SiLeetcode
                    aria-label="GitLab"
                    style={{ color: theme.secondary }}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
    </div>
  );
}

export default Contacts;
