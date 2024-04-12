import React from "react";
import PropTypes from "prop-types";
import "./footer.css";

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="footer">
      <ul>
        {/* Render the links passed as props */}
        {links.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      {/* Display the current year */}
      <p data-testid="footerContent">© {year}</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};
export default Footer;
