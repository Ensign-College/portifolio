import "./SocialWidget.css"; // CSS file to format Social element
import PropTypes from "prop-types";

// SocialWidget component
const SocialWidget = ({ links }) => {
  return (
    <section data-testid="socialWidget" className="social-widget">
      <ul>
        {links?.map((link, index) => (
          <li key={index} data-testid={`socialWidgetItem${index}`}>
            <div className="social-item">
              <img src={link.logo} alt={link.text}></img>
              <div className="social-item-content">
                <a href={link.url} target="_blank" rel="noreferrer">
                  <h3>{link.text}</h3>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SocialWidget.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ),
};

SocialWidget.defaultProps = {
  experiences: [],
};

export default SocialWidget;
