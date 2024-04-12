import React from "react";
import PropTypes from "prop-types";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import "./about.css";
import SocialWidget from "@/components/Widget/SocialWidget";
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

const socialLinks = [
  {
    text: "Follow me on Twitter",
    url: "https://twitter.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg",
  },
  {
    text: "Follow me on LinkedIn",
    url: "https://www.linkedin.com/feed/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    text: "Follow me on GitHub",
    url: "https://github.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    text: "Email me",
    url: "mailto:whoami@example.com",
    logo: "https://img.icons8.com/?size=64&id=6mtfF8X7F8eV&format=png",
  },
];

// export default function About() {
//   //Return HTML elements for About page
//   return (
//     <div className="body">
//       <div className="navebar">
//         <Navebar className="Navebar" />
//       </div>

//       <div className="footerBox">
//         <Footer className="Footer" links={links} />
//       </div>
//     </div>
//   );
// }
export default function About() {
  //Return HTML elements for About page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>

      <div className="aboutBody">
        <div className="aboutDescription">
          <h1 className="h1">I’m Jane. I live in New York City, where I develop the future.</h1>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi..
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi..
          </p>
          <br></br>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi..
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi..
          </p>
          <br></br>
          <br></br>
        </div>

        <div className="aboutColumn">
          <div className="imageStyle">
            <img src="pic.png" />
          </div>

          <SocialWidget links={socialLinks} />
          {/* <div className="links">Link 1</div>
          <div className="links">Link 2</div>
          <div className="links">Link 3</div>
          <div className="links">Link 4</div> */}
        </div>
      </div>

      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
      </div>
  );
}
