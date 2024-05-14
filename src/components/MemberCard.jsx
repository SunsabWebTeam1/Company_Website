import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import "../styles/Membercard.css";

// Defines the member card as a separate component.
function MemberCard({ name, title, img, linkedin }) {
  return (
    <div className="">
      <div className="card__border">
        <img
          className="card__img"
          src={require(`../images/profilePic/${img}`)}
          alt={`${name} headshot`}
        />
      </div>

      <h3 class="card__name">{name}</h3>
      <span class="card__profession">{title}</span>
      <div className="icons">
        <a
          href={linkedin}
          class="card__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn color="#Fff" fontSize="1.25em" />
        </a>
      </div>
    </div>
  );
}

export default MemberCard;
