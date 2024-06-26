import "./WorkWidget.css"; // CSS file to format Work element
import PropTypes from "prop-types";

// WorkWidget component
const WorkWidget = ({ title, content, experiences }) => {
  return (
    <section data-testid="workWidget" className="work-widget">
      <h2 data-testid="workWidgetTitle">{title}</h2>
      <p data-testid="workWidgetContent">{content}.</p>
      <ul>
        {experiences?.map((experience, index) => (
          <li key={index} data-testid={`workWidgetItem${index}`}>
            <div className="work-item">
              <img data-testid={`workWidgetItemLogo${index}`} src={`${experience.logo}`} alt={experience.logo}></img>
              <div className="work-item-content">
                <h3 data-testid={`workWidgetItemTitle${index}`}>{experience.organization}</h3>
                <p data-testid={`workWidgetItemContent${index}`}>{experience.jobTitle}</p>
                <span data-testid={`workWidgetItemDates${index}`}>
                  {experience.startYear} - {experience.endYear ? experience.endYear : `Current`}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
