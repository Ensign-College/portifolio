import "./Introduction.css";
import React from "react";
//import { FaLinkedin, FaXing, FaRegShareSquare } from 'react-icons/fa'; // Assuming you're using React Icons for the icons

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <img src="profilepic.jpg" alt="profile" clasName="pofilepic" />
      <h1>Software engineer, father, and believer</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
        adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.xing.com/profile/yourprofile" target="_blank" rel="noopener noreferrer"></a>
        <a href="/share" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
};

export default ProfileSection;
