import "./HomeB.css";
import PropTypes from "prop-types";

function Navbar({ options }) {
  if (!options) {
    return (
      options && (
        <nav data-testid="nav" className="navbar">
          <ul data-testid="ul">
            {options.map((option, index) => (
              <li key={index} data-testid={`li${index}`}>
                <a data-testid={`a${index}`} className="link" href={option.path}>
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )
    );
  }
  return (
    options && (
      <nav data-testid="nav" className="navbar">
        <ul data-testid="ul">
          <li data-testid="li0">
            <a data-testid="a0" className="link" href={options[0].path}>
              {options[0].label}
            </a>
          </li>
          <li data-testid="li1">
            <a data-testid="a1" className="link" href={options[1].path}>
              {options[1].label}
            </a>
          </li>
          <li data-testid="li2">
            <a data-testid="a2" className="link" href={options[2].path}>
              {options[2].label}
            </a>
          </li>
          <li data-testid="li3">
            <a data-testid="a3" className="link" href={options[3].path}>
              {options[3].label}
            </a>
          </li>
        </ul>
      </nav>
    )
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
const options = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/uses", label: "Uses" },
];
Navbar.defaultProps = {
  options,
};

export default Navbar;
